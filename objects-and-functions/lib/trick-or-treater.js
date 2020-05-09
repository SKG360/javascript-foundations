class TrickOrTreater {
  constructor (costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
    // console.log(bag.candies);
  }

  putCandyInBag(candy) {
    this.hasCandy = true;
    this.countCandies += 1;
    this.bag.fill(candy);
  }

  eat() {
    this.countCandies -= 1;
    this.bag.candies.pop();
  }
};

module.exports = TrickOrTreater;
