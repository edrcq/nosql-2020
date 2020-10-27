const MongoLayer = require('./MongoLayer')
//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();


var getOneCrypto = async() => {
	let data = await CoinGeckoClient.coins.all({ page: 0, per_page: 50 })

}

var getCryptos = async() => {
	let { data } = await CoinGeckoClient.coins.all({ page: 0, per_page: 50 })
	//console.log(data)
	//console.log(data[0].market_data)
}

var func = async() => {
  let data = await CoinGeckoClient.ping();
  //console.log(data)
};

getCryptos()
