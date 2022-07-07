
// import { Row, Col, Container, Card } from 'react-bootstrap';
import { Row, Col, Container, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import COVER from '../../../assets/bookcover/CoverPhoto';
import './getsalebook.css'
import CardItem from '../CardItem';

export default function GetPopularBook(props) {
    const {book} = props
    return (
        <>
        <br/>
        
        <Container style={{padding:40,border: '2px solid silver',borderRadius:'3px'}} >
            <Row>
            {book.map((ele, idx) => {
                    return (
                        <Col key={idx} xl={3} lg={4}  md={6}  xs={12}>
                            <CardItem ele={ele}/>
                            <br/> 
                        </Col>
                    )
                })}
            </Row> 
        </Container>     
    </>
  )
}
