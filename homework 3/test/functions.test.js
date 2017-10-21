import zero from '../src/functions/numbers/zero';
import one from '../src/functions/numbers/one';
import two from '../src/functions/numbers/two';
import three from '../src/functions/numbers/three';
import four from '../src/functions/numbers/four';
import five from '../src/functions/numbers/five';
import six from '../src/functions/numbers/six';
import seven from '../src/functions/numbers/seven';
import eight from '../src/functions/numbers/eight';
import nine from '../src/functions/numbers/nine';
import times from '../src/functions/operations/times';
import plus from '../src/functions/operations/plus';
import minus from '../src/functions/operations/minus';
import dividedBy from '../src/functions/operations/dividedBy';

describe('functions', function() {

  it('test 1', function() {

    expect(seven(times(five()))).toBe(35);

  });

  it('test 2', function() {

    expect(four(plus(nine()))).toBe(13);

  });

  it('test 3', function() {

    expect(eight(minus(three()))).toBe(5);

  });

  it('test 4', function() {

    expect(six(dividedBy(two()))).toBe(3);

  });

})
