// ЗАДАНИЕ ДЕКОДЕР
export default function SubstitutionCipher(a, b) {
  this.a = a;
  this.b = b;

  this.encode = function(str) {
    let res = '';
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      index = this.a.indexOf(str[i]);
      if (index === -1) {
        res += '_';
      } else {
        res += this.b[index];
      }
    }
    return res;
  };

  this.decode = function(str) {
    let res = '';
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      index = this.b.indexOf(str[i]);
      if (index === -1) {
        res += '_';
      } else {
        res += this.a[index];
      }
    }
    return res;
  };
}
