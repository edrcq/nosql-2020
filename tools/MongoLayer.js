require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGO_URL
const dbName = process.env.MONGO_DB


MongoClient.connect(url, { useUnifiedTopology: true },async function(err, client) {
	if (err) {
		console.log(err.message)
		return ;
	}
	console.log("Connected successfully to server");

	const db = client.db(dbName);

	const movies = db.collection('movies')
	var res = await movies.insertOne({ a: 5 })

	console.log({ res })

	client.close();
  });
