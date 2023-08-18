import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import QZon from "../QZon/QZon";

const RightSide = () => {
    return (
        <div className="text-center mx-auto">
           <div className="">
            <h5>Login with</h5>
            <Button className="mb-2 px-5" variant="outline-primary"><FaGoogle/> Google</Button>
            <br/>
            <Button className="px-5" variant="outline-dark"> <FaGithub/> Github</Button>
           </div>

           <div className="mx-auto text-center mt-4">
            <h4>Find us on</h4>
           <ListGroup>
           <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
           <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
           <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
           </ListGroup>
           </div>
           <QZon></QZon>
        </div>
    );
};

export default RightSide;