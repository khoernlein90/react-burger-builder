import React from "react";

import Aux from "../../../hoc/Auxil/Auxil";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(el => {
    return (
      <li key={el}>
        <span style={{ textTransform: "capitalize" }}>{el}</span>: {props.ingredients[el]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
