const { ObjectID } = require('mongodb');

module.exports.generate = () => {
    return new ObjectID();
}