class Bag {
  constructor () {
    this.empty = 1;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    this.candies.push(candy);
    this.count += 1;
  }

  contains(candyType) {
    if (candyType === this.candies[0].type) {
      return true;
    } else {
      return false
    };
  }

};

module.exports = Bag;
