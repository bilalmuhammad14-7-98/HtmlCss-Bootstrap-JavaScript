import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { getDataById } from "../../config/firebase";
import Navbar from "../../components/Navbar";

function ProductDetail() {
  const [productData, setProductData] = useState();
  let { id } = useParams();
  console.log("ProductDetailId-------------", id);

  useEffect(() => {
    getProductsById();
  }, []);

  const fadeImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "First Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Second Slide",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Third Slide",
    },
  ];

  const getProductsById = async () => {
    const product = await getDataById(id);
    console.log(product, "product by id------------->");
    setProductData(product);
  };

  const buttonStyle = {
    width: "30px",
    background: "black",
    border: "0px",
    borderRadius: "10px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };

  useEffect(() => {
    // getSingleProduct();
  }, []);

  // function getSingleProduct() {
  //   fetch(`https://dummyjson.com/products/${id}`)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (response) {
  //       console.log(response, "response-----");
  //       setProductData(response);
  //       // setProducts(response.products);
  //       // setQuestions(response);
  //     });
  // }

  return (
    <>
      {/* <Navbar /> */}
      {productData ? (
        <>
          <div class="container">
            <div class="row gy-3 gx-4 mt-5">
              <div class="col-12 col-md-8 img-container">
                <div className="slide-container">
                  {/* <Fade {...properties}> */}
                  {/* return ( */}
                  <>
                    <div>
                      <img
                        style={{
                          width: "65%",
                          height: "500px",
                          borderRadius: "5px",
                        }}
                        src={productData.thumbnail}
                      />
                      {/* <h2>{fadeImage.caption}</h2> */}
                    </div>
                  </>
                  {/* ); */}
                  {/* })} */}
                  {/* </Fade> */}
                </div>
              </div>

              <div class="col-12 col-md-4">
                <p>
                  {/* SIM-Free, Model A19211 6.5-inch Super Retina HD display with
                  OLED technology A12 Bionic chip with ... */}
                </p>
              </div>
            </div>

            <div class="row gy-1 gx-4 mt-5">
              <div class="col-12 col-md-8 content-container">
                {/* Top Section---------------- */}
                <div className="top-section">
                  <div className="top-section-price">
                    <h1>{`Rs ${productData?.price}`}</h1>
                  </div>

                  <div className="top-section-icons">
                    <div className="icon-one">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </div>
                    <div className="icon-two">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="top-section">
                  <div className="top-section-price">
                    <h5>{`${productData.title}`}</h5>
                  </div>

                  {/* <div className="top-section-icons">
                    <div className="icon-one">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </div>
                    <div className="icon-two">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div> */}
                </div>

                {/* Bottom Section---------------- */}
                <div className="top-section bottom">
                  <div className="top-section-price">
                    <h6>
                      <FontAwesomeIcon
                        icon={faShareNodes}
                        style={{ marginRight: "10px" }}
                      />
                      {`${productData.description}`}
                    </h6>
                  </div>

                  <div className="top-section-icons">
                    <div className="">
                      <p>Active 6 Days ago</p>
                    </div>
                    {/* <div className="icon-two">
                      <FontAwesomeIcon icon={faHeart} />
                    </div> */}
                  </div>
                </div>
              </div>

              {/* <div class="col-12 col-md-4 ">
                <h1>Content Section</h1>
              </div> */}
            </div>
          </div>
        </>
      ) : (
        <>Loading......</>
      )}

      {/* <div class="container">
        <div class="row gy-3 gx-4 mt-5">
          <h4 style={{ textAlign: "left" }}>Accessories & Electronic Items</h4>

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
      </div> */}
    </>
  );
}

export default ProductDetail;
