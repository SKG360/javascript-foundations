function Wizard(name) {
  this.name = name
  this.petsCount = 0;
  this.pets = [];
  this.wand;
  this.givePet = function givePet(pet) {
    this.petsCount += 1;
    this.pets.push(pet);
  }
  this.petList = function petList() {
    let petString = "";
    let regex = /[aeiou]/;

    this.pets.forEach(function(pet) {
      petString += pet.name + ',';
      if (regex.test(pet.type.charAt(0))) {
        petString += ' an ' + pet.type + ', ';
      } else {
        petString += ' a ' + pet.type + ', ';
      }
    }, this);

    return petString.replace(/,(?!\s\w)/, ".").trim();
  };

  this.giveWand = function(wand) {
    this.wand = wand;
  };

  this.castSpell = function(spell) {
    return this.wand.cast(spell);
  }
};

module.exports = Wizard;
