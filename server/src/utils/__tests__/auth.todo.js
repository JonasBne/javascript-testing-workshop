import { userToJSON } from "../auth"

test('userToJSON excludes secure properties', () => {
    const user = {
    id: 'some-id',
    username: 'sarah',
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const result = userToJSON(user)
  expect(result).not.toContain(['exp', 'iat', 'hash', 'salt'])
})
