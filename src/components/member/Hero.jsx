import { Container, Row, Col} from 'react-bootstrap'
// import Heroimage from '../../assets/images/background.png'
// import { LinkContainer } from 'react-router-bootstrap'
const Hero = ()=>{
    return(
        <Container fluid>
            <div >
                <Row>
                    <Col md >
                        <h1 className='ms-2 mt-5 fw-bold'>Book With Us and Ready To Take Off</h1>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
export default Hero