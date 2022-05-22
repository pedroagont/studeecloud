import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

import DiscoSound from './DiscoSound';
import Rain from './Rain';
import Ghibli from './Ghibli';

export default function TitlePanel({ onSelect }) {
  return (
    <section
      className="dashboard__panel bg-meringue"
      style={{ border: '1px solid black' }}
    >
      <button type="button" className="flex mx-6" onClick={onSelect}>
        <FontAwesomeIcon icon={solid('expand')} className="h-7" />
      </button>

      <h1 className="font-display text-4xl text-black text-center">
        Soundboard
      </h1>
      <h2 className="font-body text-lg text-center">SFX</h2>
      <DiscoSound />
      <Rain />
      <Ghibli />
    </section>
  );
}