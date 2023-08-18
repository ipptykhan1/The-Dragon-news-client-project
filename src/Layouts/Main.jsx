
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "../Pages/Shared/LeftSide/LeftSide";
import RightSide from "../Pages/Shared/RightSide/RightSide";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container  className="text-center mx-auto">
      <Row>
        <Col lg={3}>
            <LeftSide></LeftSide>
        </Col>
        <Col lg={6}>
            <Outlet></Outlet>
             </Col>
        <Col lg={3}>
            <RightSide></RightSide>
        </Col>
      </Row>
    </Container>
    
            <Footer ></Footer>
            
        </div>
    );
};

export default Main;