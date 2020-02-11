import React, { useState, useCallback, useEffect } from 'react';
// import Lobby from './Lobby';
import Room from './Room';
import axios from 'axios';

import image from '../images/elephant.jpg'

const VideoChat = (props) => {
	// const [username, setUsername] = useState('');
	// const [roomName, setRoomName] = useState('');
	const [token, setToken] = useState(null);

	let username = '';
	let roomName = '';

	if (props.location.data.user.is_user === true && props.location.is_patient === true) {
		username = props.location.data.user.username
	// console.log('username', data)
		roomName = props.location.data.user.id + props.location.data.user.email 
			+ props.location.data.id + props.location.data.date + props.location.data.time 
			+ props.location.data.psychologist
	// console.log('room', rName)
	}
	else if (props.location.data.user.is_psychologist === false && props.location.is_psychologist === true) {
		username = props.location.data.psychologist_first_name+props.location.data.psychologist_last_name
		// console.log('username', data)
		roomName = props.location.data.user.id + props.location.data.user.email 
			+ props.location.data.id + props.location.data.date + props.location.data.time 
			+ props.location.data.psychologist
		// console.log('room', rName)
	}
	else {
		props.history.push('/')
	}

	// const handleUsernameChange = useCallback(event => {
	// 	setUsername(event.currentTarget.value);
	// }, []);

	// const handleRoomNameChange = useCallback(event => {
	// 	setRoomName(event.currentTarget.value);
	// }, []);

	// const handleSubmit = useCallback(
	// 	async event => {
	// 		event.preventDefault();
	// 		const result = await axios({
	// 			method: 'POST',
	// 			url: 'https://cadet-cichlid-4005.twil.io/create-token',
	// 			data: {
	// 				identity: data,
	// 				room: rName
	// 			}
	// 		})
	// 		setToken(result.data)
	// 	},
	// 	[roomName, username]
	// );

	const handleLogout = useCallback(event => {
		setToken(null);
		props.history.push('/')
	}, []);

	useEffect(() => {
		async function fetchData() {
		const result = await axios({
			method: 'POST',
			url: 'https://cadet-cichlid-4005.twil.io/create-token',
			data: {
				identity: username,
				room: roomName
			}
		})
		setToken(result.data)
	}
	fetchData()
	},[])

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

			<img src={image} alt="background"/>
			// <Lobby
			// 	username={username.username}
			// 	roomName={roomName.roomName}
			// 	// handleUsernameChange={handleUsernameChange}
			// 	// handleRoomNameChange={handleRoomNameChange}
			// 	handleSubmit={handleSubmit}
			// />

			// <form onSubmit={handleSubmit}>
      		// 	<h2>Enter a room</h2>
      		// <div>
        	// 	<label htmlFor="name">Name:</label>
        	// <input
          	// 	type="text"
          	// 	id="field"
          	// 	value={username.username}
          	// 	onChange={handleUsernameChange}
          	// 	required
        	// />
      		// </div>

      		// <div>
        	// 	<label htmlFor="room">Room name:</label>
        	// <input
          	// 	type="text"
          	// 	id="room"
          	// 	value={roomName}
          	// 	onChange={handleRoomNameChange}
          	// 	required
        	// />
      		// </div>

      		// <button type="submit">Submit</button>
    		// </form>
		);
	}
	return render;
};

export default VideoChat;
