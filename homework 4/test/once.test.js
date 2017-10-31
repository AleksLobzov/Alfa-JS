import { joinedArgs, once } from '../src/once';

describe('once', function() {

  let onceJoinedArgs = once(joinedArgs);

  it('test 1', function() {

    expect(onceJoinedArgs(1, 2, 3)).toBe('1, 2, 3');

  });

  it('test 2', function() {

    expect(onceJoinedArgs(1, 2, 3)).toBe();

  });

})
