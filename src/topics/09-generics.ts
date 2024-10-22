export function whatsMyType<T>( argument: T ): T {
    return argument;
}

const imAmString = whatsMyType<string>('I am a string');
const imAmNumber = whatsMyType<number>(42);
const imAmObject = whatsMyType<object>({ name: 'John Doe' });
const imAmArray = whatsMyType<number[]>([1, 2, 3]);
const imAmBoolean = whatsMyType<boolean>(true);

console.log(imAmString);
console.log(imAmNumber);
console.log(imAmObject);
console.log(imAmArray);
console.log(imAmBoolean);
