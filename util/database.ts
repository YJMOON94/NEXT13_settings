import { MongoClient } from 'mongodb';
const url = 'mongodb+srv://admin:admin123@yjm.mli59kt.mongodb.net/?retryWrites=true&w=majority';

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
	if (!global._mongo) {
		global._mongo = new MongoClient(url).connect();
	}
	connectDB = global._mongo;
} else {
	connectDB = new MongoClient(url).connect();
}

export { connectDB };
