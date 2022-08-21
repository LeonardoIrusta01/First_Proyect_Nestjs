const myName = 'Leonardo';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 23);

class Persona {
  /* Forma de evitar asignar los valores de la clase al principio y directamente hacerlo en el constructor 
  constructor(private age: number, private name: string) {}}
  */
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSumary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const leonardo = new Persona(21, 'Leonardo');
leonardo.getSumary();
