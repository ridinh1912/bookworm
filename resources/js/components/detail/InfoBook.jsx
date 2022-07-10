import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import COVER from '../../../assets/bookcover/CoverPhoto'
import { Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


export default function InfoBook() {
  const [book, setBook] = useState({})
  const axios = require('axios');
  const {id}=useParams()
  const [counter, setCounter] = useState(1)
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
  }, [id])
  return (
    <div><Container>
      <Row>
        <Col lg={9} md={12}>
          <Container style={{ border: '1.5px solid silver', borderRadius: '5px', marginBottom:'25px'}}>
            <Row>
              <Col md={4}>
                <Image src={book.book_cover_photo ? COVER[book.book_cover_photo] : COVER['defaultimg']} className="img-fluid mt-3" style={{ border: '1.5px solid silver', borderRadius: '5px' }}></Image>
                <p className='mt-1 ml-1' style={{fontSize:'18px'}}>By (author)  <b>{book.author_name}</b></p>
              </Col>

              <Col md={8} >
                <h1 className='mt-2'>{book.book_title}</h1>
                <br/>
                <h4>Book description</h4>
                <p style={{fontSize:'18px'}}>{book.book_summary}</p>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col lg={3} md={12}>
          <Container className='d-flex justify-content-center'>
            <Card style={{ width: '17rem' }}>
              {
                book.final_price < book.book_price ? (<Card.Header  style={{ width: '100%', height: '13%', fontSize: '22px' }}><b>{Number((book.final_price * counter).toFixed(2))}$</b>&nbsp;&nbsp;&nbsp;<span style={{ color: 'grey', fontSize: '16px', textDecoration: 'line-through' }}><b>{book.book_price}$</b></span></Card.Header>) : (<Card.Header style={{ width: '100%', height: '13%', fontSize: '20px' }}><b>{Number((book.final_price * counter).toFixed(2))}$</b></Card.Header>)
              }
              <Card.Body style={{ width: '100%', height: '15rem' }}>
                <p className="me-2 d-flex justify-content-center pt-1" style={{fontSize:'15px', color:'gray'}}>Quantity</p>
                <ButtonGroup className="d-flex justify-content-center" aria-label="First group" >
                {counter<2 ? (<>
                      <Button style={{opacity:'30%',}} disabled onClick={() => setCounter(counter - 1)} variant="secondary"><b>{'-'}</b></Button>{' '}
                      <Button  style={{width:60, fontSize:'22px'}} disabled variant="light"><b>{counter}</b></Button>{' '}
                      <Button style={{opacity:'60%'}} onClick={() => setCounter(counter + 1)} variant="secondary"><b>{'+'}</b></Button>{' '}
                
                </>):(counter>=8?<>
                <Button style={{opacity:'60%',}}  onClick={() => setCounter(counter - 1)} variant="secondary"><b>{'-'}</b></Button>{' '}
                      <Button  style={{width:60, fontSize:'22px'}} disabled variant="light"><b>{counter}</b></Button>{' '}
                      <Button style={{opacity:'30%'}} disabled onClick={() => setCounter(counter + 1)} variant="secondary"><b>{'+'}</b></Button>{' '}
                </>:<>
                <Button style={{opacity:'60%',}}  onClick={() => setCounter(counter - 1)} variant="secondary"><b>{'-'}</b></Button>{' '}
                      <Button  style={{width:60, fontSize:'22px'}} disabled variant="light"><b>{counter}</b></Button>{' '}
                      <Button style={{opacity:'60%'}}  onClick={() => setCounter(counter + 1)} variant="secondary"><b>{'+'}</b></Button>{' '}
                </>)}    
                </ButtonGroup>
                <br/>
                <Button style={{opacity:'70%', width:'100%'}} variant="secondary"><b>Add to cart</b></Button>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
