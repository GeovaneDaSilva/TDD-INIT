import { Bird, Eagle, Penguin } from '../models/bird-model'

describe('Bird', () => {
  test('Should Fly', () => {
    const bird = new Bird({
      name: 'Bird',
      age: 30,
      origen: 'North America'
    })

    expect(bird.fly()).toEqual('Bird')
  })

  test('Should Fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origen: 'North America'
    })

    expect(eagle.fly()).toEqual('Eagle')
  })

  test('Shouldnt fly Penguin', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 30,
      origen: 'North America'
    })

    expect(penguin.fly()).toEqual(new Error('I cant Fly'))
  })

  test('Should walk and swim Penguin', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 30,
      origen: 'North America'
    })

    expect(penguin.walk()).toEqual('I can Walk')
    expect(penguin.swim()).toEqual('I cant Swim')
  })
})
