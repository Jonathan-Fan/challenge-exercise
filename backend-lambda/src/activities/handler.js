import db from 'diskdb';
import { requestParse } from '../../lib/requestParse';
import { travelCalculator } from "../../lib/travelCalculator";

db.connect('db', ['activities']);
const error = null; // Assumption: all good, no error at all.

const create = async (event, context, callback) => {
  const request = await requestParse(event);
  let newActivity = JSON.parse(request.body);
  
  const estimation = await travelCalculator(newActivity.location);
  
  newActivity = Object.assign({}, newActivity, estimation);
  
  const savedActivity = db.activities.save(newActivity);
  
  const response = { statusCode: 200, body: JSON.stringify({ data: [ savedActivity ]})};
  
  return callback( error || null, response );
}

const read = async (event, context, callback) => {
  const request = await requestParse(event);
  const id = request.params.id;
  
  const foundActivity = db.activities.find({_id: id});
  const response = { statusCode: 200, body: JSON.stringify({ data: foundActivity })};
  
  
  return callback( error || null, response );
}

const list = async (event, context, callback) => {
  const response = { statusCode: 200, body: JSON.stringify({ data: db.activities.find()})};
  
  
  return callback( error || null, response );
}

const update = async (event, context, callback) => {
  const request = await requestParse(event);
  
  const query = {_id: request.params.id};
  
  let updatedActivity = JSON.parse(request.body);
  const estimation = await travelCalculator(updatedActivity.location);
  
  updatedActivity = Object.assign({}, updatedActivity, estimation);
  
  const options = {
    multi: false,
    upsert: false
  };
  
  db.activities.update(query, updatedActivity, options);
  
  const response = { statusCode: 200, body: JSON.stringify({ data: [updatedActivity]})};
  
  
  return callback( error || null, response );
}

const remove = async (event, context, callback) => {
  const request = await requestParse(event);
  db.activities.remove({_id: request.params.id});
  const response = { statusCode: 200, body: JSON.stringify({ message: 'The following activity is removed: ', activity: request.params.id})};
  
  
  return callback( error || null, response );
}

export {
  create,
  read,
  list,
  update,
  remove,
}