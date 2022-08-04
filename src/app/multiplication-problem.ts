export class MultiplicationProblem {
  a: number = 1;
  b: number = 1;
  answer: number = 1;
  constructor() {
    this.reset();
  }
  public reset() {
    this.a = 1 + Math.floor(9 * Math.random());
    this.b = 1 + Math.floor(9 * Math.random());
    this.answer = this.a * this.b;
  }
}
