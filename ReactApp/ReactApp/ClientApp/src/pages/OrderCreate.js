import React, { useEffect, useState, useRef } from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import Input from 'react-bootstrap/Input';
//import "../datepicker/datepicker.css";

function OrderCreate() {

    //let separator = ' '
    //let newDate = new Date()
    //let date = newDate.getDate();
    //let month = newDate.getMonth() + 1;
    //let year = newDate.getFullYear();

    const [formData, setFormData] = useState({
        senderCity: '',
        senderAdress: '',
        recipientCity: '',
        recipientAdress: '',
        weight: 0,
        //orderDate: `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`,
        orderDate: new Date()
    });
    //const [isSwitchChecked, setIsSwitchChecked] = useState(true);
    const [startDate, setStartDate] = useState(new Date());

    const addOrder = formData => {

        if (!formData.senderCity || !formData.senderAdress || !formData.recipientCity || !formData.recipientAdress || !formData.weight) {
            return alert("Поля не заполнены или имеют неверное значение");
        }
        if (!Number.isInteger(formData.weight)) {
            return alert("Поле вес может быть только целым числом");
        }

        fetch('api/order/CreateOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status + " " + response.statusText);
                }
            })
            .then(formData => {
                alert('Вы успешно отправили форму');
            })
            .catch(error => {
                alert(error);
            });
    };


    //3.- create div and table
    return (
        <>
            <link href="./datepicker/datepicker.css" rel="stylesheet" type="text/css"></link>
            <script src="/datepicker/datepicker.js"></script>
            <Container>
                <legend className="text-center">Добавить новый заказ</legend>
                <Form>
                    <Form.Group className="mb-3" controlId="Sender_city">
                        <Form.Label>Город отправителя</Form.Label>
                        <Form.Control type="text" placeholder="Санкт-Петербург" onChange={e => setFormData({ ...formData, senderCity: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Sender_adress">
                        <Form.Label>Адресс отправителя</Form.Label>
                        <Form.Control type="text" placeholder="Авиаторов Балтики 17" onChange={e => setFormData({ ...formData, senderAdress: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Recipient_city">
                        <Form.Label>Город получателя</Form.Label>
                        <Form.Control type="text" placeholder="Архангельск" onChange={e => setFormData({ ...formData, recipientCity: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Recipient_adress">
                        <Form.Label>Адресс получателя</Form.Label>
                        <Form.Control type="text" placeholder="Ломоносова 17" onChange={e => setFormData({ ...formData, recipientAdress: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Weight">
                        <Form.Label>Вес груза</Form.Label>
                        <Form.Control type="number" placeholder="1786" onChange={e => setFormData({ ...formData, weight: e.target.valueAsNumber })} />
                    </Form.Group>
                    {/*<Form.Check type="switch" id="date-switch" label="Использовать текущую дату" checked={isSwitchChecked} onChange={() => setIsSwitchChecked(!isSwitchChecked)} />*/}
                    <Form.Group className="mb-3" controlId="Date">
                        <Form.Label>Дата забора груза</Form.Label>
                        <DatePicker selected={startDate} onChange={e => { setStartDate(e); setFormData({ ...formData, orderDate: e.target.value }) }} className="form-control" />
                        {/*<DatePicker selected={startDate} onChange={e => { setStartDate(e); setFormData({ ...formData, orderDate: e.target.value }) }} className="form-control" />*/}
                    </Form.Group>
                    <div class="row">
                        <div class="col text-center">
                            <Button variant="outline-success" type="button" onClick={() => addOrder(formData)}>
                                Подтвердить
                            </Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </>
    )
}

export default OrderCreate;