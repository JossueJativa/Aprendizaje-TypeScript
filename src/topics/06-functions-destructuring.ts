export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Smartphone',
    price: 699.0
}

const tablet: Product = {
    description: 'Tablet',
    price: 299.0
}

export interface taxCalculationOptions {
    tax: number;
    products: Product[];
}

export const taxCalculation = ( options: taxCalculationOptions ):[number, number] => {
    let total:number = 0;
    const { tax, products } = options;
    products.forEach( ( { price } ) => {
        total += price;
    });
    const taxValue = total * tax;
    return [total, taxValue];
};

const shoppingCart:Product[] = [phone, tablet];
const tax: number = 0.15;

const [total, taxValue] = taxCalculation({
    products: shoppingCart,
    tax
});

console.log(`Total: ${total}`);
console.log(`Tax: ${taxValue}`);