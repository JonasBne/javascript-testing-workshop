// the most fundamental test

const sum = (a, b) => a - b
const subtract = (a, b) => a - b

const result = sum(1,2)
const expected = 3

if(result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
