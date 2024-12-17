const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */class VigenereCipheringMachine {
  encrypt(source, pass) {
    if (!source || !pass) {
      throw new Error("Incorrect arguments!");
    }
    let d = "";
    source = source.toUpperCase();
    pass = pass.toUpperCase().repeat(Math.ceil(source.length/pass.length));
    let pi = 0;
    for (let i = 0; i < source.length; i++) {
      const is = this.getIndex(source[i]);
      if (is >= 0) {
        const ip = this.getIndex(pass[pi]);
        pi++;
        const id = (is + ip) % this.abc.length;
        d = d.concat(this.getChar(id));
      } else {
        d = d.concat(source[i]);
      }
    }
    if (this.reverse) {
        d = d.split("").reverse().join("");
    }
    return d;
  }
  decrypt(source, pass) {
    if (!source || !pass) {
      throw new Error("Incorrect arguments!");
    }
    let d = "";
    pass = pass.toUpperCase().repeat(Math.ceil(source.length/pass.length));
    let pi = 0;

    for (let i = 0; i < source.length; i++) {
      const is = this.getIndex(source[i]);
      if (is >= 0) {
        const ip = this.getIndex(pass[pi]);
        pi++;
        let id = (is - ip) % this.abc.length;
        if (id < 0) {
          id = this.abc.length + id;
        }
        d = d.concat(this.getChar(id));
      } else {
        d = d.concat(source[i]);
      }
    }
    if (this.reverse) {
        // d = d.split();
        // d = d.reverse();
        d = d.split("").reverse().join("");
    }
    return d;
  }

  constructor(direct) {
    this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (direct == false) {
      this.reverse = true;
    } else {
      this.reverse = false;
    }
  }
  getIndex(c) {
    return this.abc.indexOf(c);
  }
  getChar(n) {
    return this.abc[n];
  }
}


module.exports = {
  VigenereCipheringMachine
};
