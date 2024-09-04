import joblib

# Load the trained model from the file
model = joblib.load('xgboost_phishing_model.pkl')

# Now you can use the loaded model to make predictions
user_urls = ['http://example.com', 'http://phishing-site.com']
results = check_urls(user_urls)
for url, result in zip(user_urls, results):
    print(f"URL: {url} is {result}")
