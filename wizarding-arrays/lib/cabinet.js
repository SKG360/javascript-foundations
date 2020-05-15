class Cabinet {
  constructor() {
    this.potions = [];
  }

  isEmpty() {
    if (this.potions.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  add(potion) {
    if (potion.length > 0) {
      potion.forEach(function (onePotion) {
        this.potions.push(onePotion);
      }, this)
    } else {
      this.potions.push(potion);
    }
  }

  takeFirstPotion() {
    let retrievedPotion = this.potions.shift();
    return retrievedPotion;
  }

  takePotionWithName(name) {
    console.log(this.potions);
    let takenPotion = "";
    this.potions.forEach(function(onePotion, idx) {
      if (onePotion.name === name) {
         takenPotion = this.potions.splice(idx, 1);
      }
    }, this);
    return takenPotion[0]
  }

  count(potionName) {
    let counter = 0;
    this.potions.forEach(function(onePotion) {
      if (onePotion.name === potionName) {
        counter += 1;
      }
    }, this);
    return counter;
  }
 }

module.exports = Cabinet;
