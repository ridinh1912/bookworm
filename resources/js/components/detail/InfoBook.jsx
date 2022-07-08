import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import COVER from '../../../assets/bookcover/CoverPhoto'
import { Image } from 'react-bootstrap'

export default function InfoBook() {
  const [book, setBook] = useState({})
  const axios = require('axios');
  // const id=useSelector(state=>state.shopReducer.id)
  const id = 2
  useEffect(() => {
    const sendGetRequestBookDetail = async () => {
      try {
        const resp = await axios.get('http://127.0.0.1:8000/api/books/detail', { params: { 'id': id } });
        console.log(resp.data[0]);
        setBook(resp.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    sendGetRequestBookDetail()

  }, [])

  return (
    
      <Container style={{ border: '1.5px solid silver', borderRadius: '5px' }}>
        <Row>
          <Col md={4}>
            <Image src={ book.book_cover_photo? COVER[book.book_cover_photo] : COVER['defaultimg'] } className="img-fluid mt-3" style={{border: '1.5px solid silver', borderRadius: '5px' }}></Image>
            <p className='mt-1 ml-1'>By (author)  <b>{book.author_name}</b></p>
          </Col>
          
          <Col  >
            <h1 className='mt-2'>{book.book_title}</h1>
            <p>{book.book_summary}</p>
          </Col>
        </Row>
      </Container>

    
  )
}
