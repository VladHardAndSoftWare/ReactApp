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
                <Route path="/" element={<OrderTable />} />
            </Routes>
        </>
    )

}

export default App;
