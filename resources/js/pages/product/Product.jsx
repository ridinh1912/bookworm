import React from 'react'
import { Row } from 'react-bootstrap'
import InfoBook from '../../components/detail/InfoBook'
import ReviewBook from '../../components/detail/ReviewBook'
// import NavBar from '../components/NavBar'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'

export default function Product() {
  return (
    <div>
      <NavBar/>
      <br/><br/><br/>
      <Row>
      <InfoBook/>
      <ReviewBook/>
        </Row>
      <br/><br/><br/>
      <Footer/>
    </div>
  )
}
