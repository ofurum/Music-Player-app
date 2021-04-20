import React from 'react';
import './card.styles.scss';
import { addNewPlaylist } from "../../redux/addPlaylist/addPlaylist.action";
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {setIsPlaylist} from '../../redux/listPlayList/listPlaList.action'
const Card = ({
  newData,
  freshData,
  addNewPlaylist,
  index,
  image,
  title,
  type,
  match,
  history,
  setIsPlaylist,
  previewPlaylist,
  id,
}) => {
  console.log("card-fresDa", freshData);
  //  history = createBrowserHistory({ forceRefresh: true });
  const addPlaylist = () => {
    if (type === "playlist" || type === "album") {
      setIsPlaylist(true);
      return history.push(`${match.url}${id}`);
    } 
     if(freshData) return addNewPlaylist(freshData.tracks.data[index]);
   return  addNewPlaylist(newData)
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
  setIsPlaylist: (IdentifyingPlaylist) => dispatch(setIsPlaylist(IdentifyingPlaylist)),
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Card))