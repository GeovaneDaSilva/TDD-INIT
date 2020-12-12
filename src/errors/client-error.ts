export class MissingFormalParameter extends Error {
  constructor (public name: string) {
    super(`Error In the Parameter: ${name}`)
  }
}
