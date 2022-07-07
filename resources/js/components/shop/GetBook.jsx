import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/esm/Card';
import { Container, Row, Col, Pagination, Dropdown } from 'react-bootstrap';
import CardItem from '../CardItem';




export default function GetBook() {
    const [book, setBook] = useState([])
    const axios = require('axios');
    const [page, setPage] = useState([])
    const [getpage, setGetPage] = useState(1)
    const [perpage, setPerpage] = useState(5)
    const [sort, setSort] = useState('sale')
    const [filter, setFilter]=useState([])
    const [quantity,setQuantity]=useState({
        from: 0,
        to: 0,
        total: 0,
        
    })


    useEffect(() => {
        const sendGetRequestSale = async () => {
            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books/sale', { params: { 'page': getpage, 'perPage': perpage } });
                console.log(resp.data);
                setBook(resp.data.data);
                setPage(resp.data.links);
                console.log(resp.to)
                setQuantity({from:resp.data.from, to:resp.data.to,total:resp.data.total})


            } catch (err) {
                console.error(err);
            }
        };
        const sendGetRequestPopular = async () => {
            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books/popular', { params: { 'page': getpage, 'perPage': perpage } });
                console.log(resp.data);
                setBook(resp.data.data);
                setPage(resp.data.links);
                setQuantity({from:resp.data.from, to:resp.data.to,total:resp.data.total})


            } catch (err) {
                console.error(err);
            }
        };
        const sendGetRequestPriceDesc = async () => {
            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books/price/desc', { params: { 'page': getpage, 'perPage': perpage } });
                console.log(resp.data);
                setBook(resp.data.data);
                setPage(resp.data.links);
                setQuantity({from:resp.data.from, to:resp.data.to,total:resp.data.total})


            } catch (err) {
                console.error(err);
            }
        };

        const sendGetRequestPriceAsc = async () => {
            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books/price/asc', { params: { 'page': getpage, 'perPage': perpage } });
                console.log(resp.data);
                setBook(resp.data.data);
                setPage(resp.data.links);
                setQuantity({from:resp.data.from, to:resp.data.to,total:resp.data.total})


            } catch (err) {
                console.error(err);
            }
        };
        if (sort === 'sale') {
            sendGetRequestSale();
        }
        else if (sort === 'popular') {

            sendGetRequestPopular();
        }
        else if (sort === 'priceasc') {

            sendGetRequestPriceAsc();
        }
        else if (sort === 'pricedesc') {

            sendGetRequestPriceDesc();
        }
    }, [getpage, perpage, sort])

    const handlePagin = (label) => {
        setGetPage(label)
    }

    return (
        <><br/>
            <Container>
                <Row>
                    <Col>
                        <h4 style={{color:'grey'}}>Showing {quantity.from} - {quantity.to} of {quantity.total} books</h4>
                    </Col>
                
                <Col>
                <div className='d-flex justify-content-end'>
                   
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Sort
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(() => setSort('sale'))}>Sort by on sale</Dropdown.Item>
                                <Dropdown.Item onClick={(() => setSort('popular'))}>Sort by popularity</Dropdown.Item>
                                <Dropdown.Item onClick={(() => setSort('priceasc'))}>Sort by price: low to high</Dropdown.Item>
                                <Dropdown.Item onClick={(() => setSort('pricedesc'))}>Sort by price: hight to low</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Per page
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(() => setPerpage(5))}>Show 5</Dropdown.Item>
                                <Dropdown.Item onClick={(() => setPerpage(15))}>Show 15</Dropdown.Item>
                                <Dropdown.Item onClick={(() => setPerpage(20))}>Show 20</Dropdown.Item>
                                <Dropdown.Item onClick={(() => setPerpage(25))}>Show 25</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    

                </div>
                </Col>
                </Row>

                
                <Row>

                    {book.map((ele, idx) => {
                        return (

                            <Col xl={3} lg={4} md={6} xs={12} key={idx} >

                                <CardItem ele={ele} />
                                <br />
                            </Col>

                        )
                    })}</Row>
<br/><br/><br/>
                <div className='d-flex justify-content-center'>
                    <Pagination style={{}}>


                        {
                            page.map((ele, idx) => {
                                if (ele.label === "&laquo; Previous") {
                                    return (
                                        <Pagination.Item key={idx} onClick={() => handlePagin(ele.label-1)}>Previous</Pagination.Item>
                                    )
                                } else if (ele.label === "Next &raquo;") {
                                    return (
                                        <Pagination.Item key={idx} onClick={() => handlePagin(ele.label+1)}>Next</Pagination.Item>
                                    )
                                } else {
                                    return (
                                        <Pagination.Item key={idx} onClick={() => handlePagin(ele.label)}>{ele.label}</Pagination.Item>
                                    )
                                }                               
                            })
                            
                        }
                    </Pagination>
                </div>

            </Container>
        </>
    )
}
