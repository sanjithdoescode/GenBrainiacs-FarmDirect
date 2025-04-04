import mongoose from 'mongoose';

// Cache the database connection
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/farmdirect';

    cached.promise = mongoose.connect(MONGODB_URI, {
      // Use latest mongoose connection options
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((mongoose) => {
      console.log('Connected to MongoDB');
      return mongoose;
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase; 