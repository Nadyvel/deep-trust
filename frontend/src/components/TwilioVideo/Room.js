import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import './Room.scss'

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant]);
    };

    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName
    }).then(room => {
      setRoom(room);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom(currentRoom => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map(participant => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className="room">
      <div className="headerWrap">
        <header className="header">
          <h3>Deep Trust</h3>
        </header>
      </div>
      {/* <h2>Room: {roomName}</h2> */}
      <div className="local-participant">
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ''
        )}
              {/* <h3>Remote Participants</h3> */}
      <div className="remote-participants">{remoteParticipants}</div>
      <div className="buttonWrap">
        <button className="logoutButton" onClick={handleLogout}></button>
      </div>
      </div>
    </div>
  );
};

export default Room;
