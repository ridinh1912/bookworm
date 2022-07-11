import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function Cart() {

  const cartItem = useSelector(state => state.productReducer.cart)
  console.log(cartItem)
  return (
    <div>
      <NavBar />

      <br /><br /><br /><br />
      <Container style={{height:'70vh'}}>

                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Picture</th>
                        <th>Book title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
          {
            cartItem.map((ele, idx) => {
              return (
                

                    <tbody key={idx}>
                      <tr>
                        <td></td>
                        {/* <td><Image src={ele.pic ? COVER[ele.pic] : COVER['defaultimg']} className="img-fluid mt-3" style={{ border: '1.5px solid silver', borderRadius: '5px', width:'300px',height:'300px' }}></Image></td> */}
                        <td><h5>{ele.title}</h5></td>
                        <td><h5>{ele.counter}</h5></td>
                        <td><h5>{ele.price}</h5></td>
                        <br/>
                      </tr>
                    </tbody>
                 
               
              )
            })
          }
           </Table>
      </Container>
       
      <br /><br /><br /><br />

      <Footer />

    </div>
  )
}

