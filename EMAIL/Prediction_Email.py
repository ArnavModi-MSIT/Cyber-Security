import pandas as pd
import re
import pickle

# Define preprocessing functions for emails
def remove_html_tags(text):
    if isinstance(text, str):
        clean = re.compile('<.*?>')
        return re.sub(clean, '', text)
    return text

def normalize_text(text):
    if isinstance(text, str):
        return text.lower()
    return text

def remove_special_characters(text):
    if isinstance(text, str):
        return re.sub(r'[^a-z\s]', '', text)
    return text

# Load the saved model and vectorizer
with open('DATA/xgboost_phishing_email_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('DATA/vectorizer_email.pkl', 'rb') as vectorizer_file:
    vectorizer = pickle.load(vectorizer_file)

# Function to take multiline input
def get_multiline_input():
    print("Enter email content (Press Enter twice to submit):")
    lines = []
    while True:
        line = input()
        if line == "":
            break
        lines.append(line)
    return "\n".join(lines)

# Get user input for email content
emails = get_multiline_input()

# Preprocess the email content
data = {'Email Text': [emails]}  # Wrap emails in a list to create DataFrame
df_new = pd.DataFrame(data)

df_new['Email Text'] = df_new['Email Text'].apply(remove_html_tags)
df_new['Email Text'] = df_new['Email Text'].apply(normalize_text)
df_new['Email Text'] = df_new['Email Text'].apply(remove_special_characters)

# Vectorize the email content
X_email_new = vectorizer.transform(df_new['Email Text'])

# Make predictions
y_pred = model.predict(X_email_new)

# Display results
result = 'Phishing' if y_pred[0] == 1 else 'Safe'
print(f'Email: {emails[:30]}..., Prediction: {result}')
