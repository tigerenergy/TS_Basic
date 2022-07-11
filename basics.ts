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

let person: {
  name: string
  age: number
  isEmployee: boolean
}

person = {
  name: 'Kiwoon',
  age: 36,
  isEmployee: true,
}

let people: {
  name: string
  age: number
}[]

// Type inference

let course: string | number = 'React - The Complete Guide'
course = 12354
