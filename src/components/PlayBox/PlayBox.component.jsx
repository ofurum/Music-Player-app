import React,{useState, useEffect, useRef} from 'react';
import imageUrl from "../../assets/bgImg.png";
import './PlayBox.styles.scss';
import {connect} from 'react-redux';


const PlayBox = ({ playlist}) => {
   const [isPlayMusic, setPlayMusic] =useState(false)

   const refContainer = useRef();

   useEffect(() => {
       setPlayMusic(false)
   }, [playlist])
   const playMusic  = () => {
       console.log("play")
         isPlayMusic ? refContainer.current.pause() : refContainer.current.play()
      setPlayMusic(!isPlayMusic);
   }
  if(playlist === null) return playlist;
    console.log('playBox',playlist)
    return (
      <div className="play-box-play">
        <div className="play-box">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                playlist?.album?.cover ||
                // playlist?.picture ||
                // playlist?.cover ||
                imageUrl
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="play-name">
            <span>
              {!playlist?.title ? "Nothing is playing" : playlist.title}
            </span>
          </div>
          <div className="play-logo">
            <i className="fas fa-step-backward"></i>
            <i
              className={`fas ${
                !isPlayMusic ? "fa-play-circle" : " fa-pause-circle"
              } fa-2x`}
              id="circle"
              onClick={() => playMusic()}
            ></i>

            <i class="fas fa-step-forward"></i>
          </div>
          <div className="progress-bar">
            <div className="bar"></div>
          </div>
          <div className="options">
            <i class="far fa-heart"></i>
            <i class="fas fa-random"></i>
            <i class="fas fa-redo-alt"></i>
          </div>
          {<audio ref={refContainer} src={`${playlist.preview}`} />}
        </div>
      </div>
    );
}

const mapStateToProps = (state) => ({
  playlist: state.recentlyReleased.addRealeases
});

export default connect(mapStateToProps)(PlayBox);