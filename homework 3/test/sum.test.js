import sum from '../src/sum';

describe('sum', function() {

  it('test 1', function() {

    expect(sum(2)(4)(5)(6)()).toBe(17);

  });

  it('test 2', function() {

    expect(sum(1)(2)()).toBe(3);

  });

})
