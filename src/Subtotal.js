import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [ { basket }, dispatch ] = useStateValue();

      var basket_subtotal=0;
      basket.forEach(item => {
        basket_subtotal = basket_subtotal + item.price;
      });   

    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{basket_subtotal}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={0} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
  
        <button>Proceed to Checkout</button>
      </div>
    );
  }
  
  export default Subtotal;