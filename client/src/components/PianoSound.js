import { useSound } from '../context/SoundContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause);

export default function PianoSound() {
  const { piano, setPiano, setSrc } = useSound();

  //Setsplaying state to true through HELPER FUNCTION in SoundContext.js
  const playSound = () => {
    setSrc('http://localhost:8080/public/Piano.mp3');
    setPiano(true);
  };

  const pauseSound = () => {
    setPiano(false);
  };

  return (
    <section className="flex flex-row justify-around items-center">
      <div>
        <h1 className="font-body text-2xl text-center">Piano</h1>
      </div>
      <div>
        {piano ? (
          <button onClick={pauseSound} className="align-middle">
            <FontAwesomeIcon icon="pause" className="h-5" />
          </button>
        ) : (
          <button onClick={playSound} className="align-middle">
            <FontAwesomeIcon icon="play" className="h-5" />
          </button>
        )}
      </div>
    </section>
  );
}
