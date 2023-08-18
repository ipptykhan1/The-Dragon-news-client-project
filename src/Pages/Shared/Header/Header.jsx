import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


import Container from 'react-bootstrap/Container';



const Header = () => {
    return (
      <Container>
           <div className='container mt-3 mb-4'>
            <div className='text-center'>
                <img src={logo} />
                <p>Journalism Without Fear or Favour</p>
                <p>{ moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex mb-2'>
            <Button className="" variant="danger"> Latest</Button>
            <Marquee speed={120} className='text-danger'>
            Two separatist militants were killed yesterday when they attacked a convoy carrying Chinese workers to a Beijing-financed port project in  officials said...Israel rules out base for Saudi envoy to Palestinians....Israel yesterday ruled out a diplomatic base in Jerusalem for the new Saudi envoy to the Palestinians, whose appointment comes as Washington tries to forge formal Israeli relations with Riyadh.....
            </Marquee>
            </div>

          
         </div>
      </Container>
        
        
        
    );
};

export default Header;