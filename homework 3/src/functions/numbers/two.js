export default function two(value) {
  if (!value) {
    return 2;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 2 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 2 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 2 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 2 / value['value'];
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
