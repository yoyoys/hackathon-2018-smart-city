
export interface IBuilding {
  buildingid: string;
  buildingname: string;
  tanks: ITank[];
  latitude: number;
  longitude: number;
}
export interface ITank {
  tankid: string;
  floor: number;
  motor: boolean;
  waterlevel: number;
  /** js timestamp */
  tstamp: number;
  waterquality: number;
  records: ITankLog[];
}

export interface ITankLog {
  waterlevel: number;
  /** js timestamp */
  tstamp: number;
  waterquality: number;
  motor: boolean;
}
