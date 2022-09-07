const bill = 301
const tip = 50 < bill && bill < 300 ? 0.15 * bill : 0.2 * bill;
const total = bill + tip;

console.log("tip", tip, "total", total)