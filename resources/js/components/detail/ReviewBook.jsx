import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, ButtonGroup, ButtonToolbar, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function ReviewBook() {
    const [sort, setSort] = useState('desc')
    const [review, setReview] = useState([])
    const { id } = useParams()
    const [page, setPage] = useState([])
    const [getpage, setGetPage] = useState(1)
    const [perpage, setPerpage] = useState(5)
    const [star, setStar] = useState()
    const [quantity, setQuantity] = useState({
        from: 0,
        to: 0,
        total: 0,
        current_page: 0,

    })
    const [mode, setMode] = useState()
    const axios = require('axios');
    useEffect(() => {
        const sendGetRequestReview = async () => {

            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books/reviews', { params: { 'page': getpage, 'perPage': perpage, 'id': id, 'sort': sort, 'star': star } });
                console.log(resp.data);
                setReview(resp.data.data);
                setPage(resp.data.links);
                setQuantity({ from: resp.data.from, to: resp.data.to, total: resp.data.total, current_page: resp.data.current_page })
            } catch (err) {
                console.error(err);
            }
        };
        sendGetRequestReview()

    }, [getpage, perpage, sort, id, star])
    const handlePagin = (label) => {
        setGetPage(label)
    }
    return (
        <div>
            <Container>

            <Row>
                <Col sm={9} xs={12}>
                    <Container style={{ backgroundColor: 'rgb(242, 242, 242)', border: '1.5px solid silver', borderRadius: '5px', marginBottom: '25px' }}>
                        <Breadcrumb>
                            <Breadcrumb.Item onClick={(() => setStar(1))}>1 Star</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={(() => setStar(2))}>2 Star</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={(() => setStar(3))}>3 Star</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={(() => setStar(4))}>4 Star</Breadcrumb.Item>
                            <Breadcrumb.Item onClick={(() => setStar(5))}>5 Star</Breadcrumb.Item>


                        </Breadcrumb>
                        <Row>
                            <Col>
                                <div className='d-flex justify-content-end'>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ opacity: '80%' }}>
                                            Sort by
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>

                                            <Dropdown.Item onClick={(() => setSort('desc'))}>Latest reviews</Dropdown.Item>
                                            <Dropdown.Item onClick={(() => setSort('asc'))}>Oldest reviews</Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ opacity: '80%' }}>
                                            Show {perpage} &nbsp;
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

                            <>
                                <Container>
                                    {review.map((ele, idx) => {
                                        return (

                                            <div key={idx}>
                                                <h5> {ele.review_title} <span> - {ele.rating_start}*</span></h5>
                                                <p style={{ fontSize: '17px' }}>{ele.review_details}</p>
                                                <p style={{ fontSize: '17px' }}>{ele.review_date}</p>
                                                <hr/>
                                            </div>



                                        )
                                    })}
                                </Container>
                            </>
                        </Row>
                        <div className='d-flex justify-content-center'>
                            <ButtonToolbar
                                className="justify-content-between"
                                aria-label="Toolbar with Button groups"
                                action="true" 
                            >
                                <ButtonGroup aria-label="First group" >
                                    {
                                        page.map((ele, idx) => {
                                            if (ele.label === "&laquo; Previous") {
                                                return (

                                                    <Button variant="outline-secondary" key={idx} onClick={() => setGetPage(quantity.current_page - 1)} style={{ fontSize: '18px', opacity: '80%' }}>Previous</Button>
                                                )
                                            } else if (ele.label === "Next &raquo;") {
                                                return (
                                                    <Button variant="outline-secondary" key={idx} onClick={() => setGetPage(quantity.current_page + 1)} style={{ fontSize: '18px', opacity: '80%' }}>Next</Button>

                                                )
                                            } else {
                                                return (
                                                    <Button variant="outline-secondary" key={idx} onClick={() => handlePagin(ele.label)} style={{ fontSize: '18px', opacity: '80%' }}>{ele.label}</Button>
                                                )
                                            }
                                        })
                                    }
                                </ButtonGroup>
                            </ButtonToolbar>
                        </div>
                    </Container>
                </Col>
                <Col sm={3} xs={12}>
                    <Form style={{ border: '1.5px solid silver', borderRadius: '5px',padding:'20px'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Add title" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Review</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                           
                        </Form.Group>
                        <Button variant="secondary" type="submit" style={{opacity:'70%'}}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
