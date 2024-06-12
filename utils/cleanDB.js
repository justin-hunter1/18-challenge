const models = require("../model/index.js");
const db = require("../config/connection.js");

module.exports = async (dbName) => {
    try {
// console.log(models);
//         let modelExists = await models[modelName].db.db.listCollections({name: collectionName}).toArray();
// console.log(modelExists);
//         if (modelExists) {
            await db.dropDatabase(dbName);
        // };
    }
    catch (err) {
        throw err;
    };
};