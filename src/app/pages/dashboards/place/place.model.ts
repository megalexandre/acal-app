
export class Place {

  constructor(
    public id: string,
    public number: string,
    public letter: string,
    public address: string,
    public has_hydrometer: boolean
  ) {}

  get name(): string {
    return `${this.address}: ${this.number}-${this.letter}`;
  }

  static fromJson(json: any): Place {
    return new Place(
      json.id,
      json.number,
      json.letter,
      json.address,
      json.has_hydrometer
    );
  }

}
