import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card";
import { useEffect, useState } from "react";

function Dashboard() {
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
    <>
      {products && products.length > 0 ? (
        <>
          <div class="container">
            <div class="row gy-3 gx-4 mt-5">
              <h4 style={{ textAlign: "left" }}>
                Accessories & Electronic Items
              </h4>

              {products.map((product) => {
                const { title, description, thumbnail, price } = product;
                return (
                  <>
                    <div class="col-12 col-md-3">
                      <Card
                        title={title}
                        description={description}
                        thumbnail={thumbnail}
                        price={price}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Dashboard;
