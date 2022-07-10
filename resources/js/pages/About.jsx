import React from 'react'
import NavBar from '../components/NavBar'
import Container from 'react-bootstrap/esm/Container'
import "../../css/about.css"
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>

      <NavBar />
      <Container className='container-title'>
        <br/>
        <h5>About Us</h5>
        <hr/>
        <Container className='container-body'>
          <h3><b>Welcome to Bookworm</b></h3>
          <p>"Bookworm is an independent New York bookstore and language school with locations in 
          Manhattan and Brooklyn. We specialize in travel books and language classes."</p>
          <br/>
          <Row>
            <Col md={6} xs={12}>
              <h4>Our Story</h4>
              <p className='content'>The name Bookworm was taken from the original name for New York International Airport, 
              which was renamed JFK in December 1963.</p>
              <p className='content'>Our Manhattan store has just moved to the West Village. Our new location is 170 7th Avenue 
              South, at the corner of Perry Street.</p>
              <p className='content'>From March 2008 through May 2016, the store was located in the Flatiron District.</p>
            </Col >
            <Col md={6} xs={12}>
              <h4>Our Vision</h4>
              <p className='content'>One of the last travel bookstores in the country, our Manhattan store carries a range of 
                guidebooks (all 10% off) to suit the needs and tastes of every traveller and budget.</p>
              <p className='content'>We believe that a novel or travelogue can be just as valuable a key to a place as any guidebook, 
              and our well-read, well-travelled staff is happy to make reading recommendations for any 
              traveller, book lover, or gift giver.</p>
            </Col>
          </Row>
        </Container>

      </Container>
      <Footer />
     

    </div>

  )
}
