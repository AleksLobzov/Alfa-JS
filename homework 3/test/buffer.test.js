import makeBuffer from '../src/buffer';

describe('buffer', function() {

  var buffer = makeBuffer();

  it('test 1', function() {

    buffer('Замыкания');
    buffer(' Использовать');
    buffer(' Нужно!');
    expect(buffer()).toBe('Замыкания Использовать Нужно!');

  });

  it('test 2', function() {

    buffer('Замыкания');
    buffer(' Использовать');
    buffer(' Нужно!');
    buffer.clear();
    expect(buffer()).toBe('');

  });

})
