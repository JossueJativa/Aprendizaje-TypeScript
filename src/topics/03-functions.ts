function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiplyNumbers(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return (firstNumber ) * base;
}

// const result: number = addNumbers(1, 2);
// const resultArrow: string = addNumbersArrow(1, 2);
// const resultMultiply: number = multiplyNumbers(5);

// console.log({result, resultArrow, resultMultiply});

interface Character {
    name: string;
    hp: number;
    showHp: () => number;
}

const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const strinder: Character = {
    name: 'Strinder',
    hp: 100,
    showHp() {
        return this.hp;
    }
}

healCharacter(strinder, 20);

console.log(strinder.showHp());

export {};