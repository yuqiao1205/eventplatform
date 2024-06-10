const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const UserSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
});

// namespace is eventhub, collection is users
const User = mongoose.model('User', UserSchema);

const dbUri = 'mongodb+srv://loran1226:RWWL65h0hHTweYqk@eventhub.ferug8v.mongodb.net/?retryWrites=true&w=majority&appName=eventhub';

mongoose.connect(dbUri, {
    dbName: 'eventhub',
});

// anon async function and just run it
(async () => {
    // const user = await User.findOne({});
    // const user = await User.findById('665f8f1dc0cfdc23f15fa660');
    const user = await User.findOne({ clerkId: 'user_2hTvw6aYSR9QLn15VsOnMfMnzdF' });
    console.log(user);

    // get a list of collections
    // const collections = await mongoose.connection.db.collections();
    // console.log(collections);    

    mongoose.disconnect();
    })();
