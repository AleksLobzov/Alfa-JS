/// СТРОКОВЫЙ БУФФЕР
export default function makeBuffer() {

  function buffer(value) {
    if (value) {
      buffer.str += value;
    }
    return buffer.str;
  };

   buffer.str = '';

  buffer.clear = function() {
    buffer.str = ''
  }

   return buffer;
}
