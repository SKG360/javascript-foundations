class Spell {
  constructor (name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = [];
  }

  execute(target) {
    let arr = [];
    if (typeof target === "object") {
      // for (let i = 0; i < target.length; i++) {
      //   this.executionHistory.push(`Success! The ${target[i]} is levitating.`)
      // }
      target.forEach(function(tar) {
        arr.push(`Success! The ${tar} is levitating.`);
        this.executionHistory.push(tar);
      }, this);
      return arr.join(' ');
     } else {
       return `Success! The ${target} is levitating.`
    };
  }

  clearExecutionHistory() {
    let newArr = [];
    this.executionHistory = newArr;
  }

}

 module.exports = Spell;
