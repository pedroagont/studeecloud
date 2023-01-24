import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';

library.add(faClone);

export default function TitlePanel(props) {
  const {
    roomName, //used in displaying roomName
    joinRoomLink,
  } = props;

  return (
    <section className="dashboard__panel relative border bg-meringue py-4">
      <div className="h-full flex flex-col justify-end">
        <div className="my-auto">
          <h1 className="mt-3 mb-5 font-display text-teal text-5xl text-center">
            StudeeCloud
          </h1>

          <h2 className="font-header text-dark-gray text-3xl text-center">
            <strong>
              Collaborative
              <br />
              Study Environment
            </strong>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <h3 className="font-body text-dark-gray text-2xl">
            <strong className="font-header">Room: </strong>
            {roomName}
          </h3>

          <button
            type="button"
            className="text-body text-teal text-xl border p-2 m-3 rounded"
            onClick={() => navigator.clipboard.writeText(joinRoomLink)}
          >
            <FontAwesomeIcon icon="clone" />
          </button>
        </div>

        <h3 className="font-body text-2xl text-deep-purple text-center m-auto">
          Share your room link with your team!
        </h3>
      </div>
    </section>
  );
}
