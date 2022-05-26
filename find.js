//  You have an array of products. Each product has a name, price, description, etc. 
//  How will you implement a search to find products by name?

const products = [
    { name: 'Windows PC', price: 50000, description: 'These all-in-one PCs have everything you love about desktop' },
    { name: 'Mac Book Pro', price: 80000, description: 'Fast M1 processors, incredible graphics, Retina displays.' },
    { name: 'iPhone', price: 70000, description: 'A dramatically more powerful camera system. A display so responsive' },
    { name: 'Samsung', price: 60000, description: 'Galaxy A53 5G takes photos to the next level. Get crisper' }
];

const productsName = products.find(product => product.price == 80000);
console.log(productsName);

/* Result print out 
{
    name: 'Mac Book Pro',
    price: 80000,
    description: 'Fast M1 processors, incredible graphics, Retina displays.'
}
*/