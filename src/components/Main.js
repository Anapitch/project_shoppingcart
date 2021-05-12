import React from 'react';
import Product from './Product';
import {Grid} from '@material-ui/core'

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main id="nameproduct" className="block col-2">
      <Grid container>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </Grid>
      <div className="row">
        
      </div>
    </main>
  );
}
