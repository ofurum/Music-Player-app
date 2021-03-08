import React from 'react';
import Card from '../../components/Card/card.component'
import './playlist.styles.scss';
import Loading from '../../components/Load/Loader.component'

const PlayList = ({ListOfPlayLists, title}) => { 
     console.log("playData", ListOfPlayLists);
    return (
      <div className="playlist-section">
        <div className="playlist-title">
          <h3>{title}</h3>
          <hr />
        </div>
        <div className="playlist-part">
          {!ListOfPlayLists ? (
            <Loading />
          ) : (
            ListOfPlayLists.map((listOfPlaylist,index) => (
              <Card
                key={listOfPlaylist.id}
                freshData={listOfPlaylist}
                image={listOfPlaylist.picture_medium}
                title={listOfPlaylist.title}
                type={listOfPlaylist.type}
                id={listOfPlaylist.id}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    );
}

export default PlayList;