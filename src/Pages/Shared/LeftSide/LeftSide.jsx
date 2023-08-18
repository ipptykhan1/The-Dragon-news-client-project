import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      fetch('https://the-dragon-news-server-project-ipptykhan1.vercel.app/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h5>All Category</h5>
            <div className="ps-4">
                {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className="text-black text-decoration-none">{category.name}</Link>
                </p>)
                }

            </div>
        </div>
    );
};

export default LeftSide;