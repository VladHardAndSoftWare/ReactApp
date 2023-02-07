import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/order-table">Тестовое</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/order-create">Создать заказ</Nav.Link>
                        <Nav.Link href="/order-table">Таблица заказов</Nav.Link>
                    </Nav>
                    {/*<Nav.Item>*/}
                    {/*    <Nav.Link href="/order-create">OrderCreate</Nav.Link>*/}
                    {/*</Nav.Item>*/}
                    {/*<Nav.Item>*/}
                    {/*    <Nav.Link href="/order-table">OrderTable</Nav.Link>*/}
                    {/*            </Nav.Item>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        //<Nav>
        //    <Link to="/order-create" className="site-title">OrderCreate</Link>
        //    <ul>
        //        <li><Link to="/order-table" className="site-title">OrderTable</Link></li>
        //    </ul>
        //</Nav>
    )
}

export default NavMenu;

