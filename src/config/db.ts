import mongoose from "mongoose";

const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const database = process.env.MONGO_INITDB_DATABASE;
const dbServer = process.env.MONGO_SERVER;

const connectionURI = `mongodb://${username}:${password}@${dbServer}:27017/${database}?authSource=admin`;
let connected = false;

export default async function connect() {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log('MongoDB connection already established.');
        return;
    }

    try {
        await mongoose.connect(connectionURI);
        connected = true;
        console.log('MongoDB connection established successfully.')
    } catch (error) {
        console.error(`Something went wrong establishing connection to database: ${(error as Error).message}`);
    }
}