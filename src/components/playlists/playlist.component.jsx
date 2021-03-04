import React from 'react';
import Card from '../../components/Card/card.component'
import './playlist.styles.scss';

const PlayList = ({ListOfPlayLists, title}) => { 
     console.log("playData", ListOfPlayLists);
    return (
      <div className="playlist-section">
        <div className="playlist-title">
          <h3>{title}</h3>
          <hr />
        </div>
        <div className="playlist-part">
          {ListOfPlayLists.map((listOfPlaylist) => (
            <Card
              key={listOfPlaylist.id}
              listOfPlaylist={listOfPlaylist}
              image={listOfPlaylist.picture_medium}
              title={listOfPlaylist.title}
              type={listOfPlaylist.type}
              id={listOfPlaylist.id}
            />
          ))}
        </div>
      </div>
    );
}

export default PlayList;