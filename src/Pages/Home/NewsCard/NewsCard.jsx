import { Button, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from 'moment';
import { FaShareAlt, FaBookmark, FaEye, FaStar, FaRegStar } from 'react-icons/fa'
import Rating from "react-rating";



const NewsCard = ({ news }) => {
    const {_id, title, image_url, details, author, rating, total_view} = news;
    return (
        <Card>
      <Card.Header className="d-flex align-items-center">
         <Image style={{height: '40px'}} src={author.img} roundedCircle/>
         <div className="ps-2 flex-grow-1">
            <p className="mb-0" >{author?.name}</p>
            <p> {moment(author?.published_date).format('YYYY-MM-DD')} </p>
         </div>
         <div  className="">
            <FaShareAlt></FaShareAlt>
            <FaBookmark/>

         </div>
         
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} <Link className="text-danger" to={`/news/${_id}`}>see more</Link></>}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="d-flex ">
        <div className="flex-grow-1">
        <Rating
  placeholderRating={rating?.number}
  readonly
  emptySymbol={<FaRegStar/> }
  placeholderSymbol={<FaStar className="text-warning" ></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/>

        </div>
        <div><FaEye></FaEye> {total_view}</div>
      </Card.Footer>
    </Card>
    );
};

export default NewsCard;