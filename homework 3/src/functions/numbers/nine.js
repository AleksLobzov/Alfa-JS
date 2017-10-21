export default function nine(value) {
  if (!value) {
    return 9;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 9 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 9 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 9 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 9 / value['value'];
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
