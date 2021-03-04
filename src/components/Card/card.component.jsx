import React from 'react';
import imageUrl from "../../assets/bgImg.png";
import './card.styles.scss';
import { addNewPlaylist } from "../../redux/addPlaylist/addPlaylist.action";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {createBrowserHistory} from 'history';

const Card = ({
  freshData,
  addNewPlaylist,
  index,
  image,
  title,
  type,
  match,
  history,
  playlistId,
  id
}) => {
  console.log("card-fresDa", type);
//  history = createBrowserHistory({ forceRefresh: true });
  const addPlaylist = () => {
    if(type == "playlist" || type == 'album'){
      return history.push(`${match.url}${id}`);
    }else{
       return addNewPlaylist(freshData);
    }

  };
  return (
    <div className="card-component" onClick={() => addPlaylist()}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <p style={{ textAlign: "center" }}>{title}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  playlist: state.recentlyReleased.addRealeases,
});

const mapDispatchToProps = (dispatch) => ({
  addNewPlaylist: (playlist) => dispatch(addNewPlaylist(playlist)),
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Card))