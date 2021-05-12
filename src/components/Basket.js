import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <aside className="block col-1" id="namecart">
      <h2>ตะกร้าสินค้า</h2>
      <div>
        {cartItems.length === 0 && <div>ไม่มีสินค้าในตะกร้า</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add"> 
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">ราคาสินค้า</div>
              <div className="col-1 text-right">฿{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">ค่าส่ง</div>
              <div className="col-1 text-right">฿{shippingPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>ยอดรวม</strong>
              </div>
              <div className="col-1 text-right"><strong>฿{totalPrice.toFixed(2)}</strong></div>
            </div>
            <hr/>
            <div className="row">
              <button onClick={() => alert('ดำเนินการชำระเงิน')} id="checkout">
                ชำระเงิน
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
