class Robe {
  constructor() {
    this.pockets = new Array([],[],[],[],[],[],[],[],[],[]);
  }

  addToPocket(additive) {
    for (let i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i].length === 0) {
        this.pockets[i].push(additive);
        break;
        }
      }
    }

  retrieve(item) {
    let result = '';

    for (let i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i][0] === item) {
        result = item;
        this.pockets[i].pop();
        return result;
      }
    }
  }

  emptyAllPockets() {
    let emptyArr = [];
    this.pockets.forEach(function(pocket) {
      pocket = emptyArr;
    });
  }

}

module.exports = Robe;
