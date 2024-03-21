"use client";
import { useRef, useState } from "react";
import { FiRepeat } from "react-icons/fi";
import { GiPauseButton } from "react-icons/gi";
import { IoPlaySharp } from "react-icons/io5";

// Time format
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const AudioPlayer = ({ url }: { url: string }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [loop, setLoop] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle play/pause toggle
  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      audioRef.current?.pause();
    } else {
      setPlaying(true);
      audioRef.current?.play();
    }
  };

  // Playnig audio on loop
  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !loop;
      setLoop((previous) => !previous);
    }
  };

  // Current playback time handle
  const handlePlayedTime = () => {
    setPlayed(audioRef.current?.currentTime || 0);
    // Hide player After Audio play end
    if (audioRef.current?.ended && !loop) setPlaying(false);
  };
  const handleDuration = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  // Handle Renge Slider Value
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setPlayed(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="size-[36px] xs:size-[44px] bg-primary rounded-full flex justify-center items-center">
          <span className="text-white">
            {playing ? (
              <GiPauseButton size={26} />
            ) : (
              <IoPlaySharp size={26} className="ml-1" />
            )}
          </span>
        </button>
        <div className={`flex items-center gap-3 ${playing ? "" : "hidden"}`}>
          {/* Range Slider */}
          <input
            type="range"
            value={played}
            max={duration}
            onChange={handleProgressChange}
            className="h-[4px] w-[120px] outline-none accent-green-500 "
          />

          <span className={`text-secondary-text w-8`}>
            {formatTime(duration - played)}
          </span>
          <button onClick={toggleLoop}>
            <span
              className={` ${loop ? "text-primary" : "text-secondary-text"}`}>
              <FiRepeat size={25} />
            </span>
          </button>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={url}
        onPlay={handleDuration}
        onTimeUpdate={handlePlayedTime}
        onLoad={(e) => (e.currentTarget.preload = "metadata")}
      />
    </div>
  );
};

export default AudioPlayer;
