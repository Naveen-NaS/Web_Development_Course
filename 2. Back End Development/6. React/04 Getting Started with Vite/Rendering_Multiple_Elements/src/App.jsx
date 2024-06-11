import { useState, useEffect } from "react";
import "./App.css";

function Card(props) {
  const { id, title, thumbnail, brand, price } = props;
  return (
    <div className="card" key={id}>
      <img src={thumbnail} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>{price}</b>
        </p>
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]); // State to hold the list of products

  // useEffect hook to fetch product data from the API when the component mounts
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // Update the state with the fetched products
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <div className="container">
        {/* Map through the products array and render a Card component for each product */}
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;

// Let's create a Card element
/*
const card = (
  <div className="card">
    <img
      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/iphone_14_pro_main_image_1-sixteen_nine.jpg?VersionId=rEeNIuhsSx4hgLYwrw2fDzULpYFexkYd&size=690:388"
      alt="iphone"
    />
    <div className="card-content">
      <h3>iPhone 13</h3>
      <p>Apple</p>
      <p>
        <b>$1000</b>
      </p>
    </div>
  </div>
);
console.log(card);
*/

/*
function Card(key) {
  return (
    <div className="card" key={key}>
      <img
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/iphone_14_pro_main_image_1-sixteen_nine.jpg?VersionId=rEeNIuhsSx4hgLYwrw2fDzULpYFexkYd&size=690:388"
        alt="iphone"
      />
      <div className="card-content">
        <h3>iPhone 13</h3>
        <p>Apple</p>
        <p>
          <b>$1000</b>
        </p>
      </div>
    </div>
  );
}
*/

/*
// Get all Products using dummyJSON
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then(console.log);
*/
