export default class ErrorRepository {
  constructor() {
    this.members = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [405, 'Method Not Allowed'],
    ]);
  }

  translate(code) {
    return this.members.get(code) || 'Unknown error';
  }
}
