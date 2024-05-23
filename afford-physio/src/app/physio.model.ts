export class Physio {
  constructor(
    private _id: number,
    private _name: string,
    private _specialisation: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get specialisation(): string {
    return this._specialisation;
  }
}
