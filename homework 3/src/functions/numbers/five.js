export default function five(value) {
  if (!value) {
    return 5;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 5 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 5 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 5 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 5 / value['value'];
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
