## Sentral Activities RESTFul API

#### Structure

###### db/: 
  * Using `diskdb` as simple simulation of NoSql Database. `activities.json` is actual database, `activities.ini.json` is used for initialization.

###### lib/: 
  * `requestParse.js` is used for parsing incoming lambda event into request.
  * `travelCalculateor.js` is used to calculate distance and duration. Assuming the school is `sydney boys high`. 

###### src/activities/:
  * Includes `handler.js` which deal with all the request, for now I only created those function for `activities`, 
  * It is extendable by creating new folder under `src/`, e.g.`src/participants` and update `serverless.yml` file to map http path to actual CRUD functions.
  * `school.json` contains basic school info, including location.
    
###### tests/api/:
  * Includes `Postman` testing collection for those APIs.
  
#### Get Started
  * Under `backend-lambda` folder run `npm install`  
  * Then run `npm run start`, which start a serverless simulation with RESTFul API list on `localhost:3001` (Ctrl+C to kill it). You should see the following result:      
  ```
      Serverless: Starting Offline: dev/us-east-1.
      
      Serverless: Routes for create:
      Serverless: POST /activities
      
      Serverless: Routes for read:
      Serverless: GET /activities/{id}
      
      Serverless: Routes for list:
      Serverless: GET /activities
      
      Serverless: Routes for update:
      Serverless: PUT /activities/{id}
      
      Serverless: Routes for remove:
      Serverless: DELETE /activities/{id}
      
      Serverless: Offline listening on http://localhost:3001
  ```
  * Keep it running in current terminal and open another terminal, naviagte to `backend-lambda` folder as well. 
  * Run `npm run test:api`, it will run a `newman` collection test, which sending request to each endpoint above and validate response, and you will see the requests and responses displaying on previous terminal. 
  
#### Summary
  * This is pretty much the whole backend structure, and frontend will call those APIs to manipulate activities.
  * @todo write unit tests.
  * @todo build RESTFul APIs for `participants`.
  * @todo sorting and filtering `avtivities` and `participant`.