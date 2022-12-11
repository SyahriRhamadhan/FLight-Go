import { Container, Button, Row, Col, Nav } from 'react-bootstrap'
// import Heroimage from '../../assets/images/background.png'
// import { LinkContainer } from 'react-router-bootstrap'
const Hero = ()=>{
    return(
        <Container>
            <div fluid>
            {/* <img className='img-fluid gx-5' src={Heroimage} alt='Heroimage'/> */}
            {/* style={{backgroundImage: `url(${Heroimage}`}} */}
                <Row>
                    <Col md >
                        <h1 className='ms-2 mt-5 fw-bold'>Book With Us and Ready To Take Off</h1>
                        <p className='ms-2'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br /> terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br/> untuk sewa mobil selama 24 jam.</p>
                        {/* <LinkContainer to='/Searchcar'> */}
                            <Nav.Link>
                                <Button className='ms-2' variant='success'>Mulai Sewa Mobil</Button>
                            </Nav.Link>
                        {/* </LinkContainer> */}
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
export default Hero