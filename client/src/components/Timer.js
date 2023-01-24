import { useTimer } from '../context/TimerContext';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faGear } from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause, faGear);

export default function Timer() {
  const {
    setShowSettings,
    workMinutes,
    breakMinutes,
    secondsLeft,
    isPaused,
    mode,
    togglePlay,
  } = useTimer();

  // Helper functions to calcuate time left in Min:Sec format
  const totalSeconds = mode === 'work' ? workMinutes * 60 : breakMinutes * 60;

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  // Conditional needed to display leading 0
  if (seconds < 10) seconds = '0' + seconds;

  // Helper function to calcuate perfentage of time left
  // REVIEW: Helper function is used in CircularProgressBar Componenet.
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-36">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            textColor: 'black',
            pathColor: mode === 'work' ? 'black' : '#ffcb92',
            tailColor: 'rgba(255,255,255,.2)',
          })}
        >
          <p className="text-2xl">{minutes + ':' + seconds}</p>
        </CircularProgressbarWithChildren>
      </div>

      {/* TODO -- These are the classes that were being used to style the Timer buttons */}
      {/* className="bg-meringue border-2 border-dark-purple font-body p-2 rounded text-dark-gray text-2xl" */}

      <div className="ml-4">
        <div className="mb-2">
          <button type="button" onClick={togglePlay}>
            {isPaused ? (
              <FontAwesomeIcon icon="play" className="h-7" />
            ) : (
              <FontAwesomeIcon icon="pause" className="h-7" />
            )}
          </button>
        </div>
        <div>
          <button onClick={() => setShowSettings(true)}>
            <FontAwesomeIcon icon="gear" className="h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
