import requests
import time

# Function to get current crypto price from API (CoinGecko)
def get_crypto_price(crypto):
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={crypto}&vs_currencies=usd"
    response = requests.get(url)
    data = response.json()
    return data[crypto]['usd']

# Alert function
def check_price(crypto, threshold):
    current_price = get_crypto_price(crypto)
    if current_price >= threshold:
        print(f"Alert! {crypto} price has reached ${current_price} (Threshold: ${threshold})")
    else:
        print(f"{crypto} price: ${current_price}. Below threshold.")

# Example usage
crypto = "bitcoin"  # Track Bitcoin
threshold = 50000   # Set a threshold for alerts

while True:
    check_price(crypto, threshold)
    time.sleep(300)  # Check price every 5 minutes
