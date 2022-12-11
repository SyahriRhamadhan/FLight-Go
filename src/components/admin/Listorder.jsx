import { Container, Table } from "react-bootstrap"


const ListOrder = () =>{
    
    return(
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID order</th>
                    <th>Ticket Id</th>
                    <th>User Id</th>
                    <th>Payment</th>
                    <th>Visa</th>
                    <th>Passport</th>
                    <th>Permit</th>
                    <th>CheckIn</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
                </Table>
        </Container>
    )
}

export default ListOrder