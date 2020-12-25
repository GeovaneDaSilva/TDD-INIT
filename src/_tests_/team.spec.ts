import { Team } from '../models/team-model'

describe('Team class', () => {
  it('Position ', () => {
    const team = new Team()
    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['Kick hard', 'Run fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['goalkeeper', 1, ['Kick hard', 'Run fast', 'Jump high']])
  })

  it('Position ', () => {
    const team = new Team()
    const position = {
      name: 'Center MidField',
      tShirt: 2,
      skills: ['Kick hard', 'Run fast']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['Center MidField', 2, ['Kick hard', 'Run fast']])
  })

  it('Soccer Play', () => {
    const soccerPlay = new Team()

    expect(soccerPlay.attacker('')).toBe('attacker')
  })
})
