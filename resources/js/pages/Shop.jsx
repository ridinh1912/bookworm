import React from 'react'
import { Row, Col, Container,Card } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Filter from '../components/shop/Filter'
import GetBook from '../components/shop/GetBook'



export default function Shop() {
  return (
    <div>
      <NavBar />
      <br/>
      
      <Container>
       
        <h4 className='pt-10'>Books</h4>
        <hr/>
        <Row>
          <Col md={2} className='pt-2'>
            <Filter className="img-fluid mt-3"/>
          </Col>
          
                        
          <Col md={10} style={{height:'100%',minHeight:'89vh',paddingLeft:30}}>
            <GetBook/>
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
      <Footer />
    </div>
  )
}
