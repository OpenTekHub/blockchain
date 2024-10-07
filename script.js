const cryptoMap = {
    'BTC': { name: 'Bitcoin', apiName: 'bitcoin' },
    'ETH': { name: 'Ethereum', apiName: 'ethereum' },
    'USDT': { name: 'Tether', apiName: 'tether' },
    'BNB': { name: 'Binance Coin', apiName: 'binancecoin' },
    'XRP': { name: 'Ripple', apiName: 'ripple' },
    'DOGE': { name: 'Dogecoin', apiName: 'dogecoin' },
    'ADA': { name: 'Cardano', apiName: 'cardano' },
    'SOL': { name: 'Solana', apiName: 'solana' },
    'DOT': { name: 'Polkadot', apiName: 'polkadot' },
    'MATIC': { name: 'Polygon (Matic)', apiName: 'matic-network' },
    'SHIB': { name: 'Shiba Inu', apiName: 'shiba-inu' },
    'LTC': { name: 'Litecoin', apiName: 'litecoin' },
    'TRX': { name: 'Tron', apiName: 'tron' },
    'AVAX': { name: 'Avalanche', apiName: 'avalanche-2' },
    'ATOM': { name: 'Cosmos', apiName: 'cosmos' },
    'LINK': { name: 'Chainlink', apiName: 'chainlink' },
    'XMR': { name: 'Monero', apiName: 'monero' },
    'BCH': { name: 'Bitcoin Cash', apiName: 'bitcoin-cash' },
    'ALGO': { name: 'Algorand', apiName: 'algorand' },
    'ICP': { name: 'Internet Computer', apiName: 'internet-computer' },
    'VET': { name: 'Vechain', apiName: 'vechain' },
    'FIL': { name: 'Filecoin', apiName: 'filecoin' },
    'NEAR': { name: 'Near', apiName: 'near' },
    'HBAR': { name: 'Hedera Hashgraph', apiName: 'hedera-hashgraph' },
    'TON': { name: 'Toncoin', apiName: 'toncoin' },
    'SUI': { name: 'Sui', apiName: 'sui' },
    'OP': { name: 'Optimism', apiName: 'optimism' },
    'INJ': { name: 'Injective', apiName: 'injective' },
    'ARB': { name: 'Arbitrum', apiName: 'arbitrum' },
    'DAI': { name: 'Dai', apiName: 'dai' },
    'BUSD': { name: 'Binance USD', apiName: 'binance-usd' },
    'PAX': { name: 'Paxos Standard', apiName: 'paxos-standard' },
    'UNI': { name: 'Uniswap', apiName: 'uniswap' },
    'AAVE': { name: 'Aave', apiName: 'aave' },
    'SUSHI': { name: 'SushiSwap', apiName: 'sushi' },
    'COMP': { name: 'Compound', apiName: 'compound-governance-token' },
    'YFI': { name: 'Yearn Finance', apiName: 'yearn-finance' },
    'LRC': { name: 'Loopring', apiName: 'loopring' },
    'ZRX': { name: '0x', apiName: '0x' },
    'OMG': { name: 'OmiseGO', apiName: 'omisego' },
    'MANA': { name: 'Decentraland', apiName: 'decentraland' },
    'SAND': { name: 'The Sandbox', apiName: 'the-sandbox' },
    'ENJ': { name: 'Enjin Coin', apiName: 'enjincoin' },
    'AXS': { name: 'Axie Infinity', apiName: 'axie-infinity' },
    'GALA': { name: 'Gala', apiName: 'gala' },
    'ZEC': { name: 'Zcash', apiName: 'zcash' },
    'DASH': { name: 'Dash', apiName: 'dash' },
    'FTM': { name: 'Fantom', apiName: 'fantom' },
    'GRT': { name: 'The Graph', apiName: 'the-graph' },
    'CHZ': { name: 'Chiliz', apiName: 'chiliz' },
    'BAT': { name: 'Basic Attention Token', apiName: 'basic-attention-token' },
    'CRV': { name: 'Curve DAO Token', apiName: 'curve-dao-token' },
    'KSM': { name: 'Kusama', apiName: 'kusama' },
    'QTUM': { name: 'Qtum', apiName: 'qtum' },
    'ZIL': { name: 'Zilliqa', apiName: 'zilliqa' },
    'EGLD': { name: 'Elrond', apiName: 'elrond-erd-2' },
    'HOT': { name: 'Holo', apiName: 'holotoken' },
    'THETA': { name: 'Theta', apiName: 'theta-token' },
    'HNT': { name: 'Helium', apiName: 'helium' },
    'SNX': { name: 'Synthetix', apiName: 'synthetix-network-token' },
    'RUNE': { name: 'Thorchain', apiName: 'thorchain' },
    'XLM': { name: 'Stellar', apiName: 'stellar' },
    'REN': { name: 'Ren', apiName: 'ren' },
    'FTT': { name: 'FTX Token', apiName: 'ftx-token' },
    'RVN': { name: 'Ravencoin', apiName: 'ravencoin' },
    'KAVA': { name: 'Kava', apiName: 'kava' },
    'CRO': { name: 'Crypto.com Coin', apiName: 'crypto-com-chain' },
    'MIOTA': { name: 'IOTA', apiName: 'iota' },
    'ETC': { name: 'Ethereum Classic', apiName: 'ethereum-classic' },
    'BABYDOGE': { name: 'Baby Doge Coin', apiName: 'baby-doge-coin' },
    'SAFEMOON': { name: 'Safemoon', apiName: 'safemoon' },
    'ELON': { name: 'Dogelon Mars', apiName: 'dogelon-mars' },
    'PEPE': { name: 'Pepe', apiName: 'memetic' },
    'WIF': { name: 'Dogwithat', apiName: 'dogwithat' },
    'BONK': { name: 'Bonk', apiName: 'bonk' },
    'FLOKI': { name: 'Floki', apiName: 'floki' },
    'MKR': { name: 'Maker', apiName: 'maker' },
    'BAL': { name: 'Balancer', apiName: 'balancer' },
    'WLD': { name: 'Worldcoin', apiName: 'worldcoin' },
    'OM': { name: 'Mantra DAO', apiName: 'mantra-dao' },
    'PHB': { name: 'Phoenix', apiName: 'phoenix' },
    'LISTA': { name: 'Lista', apiName: 'lista' },
    'RENDER': { name: 'Render', apiName: 'render' }
};

const cryptoInput = document.getElementById('crypto');
const suggestionsBox = document.getElementById('crypto-suggestions');

cryptoInput.addEventListener('input', function() {
    const inputValue = cryptoInput.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    const filteredCryptos = Object.keys(cryptoMap).filter(crypto =>
        crypto.includes(inputValue) || cryptoMap[crypto].name.toLowerCase().includes(inputValue)
    ).slice(0, 100); 

    if (inputValue && filteredCryptos.length > 0) {
        suggestionsBox.style.display = 'block';
        filteredCryptos.forEach(crypto => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = `${cryptoMap[crypto].name} (${crypto})`; // Display name and symbol
            suggestionItem.addEventListener('click', function() {
                cryptoInput.value = crypto; // Set only the symbol in the input
                suggestionsBox.style.display = 'none';
            });
            suggestionsBox.appendChild(suggestionItem);
        });
    } else {
        suggestionsBox.style.display = 'none';
    }
});

document.getElementById('predict-btn').addEventListener('click', function() {
    const cryptoInputValue = cryptoInput.value.toUpperCase();
    const crypto = cryptoMap[cryptoInputValue];

    if (crypto) {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto.apiName}&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => {
            if (data[crypto.apiName]) {
                document.getElementById("price").innerText = "$" + data[crypto.apiName].usd;
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