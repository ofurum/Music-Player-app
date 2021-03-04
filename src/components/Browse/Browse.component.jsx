import React from "react";
import Card from "../../components/Card/card.component"
import "./Browse.styles.scss";

const Browse = ({browse, title}) => {
  return (
    <div>
      <div className="browse-section">
        <div className="browse-title">
          <h3>{title}</h3>
          <hr />
        </div>
        <div className="browse-part">
          {browse.map(listOfBrowse => (
            <Card key={listOfBrowse.id} listOfBrowse={listOfBrowse} image={listOfBrowse.cover_small} title={listOfBrowse.title} type={listOfBrowse.type} id={listOfBrowse.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
