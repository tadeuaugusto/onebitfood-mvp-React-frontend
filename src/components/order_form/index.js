import React, { Component } from 'react';
import { Box, Column, Title, Input, Field, Button, Control, Label } from "rbx";

class OrderForm extends Component {

  render() {

    return (
      <Column.Group>
        <Column size={10} offset={1}>
          <Title size={5} className="has-text-custom-gray-darker">
            Finalizar Pedido
          </Title>
          <Box>         
            
            <Column.Group>
              <Column size={10} offset={1}>
                <form>
                  <Field>
                    <Label>Nome</Label>
                    <Control>
                      <Input 
                        type="text" 
                        placeholder="Tadeu Augusto..."
                        name="name"
                        />
                    </Control>
                  </Field>

                  <Field>
                    <Label>CPF</Label>
                    <Control>
                      <Input 
                        type="text" 
                        placeholder='000.000.001-91'
                        name="cpf"
                        />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Telefone</Label>
                    <Control>
                      <Input 
                        type="phone_number" 
                        name="reference"
                      />
                    </Control>
                  </Field>
                  
                  <Field>
                    <br/>
                    <Title size={6} className="has-text-custom-gray-darker">
                      Endereço de entrega
                    </Title>
                    <span>
                      Rua Marumbi, 190
                    </span>
                    <span>
                      Andirá, Paraná
                    </span>
                  </Field>

                  <br/>
                  <Field kind="group" align="centered">
                    <Control>
                      <Button size="medium" color="custom-orange">
                        <span className="has-text-white">Realizar Pedido</span>
                      </Button>
                    </Control>
                  </Field>
                </form>
              </Column>
            </Column.Group>
          </Box>
        </Column>
      </Column.Group>
    )
  } 
}

export default OrderForm;