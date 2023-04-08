

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0;
      this.gold = 10
      this.key = 1 // XP is always zero for new characters
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
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
          );
          this.xp += bonusXP;
          this.gold += 10
          this.key += 1
        }
      } else {
        console.log(`${this.name} can’t attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
    }
  }


  const aurora = new Character("Aurora", 150, 25);
  const glacius = new Character("Glacius", 130, 30);
  
  console.log("Welcome to the adventure! Here are our heroes:");
  console.log(aurora.describe());
  console.log(glacius.describe());
  
  const monster = new Character("Spike", 40, 20);
  console.log("A wild monster has appeared: it's named " + monster.name);
  
  monster.attack(aurora);
  monster.attack(glacius);
  aurora.attack(monster);
  glacius.attack(monster);
  
  console.log(aurora.describe());
  console.log(glacius.describe());

class Accounts {
    constructor(name, balance, credit, describe) {
        this.name = name
        this.balance = balance
        // this.credit = credit
        // this.describe = describe
    }
    account() {
        return `"owner : ${this.name} balance: ${this.balance}`
    }

}
const sean = new Accounts('Sean', 1000)
console.log(sean.account())
const Brad = new Accounts('Brad', 1000)
console.log(sean.account())
const georges = new Accounts('Georges', 1000)
console.log(georges.account())



