## Sentral Activities Basic UI

#### Structure

###### src/components/:
  * Includes 3 components: `list`, `create form` and `participant list`.
    
###### src/dataState/:
  * Contains and maintain data 
  
#### Get Started
  * Before running the following commands, make sure backend (`http://localhost:3000/`) is up and running. 
  * Under `frontend-react` folder run `yarn install`  
  * Then run `yarn start`, which will start a browser window at `http://localhost:3000/`
  * There are some pre-defined data in DB, so click `List Activities` to show the list of Activities.
  * Alternately, you can fill the detail of activity, and click `create`. New activity will be listed.
  * Select the radio button, will show the `participant` list, unfortunately, it is unable to CRUD participants currently.
  * `Remove` will remove the activity on that row, no matter which row is selected by `Radio` button. 
  
#### Summary
  * All the names and other info for `participant` are **fake**.
  * All the locations info for `activities` are **real**.
  * All the `distance` and `duration` are calculated based on the address of Sydney Boys High.
  * `distance` and `duration` will updated once an activity is created or existing activity is updated. However
  * Unfortunately, it is unable to update activity from UI currently.
  * `participant` has `type` and `status`:  
    - `type`: available value: organiser, staff, student and volunteer;
    - `status`: available value: invited, confirmed (paid/or willing to attend) and attended(actually presented),
  * @todo write unit tests.
  * @todo abilities to manipulate `participant`.
  * @todo validation inputs.