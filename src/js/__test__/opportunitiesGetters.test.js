import Daemon from '../daemon.js';

describe("the getter 'get attack':", () => {
  test('returns correct value for attackStrength > 0', () => {
    const result = new Daemon('Testname');
    result.attackStrength = 50;
    result.distance = 5;
    expect(result.attack).toBe(30);
  });

  test('returns correct value for attackStrength > 0 and fuddLeLvel true', () => {
    const result = new Daemon('Testname');
    result.attackStrength = 50;
    result.distance = 5;
    result.stoned = true;
    expect(result.attack).toBe(18);
  });

  test('returns 0 for attackStrength < 0', () => {
    const result = new Daemon('Testname');
    result.attackStrength = -10;
    expect(result.attack).toBe(0);
  });

  test('returns 0 for attackStrength > 0 because of fuddleLevel true', () => {
    const result = new Daemon('Testname');
    result.stoned = true;
    result.distance = 5;
    expect(result.attack).toBe(0);
  });
});
