import React from 'react';
import OrderForm from "../../components/order_form";
import { Column, Box } from "rbx";
import Order from "../../components/order";
import "../../styles/create_order.scss"

const CreateOrder = (props) => (
  <Column.Group centered>
    <Column size="5">
      <OrderForm/>
    </Column>
    <Column size="4">
      <Box className="shopping_cart">
        <Order finish_btn_active={false}/>
      </Box>
    </Column>
  </Column.Group>
);

export default CreateOrder;