import React from "react";

function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.img.src} alt={props.img.alt} className="img" />
        <div className="card_info">
          <span className="card_category">
            <h2 className="card_title">
              {`#${props.ranking} - ${props.title} (${props.year})`}
            </h2>
          </span>
          <h3 className={props.title}>
            <div className="list_item">
              <ul className="list">
                <li>{`Distributor: ${props.distributor}`}</li>
                <li>{`Amount: ${props.amount}`}</li>
              </ul>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
