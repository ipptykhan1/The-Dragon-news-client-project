import { Col, Container, Row } from "react-bootstrap";
import RightSide from "../Pages/Shared/RightSide/RightSide";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container  className="text-center mx-auto">
      <Row>
        <Col lg={9}>
            <Outlet></Outlet>
             </Col>
        <Col lg={3}>
            <RightSide></RightSide>
        </Col>
      </Row>
    </Container>
    
            <Footer></Footer>
            
        </div>
    );
};

export default NewsLayout;