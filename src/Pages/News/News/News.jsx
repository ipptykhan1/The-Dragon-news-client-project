import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import {BiLeftArrowAlt} from 'react-icons/bi'
import EditorInsights from "../EditorInsights/EditorInsights";

const News = () => {
    const news = useLoaderData();
    const { title, image_url, details, category_id} = news;
    return (
       <div>
         <Card >
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}> <Button variant="danger"><BiLeftArrowAlt/> All news in this category</Button></Link>
        </Card.Body>
      </Card>
      <EditorInsights></EditorInsights>
       </div>
      
    );
};

export default News;