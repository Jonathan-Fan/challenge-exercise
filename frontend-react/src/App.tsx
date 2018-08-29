import { observer } from 'mobx-react';
import * as React from 'react';
import './App.css';
import ActivitiesList from "./components/ActivitiesList";
import ActivityForm from "./components/ActivityForm";
import ParticipantList from "./components/ParticipantList";
import DataState from './dataState/DataState';
import logo from './logo.svg';

@observer
class App extends React.Component<{ dataState: DataState }> {
  constructor(props: { dataState: DataState }) {
    super(props);
  }
  public render() {
    const activities = this.props.dataState.activities || [];
    const isLoading = this.props.dataState.isLoading;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sydney Boys High</h1>
          <h4>
            556 Cleveland Street, Moore Park, New South Wales
          </h4>
        </header>
        <div className="body-container">
          <ActivitiesList activities={activities} selectActivity={this.props.dataState.readActivity} removeActivity={this.props.dataState.deleteActivity} isLoading={isLoading}/>
          <ParticipantList activityDetail={this.props.dataState.activityDetail} />
          <ActivityForm dataState={this.props.dataState} />
        </div>
      </div>
    );
  }
}

export default App;
