import Character from '../character.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Opportunities from '../opportunities.js';

describe('Character / Daemon / Magician: creating of objects or throwing of errors', () => {
  test('should create an object with the type Daemon', () => {
    const result = new Daemon('Testname');
    const expected = {
      name: 'Testname',
      type: 'Daemon',
      health: 100,
      level: 1,
      attackStrength: 10,
      defence: 40,
      fuddleLevel: false,
      distance: 1,
    };
    expect(result).toEqual(expected);
  });

  test('should create an object with the type Magician', () => {
    const result = new Magician('Testname');
    const expected = {
      name: 'Testname',
      type: 'Magician',
      health: 100,
      level: 1,
      attackStrength: 10,
      defence: 40,
      fuddleLevel: false,
      distance: 1,
    };
    expect(result).toEqual(expected);
  });

  test('should throw error if the name of the object is not a string', () => {
    const expected =
      'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character(22, 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the name of the object is longer than 10 characters', () => {
    const expected =
      'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character('TestnameTestname', 'Daemon')).toThrowError(
      expected
    );
  });

  test('should throw error if the name of the object is less than 2 characters', () => {
    const expected =
      'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character('T', 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the hero type is wrong', () => {
    const expected = 'Ошибка! Такого героя не существует!';
    expect(() => new Character('Testname', 'Daemon2')).toThrowError(expected);
  });

  test('class Opportunities should create an object with the type Magician', () => {
    const result = new Opportunities('Testname', 'Magician');
    const expected = {
      name: 'Testname',
      type: 'Magician',
      health: 100,
      level: 1,
      fuddleLevel: false,
      distance: 1,
    };
    expect(result).toEqual(expected);
  });
});
