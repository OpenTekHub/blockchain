# Welcome to OpenTekHub Blockchain Repository 🚀

This repository allows you to explore cryptocurrency price predictions using JavaScript and an API integration (CoinGecko). The project is designed to help you understand how to fetch and display real-time data, specifically cryptocurrency prices, by integrating external APIs into a web application.

## 🌟 What You Will Learn:
- HTML Structure: Basic layout of a web application.
- JavaScript API Integration: How to fetch data from external APIs (CoinGecko).
- CSS Styling: Applying modern styles with a clean design using Flexbox and responsive layouts.
- Interactive UI: Implementing input-based suggestions and dynamic content updates.
- Predict Cryptocurrency Prices: Learn how to predict and display live cryptocurrency prices based on user input.

## 🛠️ Prerequisites:
Basic understanding of HTML, CSS, and JavaScript.
A web browser (e.g., Chrome, Firefox).
Text editor (e.g., VS Code, Sublime).

### Step 1: Clone the Repository
First, you need to clone the repository to your local machine. In your terminal, type the following command:
```terminal
    git clone https://github.com/<your-username>/blockchain.git
```

### Step 2: Understand the Project Structure
Once cloned, explore the folder structure:

- index.html: The main HTML page for your web application.
- styles.css: Contains all the styling for your application.
- script.js: Includes the JavaScript logic to fetch cryptocurrency prices and handle user input.


### Step 3: Setting Up the HTML
In the index.html file, the structure of the webpage is defined. This includes:

- A header for the project title.
- A crypto price prediction section with input and a button to fetch prices.
- Repository Information with a link to the GitHub repository.

You don’t need to change anything here unless you want to add more features.

### Step 4: Style Your Webpage (CSS)
The styles in styles.css make your web app look modern and responsive.

Key points:

- The gradient background and clean typography provide a sleek look.
- Responsive design using media queries ensures the app works on all devices, from mobile to desktop.

If you want to experiment with the styles, open styles.css and modify.

### Step 5: JavaScript Logic (API Integration)
Now, the core part! The script.js file contains JavaScript code that fetches cryptocurrency prices using the CoinGecko API and displays them dynamically on the webpage.

- Crypto Suggestions: As the user types a symbol, suggestions are shown.
- API Fetching: After clicking "Predict Price", it fetches the price from the CoinGecko API.

Here's the key JavaScript code for fetching the price:

```terminal
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("price").innerText = "$" + data[crypto].usd;
    })
    .catch(error => {
        console.error("Error:", error);
    });
```
### Step 6: Testing the Application
To see the application in action:

- Open index.html in your browser (double-click the file).
- Type a cryptocurrency symbol (e.g., BTC for Bitcoin, ETH for Ethereum).
- Click "Predict Price" to see the current price.

### Step 7: Expanding the Project
Here are some ideas to expand the project:

- Add more cryptocurrencies to the cryptoMap object in script.js.
- Enhance the UI with more visuals, such as cryptocurrency logos or charts.
- Improve Error Handling by providing better feedback if the API fails or the symbol isn't valid.


### 🎓 Additional Resources:
- [CoinGecko API Docs](https://docs.coingecko.com/reference/introduction) - Learn more about the cryptocurrency data API.
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - Documentation for making HTTP requests in JavaScript.

Feel free to ask questions and contribute to the project! 👩‍💻 Happy Learning! ✨

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️
