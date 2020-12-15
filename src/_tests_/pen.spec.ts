import { Pen } from '../models/pen'

describe('Pen', () => {
  test('write', () => {
    const pen = new Pen('Hola Mundo')
    expect(pen.write()).toBe('Hola Mundo')
  })
})
