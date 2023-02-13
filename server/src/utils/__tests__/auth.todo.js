import { userToJSON } from "../auth"

test('userToJSON excludes secure properties', () => {
  const safeUser = {
    id: 'some-id',
    username: 'sarah',
  }
    const user = {
    ...safeUser,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const result = userToJSON(user)
  expect(result).toEqual(safeUser)
})
