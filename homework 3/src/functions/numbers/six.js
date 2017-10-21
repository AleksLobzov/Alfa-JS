export default function six(value) {
  if (!value) {
    return 6;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 6 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 6 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 6 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 6 / value['value'];
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
