
// import { Row, Col, Container, Card } from 'react-bootstrap';
import { Row, Col, Container, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './getsalebook.css'
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function GetRecommendBook(props) {
    const {book} = props
    const dispatch=useDispatch()
    return (
        <>
        <br/>
        
        <Container style={{padding:40,border: '1.5px solid silver',borderRadius:'3px'}}  >
            <Row>
            {book.map((ele, idx) => {
                    return (
                        <Col key={idx} xl={3} lg={4}  md={6}  xs={12}>
                            <Link to={`/product/${ele.id}`}  style={{textDecoration:'none' ,color:'black'}}>
                            <CardItem ele={ele}/>
                            </Link>
                            <br/> 
                        </Col>
                    )
                })}
            </Row> 
        </Container>     
    </>
  )
}
