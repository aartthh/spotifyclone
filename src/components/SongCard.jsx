import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';



const SongCard = ({ song, isPlaying, activeSong, i, data }) => {

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }
  const dispatch = useDispatch();
  const title = song.attributes?.albumName; // Adjust if needed
  const coverArt = song.attributes?.artwork?.url; // Adjust based on actual structure

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={coverArt} className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {title}
          </Link>
        </p>
      </div>
    </div>
  );
};


export default SongCard