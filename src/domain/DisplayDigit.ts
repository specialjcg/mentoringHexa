export class DisplayDigit {
  constructor(public readonly digit: number) {
    if (digit < 0 || digit > 99) {
      throw new Error();
    }
  }


  static of(value: number) {
    return new DisplayDigit(value);
  }
}
