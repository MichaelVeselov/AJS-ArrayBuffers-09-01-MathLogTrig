import Daemon from '../daemon.js';

describe('should extend an object character with methods levelUp and damage', () => {
  test('should check levelUp with Daemon', () => {
    const result = new Daemon('Testname');
    const expected = {
      name: 'Testname',
      type: 'Daemon',
      health: 100,
      level: 2,
      attackStrength: 12,
      defence: 48,
      fuddleLevel: false,
      distance: 1,
    };
    result.levelUp();
    expect(result).toEqual(expected);
  });

  test('should throw error if the health is equal 0', () => {
    const result = new Daemon('Testname');
    const expected = 'Ошибка! Нельзя повысить левел умершего!';
    result.health = 0;
    expect(() => result.levelUp()).toThrowError(expected);
  });

  test('should damage to health if health is bigger than 0', () => {
    const result = new Daemon('Testname');
    const expected = 94;
    result.damage(10);
    expect(result.health).toBe(expected);
  });

  test('should set health to 0 if health is less than 0', () => {
    const result = new Daemon('Testname');
    const expected = 0;
    result.health = -1;
    result.damage(10);
    expect(result.health).toBe(expected);
  });
});
