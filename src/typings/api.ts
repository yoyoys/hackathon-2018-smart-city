
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
  records?: ITankLog[];
}

export interface ITankLog {
  waterlevel: number;
  /** js timestamp */
  tstamp: number;
  waterquality: number;
  motor: boolean;
}
