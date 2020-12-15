import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols Http and Querys', () => {
  test('Url login ', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response Query ', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }

    expect(parsedUrl.query).toEqual(expectAuth)
  })
})

// http://localhost:3000/user
// http://localhost:3000/login?user=user&password=password&name=name&lastname=lastname
