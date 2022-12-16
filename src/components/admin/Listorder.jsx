import { Container, Table } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const ListOrder = () =>{
    const [transaction, setTransaction] = useState([]);
    const [acc, setAcc] = useState("");
    const [reject, setReject] = useState("");
    useEffect(() => {
        getTransaction();
        accOrder();
        rejectOrder();
    }, []);

    const getTransaction = async () => {
        const response = await axios.get("https://flightgo-be-server-production.up.railway.app/v1/api/ticket/transaction/data", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        console.log(response.data.data)
        setTransaction(response.data.data);
    };

    const accOrder = async (id) => {
        await axios.put(`https://flightgo-be-server-production.up.railway.app/v1/api/ticket/transaction/accept/${id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        setReject();
    };
    const rejectOrder = async (id) => {
        await axios.put(`https://flightgo-be-server-production.up.railway.app/v1/api/ticket/transaction/reject/${id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        });
        setAcc();
    };
    return(
        <>
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
                    <tr >
                    <td></td>
                    <td></td>
                    <td>transaction.userId</td>
                    <td>transaction.bukti_Pembayaran</td>
                    <td>transaction.userVisa</td>
                    <td>transaction.userPassport</td>
                    <td>transaction.userIzin</td>
                    <td>transaction.checkIn</td>
                    <td>
                    <button
                        className=""
                        >
                        Acc
                    </button>
                    <button
                        className=""
                        >
                        Reject
                    </button>
                    </td>
                    </tr>
                </tbody>
                </Table>
        </Container>
        </>
    )
}

export default ListOrder