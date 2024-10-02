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
const airdrops = [
    {
        name: 'MoonToken Airdrop',
        symbol: 'MOON',
        date: 'October 10, 2024',
        reward: '100 MOON tokens'
    },
    {
        name: 'SolarCoin Airdrop',
        symbol: 'SOLAR',
        date: 'October 15, 2024',
        reward: '50 SOLAR tokens'
    },
    {
        name: 'Stellar Drop',
        symbol: 'STELLAR',
        date: 'October 20, 2024',
        reward: '75 STELLAR tokens'
    },
    {
        name: 'MarsCoin Airdrop',
        symbol: 'MARS',
        date: 'October 25, 2024',
        reward: '200 MARS tokens'
    },
    {
        name: 'Venus Airdrop',
        symbol: 'VENUS',
        date: 'October 30, 2024',
        reward: '150 VENUS tokens'
    }
];

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
const text="Explore the Blockchain implementation and predict the latest cryptocurrency prices."
const container=document.getElementsByClassName("tagline");
function animatetext(){
    [...text].forEach((letter,index)=>{
        const span=document.createElement('span');
        span.textContent=letter;
        span.id=index;
        container.appendChild(span);
        setTimeout(()=>{
            span.style.opacity = 1; 
        }, index * 100);
        })

}
function displayAirdrops() {
    const airdropList = document.getElementById('airdrop-list');
    airdropList.innerHTML = ''; 

    airdrops.forEach(airdrop => {
        const airdropItem = document.createElement('div');
        airdropItem.className = 'airdrop-item';

        airdropItem.innerHTML = `
            <h4 style="color:#FFEB55;letter-spacing:2px">${airdrop.name} (${airdrop.symbol})</h4>
            <p><strong>Date:</strong> ${airdrop.date}</p>
            <p><strong>Reward:</strong> ${airdrop.reward}</p>
        `;

        airdropList.appendChild(airdropItem);
    });
}

window.addEventListener('DOMContentLoaded', function() {
    displayAirdrops();
});
