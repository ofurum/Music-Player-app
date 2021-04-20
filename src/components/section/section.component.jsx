import React from 'react';
import {connect} from 'react-redux';
import './section.styles.scss';
import Card from '../../components/Card/card.component'
import {addNewPlaylist} from '../../redux/addPlaylist/addPlaylist.action'
const CardSection = ({ latestPlayList, title, addNewPlaylist }) => {
  console.log(addNewPlaylist(latestPlayList), "CardSection");
  if(!latestPlayList) return addNewPlaylist(latestPlayList)
  return (
    <div className="card-section">
      <div className="card-title">
        <h3>{title}</h3>
        <hr />
      </div>
      <div className="card-part">
        {latestPlayList &&
          latestPlayList?.map((freshData, index) => (
            <Card
              key={freshData.id}
              newData={freshData}
              title={freshData.title}
              index={index}
              image={freshData.album.cover_medium}
            />
          ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewPlaylist: playlist => dispatch(addNewPlaylist(playlist))
})
export default connect(null, mapDispatchToProps)(CardSection);