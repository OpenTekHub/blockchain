document.getElementById("predict-btn").addEventListener("click", function() {
    let cryptoInput = document.getElementById("crypto").value.toUpperCase();
    
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
        
        // Add more symbols and tokens as needed
    };
    

    // Convert the input to either the API-friendly name or keep it as it is
    let crypto = cryptoMap[cryptoInput] || cryptoInput.toLowerCase();

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
