export default function three(value) {
  if (!value) {
    return 3;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 3 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 3 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 3 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 3 / value['value'];
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
