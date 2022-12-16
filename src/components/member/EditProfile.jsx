import { useState, useEffect } from "react";
import { Form, Container, Button, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import axios from "axios";

const EditProfile = () => {
    const [users, setUsers] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState(null);
    const [visa, setVisa] = useState(null);
    const [passport, setPassport] = useState(null);
    const [izin, setIzin] = useState(null);
    // const whoami = () => {
    //     axios
    //         .get('https://flightgo-be-server-production.up.railway.app/v1/api/current-user', {
    //             headers: {
    //                 Authorization: "Bearer " + localStorage.getItem("token"),
    //             },
    //         })
    //         .then((response) => {
    //             console.log(response.data)
    //             setUsers(response.data);
    //             setName(response.data.name);
    //             setAddress(response.data.address);
    //             setPhone(response.data.phone);
    //             setImage(response.data.image_user);
    //             setPassport(response.data.passport);
    //             setIzin(response.data.izin);
    //         });
    // };

    // useEffect(() => {
    //     whoami();
    // }, [])
    async function handleSubmit(e) {
        e.preventDefault();

        const form = new FormData();

        form.append("name", name);
        form.append("phone", phone);
        form.append("address", address);
        form.append("image_user", image);
        form.append("visa", visa);
        form.append("passport", passport);
        form.append("izin", izin);

        try {
            if (name === null || address === null || phone === null || image === null || visa === null || passport === null || izin === null) {
                toast("Isi Semua data", {
                    type: "error",
                });
            } else {
                const response = await axios.put(
                    "https://flightgo-be-server-production.up.railway.app/v1/api/users",
                    form,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token"),
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                setTimeout(() => {
                    window.location.reload();
                }, 10000);
                swal({
                    title: "Berhasil!",
                    text: "Profil Updated",
                    icon: "success",
                    button: "Oke",
                });
            }
        } catch (error) {
            if (Array.isArray(error.response.data.message)) {
                error.response.data.message.forEach((err) => {
                    toast(err, {
                        type: "error",
                    });
                });
            } else {
                toast(error.response.data.message, {
                    type: "error",
                });
            }
        }
    }
    return (
        <Container className="">
            <ToastContainer />
            <Form onSubmit={handleSubmit}>
                {/* <Form.Group className="">
                    {users.image_user == null ? (
                <div>p</div>
            ) : (
              <div className="d-flex justify-content-center">
                <Image className="imgPreview" src={users.image_user} />
              </div>
            )}
            {users.visa == null ? (
                <div>p</div>
            ) : (
              <div className="d-flex justify-content-center">
                <Image className="imgPreview" src={users.visa} />
              </div>
            )}
            {users.passport == null ? (
                <div>p</div>
            ) : (
              <div className="d-flex justify-content-center">
                <Image className="imgPreview" src={users.passport} />
              </div>
            )}
            {users.izin == null ? (
                <div>p</div>
            ) : (
              <div className="d-flex justify-content-center">
                <Image className="imgPreview" src={users.izin} />
              </div>
            )}
                </Form.Group> */}
                <Form.Group className="my-2">
                    <Form.Label>Nama*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nama Kamu"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label>Alamat*</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Contoh: Jalan Kaki 5"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>No. Handphone*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Contoh: 08212345678"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Picture</Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Visa</Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setVisa(e.target.files[0])}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passport</Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setPassport(e.target.files[0])}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Permit/Izin Tinggal</Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setIzin(e.target.files[0])}
                    />
                </Form.Group>
                <Button className="mt-2 mb-4" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditProfile