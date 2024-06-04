import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// initialize mongoose cached variable
let cached = (global as any).mongoose || {conn: null, promise: null};

export const connectToDatabase = async () => {
    if (cached.conn) {
        return cached.conn;
    }   
    if (!MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'eventhub',
        bufferCommands: false, 
});

cached.coon = await cached.promise;
return cached.coon;

}
