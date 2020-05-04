// Boolean

let muted: boolean = true;
muted = false;

//numeros
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//String

let nombre: string = "Ronald Aguirre";
let saludo = "Me llamo ${nombre}";

//Arreglos

let people: string[] = [];
people = ["isabel", "raul", "nicole"];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("nicole");
peopleAndNumbers.push(9001);

//Enum

enum Color {
  rojo = "rojo",
  verde = "verde",
  azul = "azul",
}

let colorFavorito: Color = Color.rojo;
console.log(`color favorito es ${colorFavorito}`);

//Any

let comodin: any = "joker";
comodin = { type: "Wildcard" };

//Object

// let someObject = Object {type:'Wildcard'};

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = "Smith"): string {
  return `${firstName} ${lastName}`;
}

const ronald = fullName("ronald");
console.log(ronald);

//INTERFACES

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  //   color: Color.rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaReact = area(rect);
console.log(areaReact);

rect.toString = function () {
  return this.color
    ? ` Un rectangulo de color ${this.color}`
    : ` un rectangulo`;
};

console.log(rect.toString());
