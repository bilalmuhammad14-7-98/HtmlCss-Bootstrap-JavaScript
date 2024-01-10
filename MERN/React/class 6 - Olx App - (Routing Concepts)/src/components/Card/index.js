import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  console.log(props, "props data----");
  const { title, description, thumbnail, price } = props;
  return (
    <>
      <div class="card">
        <div className="img-section">
          <img src={thumbnail} class="card-img-top product-img" alt="..." />
        </div>
        <div class="card-body">
          <div className="title-section">
            <h4 class="card-title product-title">{`RS ${price}`} </h4>
            <h5 class="card-title">
              <FontAwesomeIcon icon={faHeart} />
            </h5>
          </div>

          <p class="card-text  ellipsis">{description}</p>

          <p class="card-text brand">{title}</p>
          <p class="card-text updated-date">
            <small class="text-muted">Last updated 3 days ago</small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
