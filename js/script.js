/*
The JS Way 09 - Understanding Object Oriented Programming
Source - https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md
*/

/*
1. Dogs
- Complete the following program to add the definition of the Dog class.
- Dogs taller than 60 emote "Grrr! Grrr!" when they vark, other ones yip "Woof! Woof!".
*/

class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }

    bark() {
        if (this.size >= 60) {
            return 'Grrr! Grrr!';
        } else {
            return 'Woof! Woof!';
        }
    }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


/*
2. Character Inventory
- Improve the example RPG to add character inventory management according to the following rules:
- (1) A character's inventory contains a number of gold and a number of keys.
- (2) Each character begins with 10 gold and 1 key.
- (3) The character description must show the inventory state.
- (4) When a character slays another character, the victim's inventory goes to its vanquisher.
*/

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10; // Gold is always 10 for new characters
      this.keys = 1; // Keys is always 1 for new characters
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.keys} key(s)`
          );
          this.xp += bonusXP;
          this.gold += target.gold;
          this.keys += target.keys;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points`;
    }
}

/*
3. Account List
- Let's build upon a previous account object exercise. A bank account is still defined by:
- (1) A 'name' property
- (2) A 'balance' property
- (3) A 'credit' method adding the value passed as an argument to the account balance.
- (4) a 'describe' method returning the account description.

- Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.
*/

class BankAccount {
    constructor (name) {
        this.name = name;
        this.balance = 0; // Balance starts with 0;
    }
    credit(amount) {
        this.balance += amount;
        console.log(`${amount} was added to ${this.name}'s bank account.`);
    }
    describe() {
        console.log(`owner: ${this.name}, balance: ${this.balance}`);
    }
}

let sean = new BankAccount("Sean");
let brad = new BankAccount("Brad");
let georges = new BankAccount("Georges");

let accounts = [sean, brad, georges];

for (let i = 0; i < accounts.length; i++) {
    accounts[i].credit(1000);
    accounts[i].describe();
}