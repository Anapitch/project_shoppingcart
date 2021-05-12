import React from 'react';
import {Grid} from '@material-ui/core'

export default function Product(props) {
  const { product, onAdd } = props;
  return (

    <Grid item ms={12} xs={4} style={{padding:"20px"}}>
      <Grid align="center" >
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>฿{product.price}</div>
      
      </Grid>
      <Grid align="center">
      <button onClick={() => onAdd(product)}>เพิ่มลงในตะกร้า</button>
      </Grid>
    </Grid>
  );
}
