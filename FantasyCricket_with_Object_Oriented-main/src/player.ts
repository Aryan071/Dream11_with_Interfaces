

export class Player {
  private id: number;
  private name: string;
  private credit: number;

  constructor(id: number, name: string, credit: number) {
    this.id = id;
    this.name = name;
    this.credit = credit;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getCredit(): number {
    return this.credit;
  }
}
