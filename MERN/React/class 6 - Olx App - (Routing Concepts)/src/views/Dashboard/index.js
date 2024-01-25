import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { getData } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import Navbar from "../../components/Navbar";

function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    const data = await getData();
    setProducts(data);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        console.log(user, "user-------.");
        // ...
      } else {
        // User is signed out
        // ...

        console.log("user is sign out");
      }
    });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      {products && products.length > 0 ? (
        <>
          <div class="container">
            <div class="row gy-3 gx-4 mt-5">
              <h4 style={{ textAlign: "left" }}>
                Accessories & Electronic Items
              </h4>

              {products.map((product) => {
                const { title, description, thumbnail, price, id } = product;
                return (
                  <>
                    <div class="col-12 col-md-3">
                      <Card
                        id={id}
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
