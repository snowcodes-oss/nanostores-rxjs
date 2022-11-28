import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Alexandre')).toBe('Nanostores RXJS Alexandre');
});