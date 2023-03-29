const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

module.exports = async () => {
  mongoServer = new MongoMemoryServer();
  await mongoose.connect(await mongoServer.getUri(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports.teardown = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};
