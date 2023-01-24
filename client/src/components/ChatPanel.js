// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

library.add(faExpand);

export default function ChatPanel({ onSelect, userName, roomName }) {
  const [messages, setMessages] = useState([]);

  // Custom hook useInterval will take an action on a set time interval
  // const useInterval = (callback, delay) => {
  //   const savedCallback = useRef();

  //   // Remember the latest callback
  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);

  //   // Set up the interval
  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // };

  // useInterval(() => {
  //   getMessages();
  // }, 1000);

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMessages = () => {
    axios
      .get(`/messages/${roomName}`)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="dashboard__panel relative border bg-meringue pb-6">
      <button
        type="button"
        className="absolute"
        style={{ top: '3.5%', right: '2%' }}
        onClick={onSelect}
      >
        <FontAwesomeIcon icon="expand" className="h-7" />
      </button>
      <h1 className="mt-3 mb-5 font-display text-4xl text-deep-purple text-center">
        Chat
      </h1>
      <article className="flex flex-col justify-between border w-5/6 mx-auto bg-gold p-2 rounded h-5/6 overflow-auto">
        <div>
          <MessageList messages={messages} />
        </div>
        <MessageForm
          getMessages={getMessages}
          userName={userName}
          roomName={roomName}
        />
      </article>
    </section>
  );
}
