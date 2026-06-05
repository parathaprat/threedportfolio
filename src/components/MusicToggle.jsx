import React, { useEffect, useRef, useState } from "react";

import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";
import backgroundmusic from "../assets/backgroundmusic.mp3";

/**
 * A single, app-level ambient-music control. Because it is rendered once in
 * App (outside the Router's Routes), it never unmounts on navigation, so the
 * track keeps playing as you move between pages.
 */
const MusicToggle = () => {
  const audioRef = useRef(null);
  if (!audioRef.current) {
    audioRef.current = new Audio(backgroundmusic);
    audioRef.current.volume = 0.2;
    audioRef.current.loop = true;
  }

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    return () => audio?.pause();
  }, []);

  return (
    <button
      onClick={() => setIsPlaying((p) => !p)}
      aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
      title={isPlaying ? "Pause ambient music" : "Play ambient music"}
      className="fixed bottom-4 right-4 z-50 w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-purple-400/50 transition"
    >
      <img
        src={isPlaying ? soundon : soundoff}
        alt=""
        className="w-5 h-5 object-contain"
      />
    </button>
  );
};

export default MusicToggle;
