import React, { useState, useRef } from 'react';

const AudioPlayer = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const audio = audioRef.current;
    audio.volume = event.target.value / 100;
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `<span class="math-inline">\{minutes\.toString\(\)\.padStart\(2, '0'\)\}\:</span>{remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
<>
<div className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-gray-100 shadow-md">
      <div className="flex items-center">
        {title && <h3 className="text-lg font-medium mr-4">{title}</h3>}
        <button
          onClick={togglePlay}
          className={`w-8 h-8 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            isPlaying ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.75 9v16a1 1 0 0 1-1 1H9.75a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zM12 4.5v15" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.75 9v16a1 1 0 0 1-1 1H9.75a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.75 4.75v14.5a1 1 0 0 1-1 1H.75a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1H4.75z" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          className="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          min="0"
          max="100"
          value={audioRef.current?.volume * 100 || 0}
          onChange={handleVolumeChange}
          />
          <span className="ml-2 text-sm">{formatTime(currentTime)}</span>
          <span className="ml-2 text-sm">
            {formatTime(audioRef.current?.duration || 0)}
          </span>
        </div>
      </div>
  
      <audio ref={audioRef} onPlay={handleTimeUpdate} onTimeUpdate={handleTimeUpdate} src={src} autoPlay={false} /></>
    );
  };
  
  export default AudioPlayer;
