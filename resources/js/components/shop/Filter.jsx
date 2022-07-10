import React from 'react'
import { Accordion, Card, Nav, ListGroup } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCategoryId, setSort, setStar } from '../../features/shopSlice';


export default function Filter() {
    
    const [author, setAuthor] = useState([])
    const axios = require('axios');
    const [category, setCategory] = useState([])

    useEffect(() => {
        const sendGetRequestAuthors = async () => {
            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books/authors');
                console.log(resp.data);
                setAuthor(resp.data)

            } catch (err) {

                console.error(err);
            }
        };
        const sendGetRequestCate = async () => {
            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books/category');
                setCategory(resp.data)

            } catch (err) {
                console.error(err);
            }
        };
        sendGetRequestAuthors()
        sendGetRequestCate()
    }, [])
    const dispatch = useDispatch()
    const handleCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    
    return (
        <div>

            <br />
            <h5>Filter By</h5>
            <Accordion>
                <Card>
                    <Accordion.Toggle variant="light" as={Card.Header} eventKey="0">
                        <b>Category</b>
                    </Accordion.Toggle>
                    {category.map((ele, idx) => {
                        return (

                            <Accordion.Collapse eventKey="0" key={idx}>
                                <ListGroup >
                                    <ListGroup.Item onClick={() => { handleCategory(ele.id), dispatch(setSort('filterCategory')) }} action style={{ border: 'none' }}>{ele.category_name}</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Collapse>
                        )
                    })}
                </Card>
            </Accordion>
            <br />
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <b>Author</b>
                    </Accordion.Toggle>
                    {author.map((ele, idx) => {
                        return (

                            <Accordion.Collapse eventKey="0" key={idx}>
                                <ListGroup >
                                    <ListGroup.Item onClick={() => { handleCategory(ele.id), dispatch(setSort('filterAuthor')) }} action style={{ border: 'none' }}>{ele.author_name}</ListGroup.Item>
                                </ListGroup>
                            </Accordion.Collapse>
                        )
                    })}
                </Card>
            </Accordion>
            <br />

            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    <b>
                        Rating reviews
                        </b>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <ListGroup >
                            <ListGroup.Item onClick={() => {  dispatch(setStar(1)),dispatch(setSort('filterStar'))}} action style={{ border: 'none' }}>{1} Star</ListGroup.Item>
                            <ListGroup.Item onClick={() => {  dispatch(setStar(2)),dispatch(setSort('filterStar'))}} action style={{ border: 'none' }}>{2} Star</ListGroup.Item>
                            <ListGroup.Item onClick={() => {  dispatch(setStar(3)),dispatch(setSort('filterStar'))}} action style={{ border: 'none' }}>{3} Star</ListGroup.Item>
                            <ListGroup.Item onClick={() => {  dispatch(setStar(4)),dispatch(setSort('filterStar'))}} action style={{ border: 'none' }}>{4} Star</ListGroup.Item>
                            <ListGroup.Item onClick={() => {  dispatch(setStar(5)),dispatch(setSort('filterStar'))}} action style={{ border: 'none' }}>{5} Star</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>

    )
}
