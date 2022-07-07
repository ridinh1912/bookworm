import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Button from 'react-bootstrap/esm/Button';
import Footer from '../components/Footer';
import GetSaleBook from '../components/home/GetSaleBook';
import GetRecommendBook from '../components/home/GetRecommendBook';
import GetPopularBook from '../components/home/GetPopularBook';
import { Container, ToggleButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';



export default function Home() {
  const [mode, setMode] = useState('recommended')
  const [book, setBook] = useState([])
  const axios = require('axios');

  useEffect(() => {
    const sendGetRequestRec = async () => {
      try {
        const resp = await axios.get('http://127.0.0.1:8000/api/recommendedbooks');
        console.log(resp.data);
        setBook(resp.data)

      } catch (err) {

        console.error(err);
      }
    };
    const sendGetRequestPop = async () => {
      try {
        const resp = await axios.get('http://127.0.0.1:8000/api/popularbooks');
        console.log(resp.data);
        setBook(resp.data)

      } catch (err) {

        console.error(err);
      }
    };
    if (mode === 'recommended') {
      sendGetRequestRec()
    }
    else {
      sendGetRequestPop()
    }
  }, [mode])

  return (
    <div>
      <NavBar />
      <br /><br />
      <GetSaleBook />
      <br /><br /><br />
      <Container className='d-flex justify-content-center'>
        <ButtonGroup size="lg" className="md-2">
          
          <Button onClick={(e) => {
            setMode('recommended')
          }} variant="outline-secondary">Recommend books</Button>
          <Button onClick={(e) => {
            setMode('popular')
          }} variant="outline-secondary">Popular books</Button>
        </ButtonGroup>

      </Container>
      {
        mode === 'recommended' ?
          < GetRecommendBook book={book} />
          :
          <GetPopularBook book={book} />

      }
      <Footer />

    </div>
  )
}
