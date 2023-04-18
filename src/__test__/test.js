import ErrorRepository from '../js/main';

const error = new ErrorRepository();

test('Test method translate', () => {
  expect(error.translate(400)).toBe('Bad Request');
  expect(error.translate(404)).toBe('Not Found');
  expect(error.translate(999)).toBe('Unknown error');
});
