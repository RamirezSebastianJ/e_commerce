import React from  'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Runnig Shoes', price: '$2.000', image: "https://image.freepik.com/foto-gratis/par-entrenadores_144627-3799.jpg"},
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$3.000.000', image: 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg'}
];

const Products = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
} 


export default Products;