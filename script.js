// Dark Mode Toggle Functionality
const themeSwitch = document.getElementById('theme-switch'); // Ensure this matches your HTML button's ID
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Function to enable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    themeSwitch.classList.add('dark-theme'); // Update the switch appearance
    footer.classList.add('dark-mode');
}

// Function to disable dark mode
function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    themeSwitch.classList.remove('dark-theme'); // Update the switch appearance
    footer.classList.remove('dark-mode');
}

// Event listener for dark mode toggle button
themeSwitch.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode(); // Switch to light mode
        localStorage.removeItem('dark-mode'); // Remove from local storage
    } else {
        enableDarkMode(); // Switch to dark mode
        localStorage.setItem('dark-mode', 'enabled'); // Save in local storage
    }
});

// Optional: Check the initial mode on page load and apply the correct theme based on local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode(); // Default to light mode on load if localStorage is empty
}

// navbar hamburger
function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    const hamburger = document.querySelector('.hamburger-lines');
    menu.classList.toggle('menu-active');
    hamburger.classList.toggle('hamburger-active');
}

// A map of symbols to their corresponding API names
const cryptoMap = {
    // Major cryptocurrencies
    'BTC': 'bitcoin',
    'ETH': 'ethereum',
    'USDT': 'tether',
    'BNB': 'binancecoin',
    'USDC': 'usd-coin',
    'XRP': 'ripple',
    'DOGE': 'dogecoin',
    'ADA': 'cardano',
    'SOL': 'solana',
    'DOT': 'polkadot',
    'MATIC': 'matic-network',
    'SHIB': 'shiba-inu',
    'LTC': 'litecoin',
    'TRX': 'tron',
    'AVAX': 'avalanche-2',
    'ATOM': 'cosmos',
    'LINK': 'chainlink',
    'XMR': 'monero',
    'BCH': 'bitcoin-cash',
    'ALGO': 'algorand',
    'ICP': 'internet-computer',
    'VET': 'vechain',
    'FIL': 'filecoin',
    'NEAR': 'near',
    'HBAR': 'hedera-hashgraph',
    'TON': 'toncoin',
    'SUI':'sui',
    'OP': 'optimism',
    'INJ': 'injective',
    'ARB': 'arbitrum',

    // Stablecoins
    'DAI': 'dai',
    'BUSD': 'binance-usd',
    'PAX': 'paxos-standard',
    
    // DeFi tokens
    'UNI': 'uniswap',
    'AAVE': 'aave',
    'SUSHI': 'sushi',
    'COMP': 'compound-governance-token',
    'YFI': 'yearn-finance',
    
    // Layer 2 solutions and scaling
    'LRC': 'loopring',
    'ZRX': '0x',
    'OMG': 'omisego',

    // NFT and metaverse tokens
    'MANA': 'decentraland',
    'SAND': 'the-sandbox',
    'ENJ': 'enjincoin',
    'AXS': 'axie-infinity',
    'GALA': 'gala',

    // Privacy coins
    'ZEC': 'zcash',
    'DASH': 'dash',

    // Other popular tokens
    'FTM': 'fantom',
    'GRT': 'the-graph',
    '1INCH': '1inch',
    'CHZ': 'chiliz',
    'BAT': 'basic-attention-token',
    'CRV': 'curve-dao-token',
    'KSM': 'kusama',
    'QTUM': 'qtum',
    'ZIL': 'zilliqa',
    'EGLD': 'elrond-erd-2',
    'HOT': 'holotoken',
    'THETA': 'theta-token',
    'HNT': 'helium',
    'SNX': 'synthetix-network-token',
    'RUNE': 'thorchain',
    'XLM': 'stellar',
    'REN': 'ren',
    'FTT': 'ftx-token',
    'RVN': 'ravencoin',
    'KAVA': 'kava',
    'CRO': 'crypto-com-chain',
    'MIOTA': 'iota',
    'ETC': 'ethereum-classic',

    // Meme coins
    'BABYDOGE': 'baby-doge-coin',
    'SAFEMOON': 'safemoon',
    'ELON': 'dogelon-mars',
    'PEPE': 'memetic',
    'WIF': 'dogwithat',
    'BONK': 'bonk',
    'FLOKI': 'floki',
    
    // Add more symbols and tokens as needed
    'WETH': 'wrapped-ethereum',
    'MKR': 'maker',
    'BAL': 'balancer',
    'WLD': 'worldcoin',
    'OM': 'mantra-dao',
    'PHB': 'phoenix',
    'LISTA': 'lista',
    'RENDER': 'render',
};

const cryptoInput = document.getElementById('crypto');
const suggestionsBox = document.getElementById('crypto-suggestions');

cryptoInput.addEventListener('input', function() {
    const inputValue = cryptoInput.value.toUpperCase();
    suggestionsBox.innerHTML = ''; 

    const filteredCryptos = Object.keys(cryptoMap).filter(crypto => crypto.includes(inputValue));

    if (inputValue && filteredCryptos.length > 0) {
        suggestionsBox.style.display = 'block';
        filteredCryptos.forEach(crypto => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = crypto;
            suggestionItem.addEventListener('click', function() {
                cryptoInput.value = crypto; 
                suggestionsBox.style.display = 'none'; 
            });
            suggestionsBox.appendChild(suggestionItem);
        });
    } else {
        suggestionsBox.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('#crypto-form')) {
        suggestionsBox.style.display = 'none';
    }
});

document.getElementById('predict-btn').addEventListener('click', function() {
    const cryptoInputValue = cryptoInput.value.toUpperCase();
    const crypto = cryptoMap[cryptoInputValue];

    if (crypto) {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => {
            if (data[crypto]) {
                document.getElementById("price").innerText = "$" + data[crypto].usd;
                alert(`The current price of ${cryptoInputValue} is $${data[crypto].usd}`); // Alert with the price
            } else {
                document.getElementById("price").innerText = "Cryptocurrency not found!";
            }
        })
        .catch(error => {
            document.getElementById("price").innerText = "Error fetching price data.";
            console.error("Error:", error);
        });
    } else {
        document.getElementById("price").innerText = "Please enter a valid cryptocurrency symbol.";
    }
});

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Timeline for header and intro text animations
    let tl = gsap.timeline();

    tl.from("header h1", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "bounce.out"
    });

    tl.from(".tagline", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    // Crypto price predictor section
    tl.from("#crypto-price-predictor h2", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3
    });

    tl.from("#crypto-form", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power1.out"
    });

    tl.from("#predict-btn", {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.5)",
        delay: 0.2
    });

    // Animate the price result after prediction
    gsap.from("#price-result", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 1.5
   Here's the continuation and completion of your `script.js` file:

```javascript
    });
});

// Fetch price function to handle error alerts
function fetchPrice(crypto) {
    return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => {
            if (data[crypto]) {
                return data[crypto].usd;
            } else {
                throw new Error('Cryptocurrency not found');
            }
        });
}
