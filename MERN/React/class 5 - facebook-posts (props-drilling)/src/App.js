import "./App.css";
import FbPost from "./components/FbPost";
import { useEffect, useState } from "react";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch("https://dummyjson.com/products")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response.products, "response-----");
        setProducts(response.products);
        // setQuestions(response);
      });
  }

  return (
    <div className="App">
      <h1>Facebook Posts</h1>
      {products && products.length > 0 ? (
        <>
          {products.map((product) => {
            return (
              <>
                <FbPost
                  key={product.id}
                  title={product.title}
                  brand={product.brand}
                  category={product.category}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  description={product.description}
                  images={product.images}
                />
              </>
            );
          })}
        </>
      ) : (
        <>
          <h1>Loading.......</h1>
        </>
      )}
    </div>
  );
}

export default App;
