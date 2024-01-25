import { useState } from "react";
import "./index.css";
import { postAdtoDb } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

function PostAd() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [thumbnail, setThumbnail] = useState();

  const handlePostAdd = async () => {
    console.log("Post data------");
    console.log(title, description, price, thumbnail);
    await postAdtoDb({ title, description, price, thumbnail });
    navigate("/");
  };
  return (
    <>
      <h3 className="post-ad-heading mt-5">POST YOUR AD</h3>
      <div class="post-ad-container">
        <h3 className="post-ad-heading-add-details mb-5">
          INCLUDE SOME DETAILS
        </h3>

        <div class="container">
          <div class="row">
            <div class="mb-3">
              {/* <label for="exampleFormControlInput1" class="form-label">
                Title
              </label> */}
              <h5 className="input-field-labels">Title</h5>
              <input
                type="email"
                class="form-control input-field"
                id="exampleFormControlInput1"
                placeholder="Please Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div id="passwordHelpBlock" class="form-text">
                Mention the key features of your item (e.g. brand, model, age,
                type)
              </div>
            </div>
          </div>

          <div class="mb-3">
            {/* <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label> */}
            <h5 className="input-field-labels">Description</h5>
            <textarea
              class="form-control input-field"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div id="passwordHelpBlock" class="form-text">
              Include condition, features and reason for selling
            </div>
          </div>
          <div class="row">
            <div class="mb-3">
              {/* <label for="exampleFormControlInput1" class="form-label">
                Title
              </label> */}
              <h5 className="input-field-labels">Price</h5>
              <input
                type="number"
                class="form-control input-field"
                id="exampleFormControlInput1"
                placeholder="Please Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div id="passwordHelpBlock" class="form-text">
                Please enter the price of the product you wish to sell
              </div>
            </div>
          </div>

          <div class="row">
            <div class="mb-3">
              <h5 className="input-field-labels">Upload Photo</h5>
              <input
                class="form-control input-field"
                type="file"
                id="formFile"
                // value={title}
                onChange={(e) => {
                  console.log(e.target.files[0], "images--------");
                  setThumbnail(e.target.files[0]);
                }}
              />
            </div>
          </div>

          <div class="row">
            <button
              type="button"
              class="btn btn-primary btn-lg post-btn"
              onClick={handlePostAdd}
            >
              <span class="post-btn-text"> POST NOW</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostAd;
