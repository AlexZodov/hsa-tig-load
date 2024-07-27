export class Unit1NotFoundError extends Error {
  constructor(id: string) {
    super('Unit1 not found, [' + id + ']');
  }
}
