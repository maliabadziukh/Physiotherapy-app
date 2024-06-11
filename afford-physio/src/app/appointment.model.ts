import { Patient } from './patient.model';
import { Physio } from './physio.model';

export class Appointment {
  constructor(
    private _id: number,
    private _patient: Patient,
    private _physio: Physio,
    private _location: string,
    private _date: string,
    private _status: string // Pending, Confirmed, Rejected
  ) {}

  public get id() {
    return this._id;
  }
  public get patient() {
    return this._patient;
  }
  public get physio() {
    return this._physio;
  }
  public get location() {
    return this._location;
  }
  public get date() {
    return this._date;
  }
  public get status() {
    return this._status;
  }
  public set status(status: string) {
    this._status = status;
  }
}
