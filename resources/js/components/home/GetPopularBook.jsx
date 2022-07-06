
// import { Row, Col, Container, Card } from 'react-bootstrap';
import { Row, Col, Container, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';


import './getsalebook.css'

export default function GetPopularBook(props) {
    const {book} = props
    return (
        <>
        <br/>
        
        <Container style={{padding:30,border: '1.5px solid silver',borderRadius:'3px'}} >
            <Row>
            {book.map((ele, idx) => {
                    return (
                        <Col key={idx} >
                            <Card style={{ width: '18rem', height: '24rem' }} >
                                
                                <Card.Body>
                                    <Card.Title className='text-truncate'>{ele.book_title}</Card.Title>
                                    <Card.Text>
                                        {ele.author_name}
                                    </Card.Text>
                                </Card.Body>
                            </Card>    
                            <br/> 
                        </Col>
                    )
                })}
            </Row> 
        </Container>     
    </>
  )
}
