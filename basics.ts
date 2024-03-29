// Primitives : number, string, boolean
// More complex types: array, object
// Function types, parameters

// Primitives

let age: number
age = 12

let userName: string
userName = 'kiwoon'

let isInstructor: boolean
isInstructor = true

// More complex types

let hobbies: string[]
hobbies = ['Sports', 'Cooking']

type Person = {
  name: string
  age: number
}

let person: Person[]

let people: {
  name: string
  age: number
}[]

// Type inference

let course: string | number = 'React - The Complete Guide'
course = 12354

// Function & types

function add(a: number, b: number) {
  return a + b
}

function printOutput(value: any) {
  console.log(value)
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1)
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

updatedArray[0].split('')
