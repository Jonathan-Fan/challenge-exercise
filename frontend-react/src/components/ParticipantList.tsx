import * as React from 'react';
import { IActivity } from '../dataState/types';

export default class ParticipantList extends React.Component<{
  activityDetail?: IActivity,
}> {

  public render() {
    const { activityDetail } = this.props;
    return (
      <div className="activity__detail">
        <h3>Participant List</h3>
        {activityDetail && activityDetail.participants.length > 0 &&
        <table id="participant-list">
          <thead>
          <tr>
            {/*<th id="participant.id">Location ID</th>*/}
            <th id="participant.name">Name</th>
            <th id="participant.type">Type</th>
            <th id="participant.phone">Phone</th>
            <th id="participant.email">Email</th>
            <th id="participant.status">Status</th>
          </tr>
          </thead>
          <tbody>
          {activityDetail.participants.map(({ name, type, phone, email, status }, i) => {
            return (
              <tr key={i}>
                {/*<td>{_id}</td>*/}
                <td>{name && name ? name : ''}</td>
                <td>{type && type ? type : ''}</td>
                <td>{phone && phone ? phone : ''}</td>
                <td>{email && email ? email : ''}</td>
                <td>{status && status ? status : ''}</td>
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