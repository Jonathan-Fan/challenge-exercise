import * as React from 'react';
import { IActivity } from '../dataState/types';

export default class ActivitiesList extends React.Component<{
  activities: IActivity[],
  selectActivity?: (activityId: any) => void,
  removeActivity?: (activityId: any) => void,
  isLoading: boolean,
}> {

  public render() {
    const { activities, selectActivity, removeActivity, isLoading } = this.props;
    return (
      <div className="activities__list">
        <h3>Activities List</h3>
        {isLoading && <span>Loading...</span>}
        {activities.length > 0 &&
        <table id="list">
          <thead>
          <tr>
            {/*<th id="activity.id">Location ID</th>*/}
            <th id="activity.name">Name</th>
            <th id="activity.date">Date</th>
            <th id="activity.street">Street</th>
            <th id="activity.suburb">Suburb</th>
            <th id="activity.state">State</th>
            {/*<th id="activity.country">Country</th>*/}
            <th id="activity.distance">Distance</th>
            <th id="activity.duration">Duration</th>
            {selectActivity && <th id="activity.select" />}
          </tr>
          </thead>
          <tbody>
          {activities.map(({ _id, name, date, location, distance, duration }, i) => {
            return (
              <tr key={i}>
                {/*<td>{_id}</td>*/}
                <td>{name}</td>
                <td>{date}</td>
                <td>{location.street && location.street ? location.street : ''}</td>
                <td>{location.suburb && location.suburb ? location.suburb: ''}</td>
                <td>{location.state && location.state ? location.state: ''}</td>
                {/*<td>{location.country && location.country ? location.country: ''}</td>*/}
                <td>{distance && distance ? distance : ''}</td>
                <td>{duration && duration ? duration : ''}</td>
                {selectActivity &&
                <td>
                  <input
                    type="radio"
                    name="activity-selected"
                    value={_id}
                    onChange={(e) => selectActivity(e.target.value)}
                  />
                </td>
                }
                {removeActivity &&
                <td>
                  <button name="activity-remove" onClick={() => removeActivity(_id)}>
                    Remove
                  </button>
                </td>
                }
              </tr>
            );
          })}
          </tbody>
        </table>
        }
      </div>
    );
  }
}