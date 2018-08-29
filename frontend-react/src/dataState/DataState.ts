import axios from 'axios';
import { action, observable, runInAction } from 'mobx';
import {
  IActivitiesRemoveResponse,
  IActivitiesResponse,
  IActivity,
} from './types';

export default class DataState {
  @observable public activities: IActivity[];
  @observable public activityDetail: IActivity;
  @observable public isLoading: boolean;

  constructor() {
    this.activities = [];
    this.isLoading = false;
  }

  @action.bound
  public async createActivity(activity: IActivity ) {
    try {
      await axios.post('http://localhost:3001/activities', activity );
      this.listActivities();
    } catch (err) {
      // Ignore error and logs for now returns empty list
      // console.log(err);
    }
  }
  @action.bound
  public async listActivities() {
    let activities : IActivity[];
    try {
      this.isLoading = true;
      const response: IActivitiesResponse = await axios.get('http://localhost:3001/activities' );
      this.isLoading = false;
      if (response.data && response.data.data) {
        activities = response.data.data;
      }
    } catch (err) {
      // Ignore error and logs for now returns empty list
      // console.log(err);
    }
    runInAction(() => {
      this.activities = activities;
    });
  }

  @action.bound
  public async readActivity(id: string) {
    let activity : IActivity;
    try {

      const response: IActivitiesResponse = await axios.get(`http://localhost:3001/activities/${id}` );

      if (response.data && response.data.data) {
        activity = response.data.data[0];
      }
    } catch (err) {
      // Ignore error and logs for now returns empty list
      // console.log(err);
    }
    runInAction(() => {
      this.activityDetail = activity;
    });
  }
  @action.bound
  public async deleteActivity(id: string) {
    try {
      const response: IActivitiesRemoveResponse = await axios.delete(`http://localhost:3001/activities/${id}` );
      this.listActivities();

      if (response.data ) {
        alert(`${response.data.message}${response.data.activity}`);
      }
    } catch (err) {
      // Ignore error and logs for now returns empty list
      // console.log(err);
    }
  }
}
