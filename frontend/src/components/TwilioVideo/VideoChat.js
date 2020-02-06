import React, { useState, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './Room';
import axios from 'axios';

const VideoChat = () => {
	const [username, setUsername] = useState('');
	const [roomName, setRoomName] = useState('');
	const [token, setToken] = useState(null);

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
			<Lobby
				username={username}
				roomName={roomName}
				handleUsernameChange={handleUsernameChange}
				handleRoomNameChange={handleRoomNameChange}
				handleSubmit={handleSubmit}
			/>
		);
	}
	return render;
};

export default VideoChat;
