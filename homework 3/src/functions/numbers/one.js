export default function one(value) {
  if (!value) {
    return 1;
  } else {
   let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 1 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 1 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 1 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 1 / value['value'];
            }
          } else {
            res = NaN;
          }
        }
      }
    }
    return res;
  }
}
