import SubstitutionCipher from '../src/decoder';

describe('decoder', function() {

  var abc1 = 'abcdefghijklmnopqrstuvwxyz';
  var abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

  var sub = new SubstitutionCipher(abc1, abc2);

  it('test 1', function() {

    expect(sub.encode('abc')).toBe('eta');

  });

  it('test 2', function() {

    expect(sub.encode('xyz')).toBe('qxz');

  });

  it('test 3', function() {

    expect(sub.encode('aeiou')).toBe('eirfg');

  });

  it('test 4', function() {

    expect(sub.decode('eta')).toBe('abc');

  });

  it('test 5', function() {

    expect(sub.decode('qxz')).toBe('xyz');

  });

  it('test 6', function() {

    expect(sub.decode("eirfg")).toBe("aeiou");

  });

})
