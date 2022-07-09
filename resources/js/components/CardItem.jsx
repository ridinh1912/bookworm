import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import COVER from '../../assets/bookcover/CoverPhoto.js'
import '../../css/cartItem.css'


export default function CardItem(props) {
    const {ele} = props
    return (
        <div>
            <Card style={{ width: '100%', height: '24rem', }} className='cardItem'>
                <Card.Img variant="top" src={ ele.book_cover_photo? COVER[ele.book_cover_photo] : COVER['defaultimg'] } className="img-fluid" style={{ width: '100%', height: '70%' }} />
                <Card.Body style={{ width: '100%', height: '17%' }}>

                    <Card.Title className='text-truncate'>{ele.book_title} <p style={{fontSize:'15px',color:'gray'}}>{ele.author_name}</p></Card.Title>
                    {/* <Card.Text style={{fontSize:'15px' }} className='mb-2'>
                        {ele.author_name}
                    </Card.Text> */}
                </Card.Body>
                {
                    ele.final_price < ele.book_price ? (<Card.Footer style={{width: '100%', height: '13%' ,fontSize:'18px'}}><b>{ele.final_price}$</b>&nbsp;&nbsp;&nbsp;<span style={{color:'grey',fontSize:'16px',textDecoration:'line-through'}}><b>{ele.book_price}$</b></span></Card.Footer>) : (<Card.Footer style={{width: '100%', height: '13%',fontSize:'18px'}}><b>{ele.final_price}$</b></Card.Footer>)
                }
                
                
                
            </Card>
        </div>
    )
}
