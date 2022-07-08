import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import COVER from '../../assets/bookcover/CoverPhoto.js'


export default function CardItem(props) {
    const {ele} = props
    return (
        <div>
            <Card style={{ width: '100%', height: '24rem', }} >
                <Card.Img variant="top" src={ ele.book_cover_photo? COVER[ele.book_cover_photo] : COVER['defaultimg'] } className="img-fluid" style={{ width: '100%', height: '75%' }} />
                <Card.Body>

                    <Card.Title className='text-truncate'>{ele.book_title}</Card.Title>
                    <Card.Text>
                        <small>{ele.author_name}</small>

                        
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
