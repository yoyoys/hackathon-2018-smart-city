export interface IChart {
  labels: string[];
  datasets: IChartDataset[];
}

export interface IChartDataset {
  data: number[];
  lineTension?: number;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  pointBackgroundColor: string;
  scaleBeginAtZero : boolean;
}
