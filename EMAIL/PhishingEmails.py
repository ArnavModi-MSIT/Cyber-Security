import pandas as pd
import re
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, roc_auc_score, roc_curve
import xgboost as xgb
import pickle
import os
import numpy as np

# Ensure necessary NLTK resources are downloaded
nltk.download('punkt')
nltk.download('stopwords')

# Load the dataset
data = pd.read_csv("DATA/Phishing_Email.csv")

# Sample 10% of the data
data = data.sample(frac=0.1, random_state=42)

# Drop rows where 'Email Text' is NaN
data = data.dropna(subset=['Email Text'])

# Function to remove HTML tags
def remove_html_tags(text):
    if isinstance(text, str):
        clean = re.compile('<.*?>')
        return re.sub(clean, '', text)
    return text

# Apply the function to remove HTML tags from 'Email Text'
data['Email Text'] = data['Email Text'].apply(remove_html_tags)

# Function to normalize text (convert to lowercase)
def normalize_text(text):
    if isinstance(text, str):
        return text.lower()
    return text

# Apply the function to normalize 'Email Text'
data['Email Text'] = data['Email Text'].apply(normalize_text)

# Function to remove special characters
def remove_special_characters(text):
    if isinstance(text, str):
        return re.sub(r'[^a-z\s]', '', text)
    return text

# Apply the function to remove special characters from 'Email Text'
data['Email Text'] = data['Email Text'].apply(remove_special_characters)

# Function to tokenize text (split into words)
def tokenize_text(text):
    if isinstance(text, str):
        return word_tokenize(text)
    return []

# Apply the function to tokenize 'Email Text'
data['Tokenized Text'] = data['Email Text'].apply(tokenize_text)

# Set of English stopwords
stop_words = set(stopwords.words('english'))

# Function to remove stopwords from tokens
def remove_stopwords(tokens):
    return [word for word in tokens if word not in stop_words]

# Apply the function to remove stopwords from 'Tokenized Text'
data['Cleaned Tokens'] = data['Tokenized Text'].apply(remove_stopwords)

# Initialize the Porter Stemmer
stemmer = PorterStemmer()

# Function to stem tokens (reduce to root form)
def stem_tokens(tokens):
    return [stemmer.stem(token) for token in tokens]

# Apply the function to stem 'Cleaned Tokens'
data['Stemmed Tokens'] = data['Cleaned Tokens'].apply(stem_tokens)

# Function to join tokens into a single string
def tokens_to_text(tokens):
    return ' '.join(tokens)

# Apply the function to reassemble text from 'Stemmed Tokens'
data['Cleaned Text'] = data['Stemmed Tokens'].apply(tokens_to_text)

# Optionally, save the cleaned data to a new CSV file
os.makedirs('DATA', exist_ok=True)  # Ensure 'DATA' directory exists
data.to_csv("DATA/Cleaned_Phishing_Email.csv", index=False)

# Feature Extraction using TF-IDF
vectorizer = TfidfVectorizer(max_features=5000, ngram_range=(1,2))  # Limit to top 5000 features and include bigrams
X = vectorizer.fit_transform(data['Cleaned Text'])
y = data['Email Type'].apply(lambda x: 1 if x == 'Phishing Email' else 0)  # Convert to binary labels

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train XGBoost model
model = xgb.XGBClassifier(eval_metric='logloss')
model.fit(X_train, y_train)

# Make predictions
y_pred_proba = model.predict_proba(X_test)[:, 1]

# Evaluate model with different thresholds
fpr, tpr, thresholds = roc_curve(y_test, y_pred_proba)
best_idx = np.argmax(tpr - fpr)  # Find index for best threshold
best_threshold = thresholds[best_idx]

# Use the best threshold for predictions
y_pred_best = (y_pred_proba >= best_threshold).astype(int)

# Evaluate with the best threshold
print(f"Best Threshold: {best_threshold}")
print("ROC AUC Score with Best Threshold:", roc_auc_score(y_test, y_pred_best))
print(classification_report(y_test, y_pred_best))

# Save the trained model and vectorizer
with open('DATA/xgboost_phishing_email_model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)

with open('DATA/vectorizer_email.pkl', 'wb') as vectorizer_file:
    pickle.dump(vectorizer, vectorizer_file)
