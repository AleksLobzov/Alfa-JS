export default function zero(value) {
  if (!value) {
    return 0;
  } else {
    let res = 0;
    if (value['operation'] === 'multiplication') {
      res = 0 * value['value'];
    } else {
      if (value['operation'] === 'addition') {
        res = 0 + value['value'];
      } else {
        if (value['operation'] === 'subtraction') {
          res = 0 - value['value'];
        } else {
          if (value['operation'] === 'division') {
            if (value['value'] === 0) {
              res = undefined;
            } else {
              res = 0 / value['value'];
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
