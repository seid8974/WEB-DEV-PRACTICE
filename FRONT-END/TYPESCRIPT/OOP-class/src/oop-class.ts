class Account {
  // readonly id: number;
  // owner: string;
  // _balance: number;
  nickName?: string;

  // constructor(id: number, owner: string, balance: number) {
  //   this.id = id;
  //   this.owner = owner;
  //   this._balance = balance;
  // }

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("ivalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value!");
    this._balance = value;
  }
}

let account = new Account(1, "gfdsj", 2748);
console.log(account);

// class SeatAssignment {
//   [seatNumber: string]: string;
// }

// let seat = new SeatAssignment();
// seat.A1 = " seid";
// seat.A2 = " ghglk";
