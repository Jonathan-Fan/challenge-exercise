export interface ILocation {
  street: string;
  suburb: string;
  state: string;
  country: string;
}

export interface IParticipant {
  name: string;
  email: string;
  phone: string;
  status: string;
  type: string;
}

export interface IActivity {
  _id?: string;
  name: string;
  type: string;
  date: string;
  distance?: string;
  duration?: string;
  location: ILocation;
  participants: IParticipant[];
}

export interface IActivitiesResponse {
  data:
    { data: IActivity[] };
}

export interface IActivitiesRemoveResponse {
  data: {
    message: string;
    activity: string;
  };
}

export interface IMapElement {
  distance: {
    text: string;
    value: number;
  },
  duration: {
    text: string;
    value: number;
  },
  status: string
}

export interface IMapRow {
  elements: IMapElement[]
}

export interface IMapResponse {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: IMapRow[];
  status: string;
}
