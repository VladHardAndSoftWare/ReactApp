import NavMenu from "./NavMenu";
import OrderCreate from "./pages/OrderCreate";
import OrderTable from "./pages/OrderTable";
import { Route, Routes } from 'react-router-dom';

function App() {

    return (
        <>
            <NavMenu />
            <Routes>
                <Route path="/order-create" element={<OrderCreate />} />
                <Route path="/order-table" element={<OrderTable />} />
            </Routes>
        </>
    )


    //switch (window.location.pathname) {
    //    case "/":
    //        Component = App
    //        break
    //    case "/order-create":
    //        Component = OrderCreate
    //        break
    //    case "/order-table":
    //        Component = OrderTable
    //        break
    //}

    //return (
    //    <>
    //        <Navbar />
    //        <Component />
    //    </>
    //)


    ////1 create useState
    //const [orders, setTable] = useState([])

    ////2 call api
    //useEffect(() => {
    //    fetch("api/order/GetTable")
    //        .then(response => { return response.json() })
    //        .then(responseJson => { setTable(responseJson)
    //        })
    //}, [])

    ////3.- create div and table
    //return (
    //    <div className="container">
    //        <h1>Orders</h1>
    //        <div className="row">
    //            <div className="col-sm-12">
    //                <table className="table table-striped">
    //                    <thead>
    //                        <tr>
    //                            <th>ID_order</th>
    //                            <th>Sender_city</th>
    //                            <th>Sender_adress</th>
    //                            <th>Recipient_city</th>
    //                            <th>Recipient_adress</th>
    //                            <th>Weight</th>
    //                            <th>OrderDate</th>
    //                        </tr>
    //                    </thead>
    //                    <tbody>
    //                        {
    //                            orders.map((item) => (
    //                                <tr>
    //                                    <td>{item.idOrder}</td>
    //                                    <td>{item.senderCity}</td>
    //                                    <td>{item.senderAdress}</td>
    //                                    <td>{item.recipientCity}</td>
    //                                    <td>{item.recipientAdress}</td>
    //                                    <td>{item.weight}</td>
    //                                    <td>{item.orderDate}</td>
    //                                </tr>

    //                            ))
    //                        }
    //                    </tbody>
    //                </table>
    //            </div>
    //        </div>
    //    </div>
    //)

}

export default App;

//import { Component } from 'react';
//import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
//import { Layout } from './components/Layout';
//import './custom.css';

//export default class App extends Component {
//  static displayName = App.name;

//  render() {
//    return (
//      <Layout>
//        <Routes>
//          {AppRoutes.map((route, index) => {
//            const { element, ...rest } = route;
//            return <Route key={index} {...rest} element={element} />;
//          })}
//        </Routes>
//      </Layout>
//    );
//  }
//}
