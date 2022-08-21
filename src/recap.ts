const myName = 'Leonardo';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12,23)

class Persona {
    age;
    name;

    getSumary(){
        return `my name is ${this.name}, ${this.age}`
    }
}