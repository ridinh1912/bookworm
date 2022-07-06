import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/esm/Card';
import { Container } from 'react-bootstrap';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/grid';
import './getsalebook.css'



export default function GetSaleBook() {
    const [book, setBook] = useState([])
    const axios = require('axios');

    useEffect(() => {
        const sendGetRequest = async () => {
            try {
                const resp = await axios.get('http://127.0.0.1:8000/api/books');
                console.log(resp.data);
                setBook(resp.data)

            } catch (err) {

                console.error(err);
            }
        };
        sendGetRequest()
    }, [])
    
    return (
        <>
            <Container><h4>On Sale</h4></Container>
            
            <Container style={{padding:30,border: '1.5px solid silver',borderRadius:'3px'}} >
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    breakpoints={{
                        576: {

                            slidesPerView: 1,
                        },
                        1300: {

                            slidesPerView: 3,

                        },
                        1400: {

                            slidesPerView: 4,
                        },
                    }}
                    
                    navigation
                    
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {book.map((ele, idx) => {
                        return (

                            <SwiperSlide key={idx} className='d-flex justify-content-center'>
                                <div><Card style={{ width: '18rem', height: '24rem' }} >
                                    <Card.Img variant="top" loading="lazy" src="{{ asset(`/bookcover/${ele.book_cover_photo}.jpg` }}"/>
                                    <Card.Body>
                                        <Card.Title className='text-truncate'>{ele.book_title}</Card.Title>
                                        <Card.Text>
                                            {ele.author_name}
                                        </Card.Text>

                                    </Card.Body>
                                </Card></div>
                                
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                
            </Container>
        </>
    )
}
