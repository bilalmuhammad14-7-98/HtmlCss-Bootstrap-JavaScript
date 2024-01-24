import "./index.css";
function PostAd() {
  return (
    <>
      <h3 className="post-ad-heading">POST YOUR AD</h3>
      <div class="post-ad-container">
        <h3 className="post-ad-heading-add-details">INCLUDE SOME DETAILS</h3>

        <div class="container">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Title
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
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
