const mongoose = require('mongoose');
const { readdirSync } = require('fs');
const { join } = require('path');
const { toModelName, toCollectionName } = require('./helpers');
const { MONGO_URI, MONGO_POOL_SIZE } = require('../env');

const models = {};

const options = {
    poolSize: +MONGO_POOL_SIZE,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  };

mongoose.connect(MONGO_URI, options);

const db = mongoose.connection;

db.on('error', () => console.log('mongo connection error'));
db.on('open', () => console.log('mongo connected'));

readdirSync(join(__dirname, 'schemas'))
  .filter(file => /\.schema\.js/.test(file))
  .forEach(file => {
      const modelName = toModelName(file);
      const collectionName = toCollectionName(file);
      const schema = require(join(__dirname, 'schemas', file));
      models[modelName] = mongoose.model(modelName, schema, collectionName);  
      //위는 대괄호 표기법이다. 변수의 값을 프로퍼티로 호출할 때 보통 쓴다. 즉 models.modleName값을 지칭한다.    
  });

module.exports = models;

