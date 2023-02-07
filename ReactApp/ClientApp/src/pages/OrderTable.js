import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function OrderTable() {

    //1 create useState
    const [orders, setTable] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showModal, setShowModal] = useState(false);

    //2 call api
    useEffect(() => {
        fetch("api/order/GetTable")
            .then(response => { return response.json() })
            .then(responseJson => {
                setTable(responseJson)
            })
    }, [])

    // helper function to set selected Order
    const handleRowClick = (order) => {
        setSelectedOrder(order);
    };

    //3.- create div and table
    return (
        <div className="container">
            <legend className="text-center">Таблица заказов</legend>
            <div className="row">
                <div className="col-sm-12">
                    <Table striped bordered hover>
                        <thead>
                            <tr class="bg-info">
                                <th class="text-light">ID</th>
                                <th class="text-light">Город отправителя</th>
                                <th class="text-light">Адресс отправителя</th>
                                <th class="text-light">Город полуяаителя</th>
                                <th class="text-light">Адресс получателя</th>
                                <th class="text-light">Вес груза</th>
                                <th class="text-light">Дата забора груза</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((item) => (
                                    <tr key={item.idOrder} onClick={() => { handleRowClick(item); setShowModal(true); }}>
                                        <td>{item.idOrder}</td>
                                        <td>{item.senderCity}</td>
                                        <td>{item.senderAdress}</td>
                                        <td>{item.recipientCity}</td>
                                        <td>{item.recipientAdress}</td>
                                        <td>{item.weight}</td>
                                        <td>{item.orderDate}</td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>
                </div>
                {selectedOrder && (
                    <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Order Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><strong>ID_order: </strong>{selectedOrder.idOrder}</p>
                            <p><strong>Sender_city: </strong>{selectedOrder.senderCity}</p>
                            <p><strong>Sender_adress: </strong>{selectedOrder.senderAdress}</p>
                            <p><strong>Recipient_city: </strong>{selectedOrder.recipientCity}</p>
                            <p><strong>Recipient address: </strong>{selectedOrder.recipientAdress}</p>
                            <p><strong>Weight: </strong>{selectedOrder.weight}</p>
                            <p><strong>Order date: </strong>{selectedOrder.orderDate}</p>
                        </Modal.Body>
                    </Modal>
                )}
            </div>
        </div >
    )
}

export default OrderTable;