export default function eight(value) {
  if (!value) {
    return 8;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 8 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 8 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 8 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 8 / value['value'];
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
