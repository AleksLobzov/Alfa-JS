export default function seven(value) {
  if (!value) {
    return 7;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 7 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 7 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 7 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 7 / value['value'];
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
