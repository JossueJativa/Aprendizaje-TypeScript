export interface Passenger {
    name: string;
    children? : String[];
}

const passenger1: Passenger = {
    name: 'Jossue',
}

const passenger2: Passenger = {
    name: 'David',
    children: ['Jr', 'Jr2']
}

const printClindren = (passenger:Passenger) => {
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log(`${passenger.name} tiene ${howManyChildren}`);
}

printClindren(passenger1);
printClindren(passenger2);