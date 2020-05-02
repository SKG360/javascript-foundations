function iteratorFactory() {
  this.sum = function (arr) {
    let sumArr = arr.reduce(function (acc, curVal) {
      return acc + curVal;
    });
    return sumArr;
  };

  this.sumAndSquare = function (arr) {
    let sumArr = arr.reduce(function (acc, curVal) {
      return acc + curVal;
    })
    return Math.pow(sumArr, 2)
  };

  this.onlyEvens = function (arr) {
    var evens = arr.filter(function (num) {
      return num % 2 === 0;
    });

    return evens;
  };

  this.onlyOdds = function (arr) {
    var odds = arr.filter(function (num) {
      return num % 2 !== 0;
    });

    return odds;
  };

  this.squareAndSum = function (arr) {
    let square = arr.map(function (num) {
      return Math.pow(num, 2);
    })
    let total = square.reduce(function (acc, cur) {
      return acc + cur;
    });
    return total;
  };
};

module.exports = iteratorFactory;
