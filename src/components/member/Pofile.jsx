import { Container, Row, Col, Button } from "react-bootstrap"
import ProfileImage from "../../assets/images/DummyProfile.png"
import { useState, useEffect } from "react";
import axios from "axios";
const Profile = () => {
    const [users, setUsers] = useState("");
    const whoami = () => {
        axios
            .get('https://flightgo-be-server-production.up.railway.app/v1/api/current-user', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                console.log(response.data)
                setUsers(response.data);
            });
    };
    useEffect(() => {
        whoami();
    }, [])
    return (
        <Container>
            <Row>
                <Col>
                    <Button className="bg-info mb-5 justify-content-end" href="/EditProfile"> Edit-Profile</Button> <br/>
                    <img className='w-25 ' src={users.image_user} alt='i'/>
                    <h4>Name: {users.name}</h4>
                    <p>Phone: {users.phone}</p>
                    <p>Address: {users.address}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile