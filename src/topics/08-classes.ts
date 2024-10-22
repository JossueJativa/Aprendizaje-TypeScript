export class Person {
    constructor(
        public name: string,
        public address?: string
    ) {}
}

// export class Hero extends Person {
//     public alterEgo: string;
//     public age: number;
//     constructor(address: string, alterEgo: string, age: number, realName: string) {
//         super(realName, address);
//         this.alterEgo = alterEgo;
//         this.age = age;
//     }
// }

export class Hero {
    constructor( 
        public alterEgo: string,
        public age: number,
        public person: Person,
        public realName: string
    ) {}
}

const person = new Person('John Doe', '123 Main St');
const hero = new Hero('Superman', 30, person, 'Clark Kent');
console.log(hero);