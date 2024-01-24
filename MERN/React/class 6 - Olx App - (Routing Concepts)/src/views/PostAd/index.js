import "./index.css";
function PostAd() {
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
                placeholder="name@example.com"
              />
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
            ></textarea>
          </div>
          <div class="row"></div>
        </div>
      </div>
    </>
  );
}

export default PostAd;
