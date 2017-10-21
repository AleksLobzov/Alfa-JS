export default function four(value) {
  if (!value) {
    return 4;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 4 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 4 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 4 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 4 / value['value'];
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
