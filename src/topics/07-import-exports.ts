import { Product, taxCalculation, taxCalculationOptions } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Smartphone',
        price: 699.0
    },
    {
        description: 'Tablet',
        price: 299.0
    }
];

const tax: number = 0.15;
const options: taxCalculationOptions = {
    tax,
    products: shoppingCart
}

const [total, taxValue] = taxCalculation(options);

console.log(`Total: ${total}`);
console.log(`Tax: ${taxValue}`);