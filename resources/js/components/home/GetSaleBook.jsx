import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/esm/Card';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import COVER from '../../../assets/bookcover/CoverPhoto';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/grid';
import './getsalebook.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBookID } from '../../features/shopSlice';
import { Skeleton } from '@mui/material';

export default function GetSaleBook() {
    const [book, setBook] = useState([])
    const axios = require('axios');

    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        const sendGetRequest = async () => {

            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books');

                await setBook(resp.data)
                setIsloading(false)


            } catch (err) {

                console.log(err)
            }

        };
        sendGetRequest()
    }, [])


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4>On Sale</h4>
                    </Col>
                    <Col className='d-flex justify-content-end' style={{ opacity: '90%' }}>
                        <a href='/shop'>
                            <Button variant="secondary" >View All</Button>
                            <br /> <br />

                        </a>
                    </Col>
                </Row>
            </Container>

            <Container style={{ padding: 30, border: '1.5px solid silver', borderRadius: '3px' }} >
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    breakpoints={{
                        0: {

                            slidesPerView: 1,
                        },

                        705: {

                            slidesPerView: 2,
                        },
                        1300: {

                            slidesPerView: 3,

                        },
                        1400: {

                            slidesPerView: 4,
                        },
                    }}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {book.map((ele, idx) => {
                        return (


                            <SwiperSlide key={idx} className='d-flex justify-content-center'>
                                <Container className='p-1'>
                                    {isLoading ? (
                                        <Skeleton variant="circular">
                                            <Skeleton /> : 'h1'
                                        </Skeleton>
                                    ) :
                                        <div>

                                            <Link to={`/product/${ele.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                                <Card style={{ width: '100%', height: '24rem', }} className='cardItem'>
                                                    <Card.Img variant="top" src={ele.book_cover_photo ? COVER[ele.book_cover_photo] : COVER['defaultimg']} className="img-fluid" style={{ width: '100%', height: '70%' }} />
                                                    <Card.Body style={{ width: '100%', height: '17%' }}>

                                                        <Card.Title className='text-truncate'>{ele.book_title} <p style={{ fontSize: '15px', color: 'gray' }}>{ele.author_name}</p></Card.Title>
                                                    </Card.Body>
                                                    {
                                                        ele.final_price < ele.book_price ? (<Card.Footer style={{ width: '100%', height: '13%', fontSize: '22px' }}><b>{ele.final_price}$</b>&nbsp;&nbsp;&nbsp;<span style={{ color: 'grey', fontSize: '17px', textDecoration: 'line-through' }}><b>{ele.book_price}$</b></span></Card.Footer>) : (<Card.Footer style={{ width: '100%', height: '13%', fontSize: '22px' }}><b>{ele.final_price}$</b></Card.Footer>)
                                                    }
                                                </Card>
                                            </Link>
                                        </div>}

                                </Container>

                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </Container>
        </>
    )
}
