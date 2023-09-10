export interface TripPassenger {
  trip: string;
  passenger: number;
}

export interface TripEntryExit {
  trip: string;
  entry: number;
  exit: number;
}

export interface TripOverview {
  sommanry: number;
  averragePassenger: number;
}
