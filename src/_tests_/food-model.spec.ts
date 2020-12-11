import { Food } from '../models/food-model'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const food = new Food({
      name: 'name',
      description: 'description',
      price: 51,
      inventory: 24
    })

    expect(food.getName()).toEqual('name')
    expect(food.getDescription()).toEqual('description')
    expect(food.getPrice()).toBe(51)
    expect(food.getInventory()).toBe(24)
  })
})
