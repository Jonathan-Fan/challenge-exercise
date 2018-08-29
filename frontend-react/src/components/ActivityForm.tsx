import { observer } from 'mobx-react';
import * as React from 'react';
import DataState from '../dataState/DataState';

@observer
export default class ActivityForm extends React.Component<{ dataState: DataState }> {
  private _NAME: React.RefObject<HTMLInputElement>;
  private _TYPE: React.RefObject<HTMLInputElement>;
  private _DATE: React.RefObject<HTMLInputElement>;
  private _STREET: React.RefObject<HTMLInputElement>;
  private _SUBURB: React.RefObject<HTMLInputElement>;
  private _STATE: React.RefObject<HTMLInputElement>;
  private _COUNTRY: React.RefObject<HTMLInputElement>;

  constructor(props: { dataState: DataState }) {
    super(props);

    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.onClickList = this.onClickList.bind(this);

    this._NAME= React.createRef();
    this._TYPE= React.createRef();
    this._DATE= React.createRef();
    this._STREET= React.createRef();
    this._SUBURB= React.createRef();
    this._STATE= React.createRef();
    this._COUNTRY= React.createRef();
  }

  public render() {
    return (
      <div className="activities__container">
        <h3>Create Activity</h3>
        <label htmlFor="name">NAME</label><input name="name" ref={this._NAME} />
        <label htmlFor="type">TYPE</label><input name="type" ref={this._TYPE} />
        <label htmlFor="date">DATE</label><input name="date" ref={this._DATE} type="date"/>
        <h6>Location:</h6>
        <label htmlFor="street">STREET</label><input name="street" ref={this._STREET} />
        <label htmlFor="suburb">SUBURB</label><input name="suburb" ref={this._SUBURB} />
        <label htmlFor="state">STATE</label><input name="state" ref={this._STATE} />
        <label htmlFor="country">COUNTRY</label><input name="country" ref={this._COUNTRY} />
        <button name="submit" onClick={this.onClickSubmit}>
          Create
        </button>
        <button name="list" onClick={this.onClickList}>
          List Activities
        </button>
      </div>
    );
  }

  public onClickSubmit() {
    this.props.dataState.createActivity(
      {
        date: this._DATE.current.value,
        location: {
          country: this._COUNTRY.current.value,
          state: this._STATE.current.value,
          street: this._STREET.current.value,
          suburb: this._SUBURB.current.value,
        },
        name: this._NAME.current.value,
        participants:[],
        type: this._TYPE.current.value,
      }
    );
  }
  public onClickList() {
    this.props.dataState.listActivities();
  }
}
