import React, { useState, useCallback, useEffect } from 'react';
import Lobby from './Lobby';
import Room from './Room';
import axios from 'axios';

const VideoChat = (props) => {

	console.log('videochat', props)

	const [username, setUsername] = useState('');
	const [roomName, setRoomName] = useState('');
	const [token, setToken] = useState(null);

	const data = props.location.myBooking.user.username
	console.log('username', data)

	const rName = props.location.myBooking.user.id + props.location.myBooking.user.email 
	+ props.location.myBooking.id + props.location.myBooking.date + props.location.myBooking.time 
	+ props.location.myBooking.psychologist
	console.log('room', rName)

	const roName = ''


	useEffect(() => {
		if(!username) {
		setUsername({
			username:props.location.myBooking.user.username 
		})
		setRoomName({
			roomName: rName
		})
	}
		console.log('setUsername', username)
		console.log('roomName', roomName)
	},[])

	console.log('in da state', username)

	const handleUsernameChange = useCallback(event => {
		setUsername(event.currentTarget.value);
	}, []);

	const handleRoomNameChange = useCallback(event => {
		setRoomName(event.currentTarget.value);
	}, []);

	const handleSubmit = useCallback(
		async event => {
			event.preventDefault();
			const result = await axios({
				method: 'POST',
				url: 'https://cadet-cichlid-4005.twil.io/create-token',
				data: {
					identity: username,
					room: roomName
				}
			})
			setToken(result.data)
		},
		[roomName, username]
	);

	const handleLogout = useCallback(event => {
		setToken(null);
	}, []);
	


	let render;
	if (token) {
		render = (
			<Room
				roomName={roomName}
				token={token}
				handleLogout={handleLogout}
			/>
		);
	} else {
		render = (
			// <Lobby
			// 	username={username.username}
			// 	roomName={roomName.roomName}
			// 	// handleUsernameChange={handleUsernameChange}
			// 	// handleRoomNameChange={handleRoomNameChange}
			// 	handleSubmit={handleSubmit}
			// />

			<form onSubmit={handleSubmit}>
      			<h2>Enter a room</h2>
      		<div>
        		<label htmlFor="name">Name:</label>
        	<input
          		type="text"
          		id="field"
          		value={username.username}
          		onChange={handleUsernameChange}
          		required
        	/>
      		</div>

      		<div>
        		<label htmlFor="room">Room name:</label>
        	<input
          		type="text"
          		id="room"
          		value={roomName}
          		onChange={handleRoomNameChange}
          		required
        	/>
      		</div>

      		<button type="submit">Submit</button>
    		</form>
		);
	}
	return render;
};

export default VideoChat;
