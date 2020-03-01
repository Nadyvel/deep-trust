import React, { useState, useCallback, useEffect } from 'react';
import Room from './Room';
import axios from 'axios';
import './VideoChat.css';

import image from '../images/elephant.jpg'

const VideoChat = (props) => {
	const [token, setToken] = useState(null);

	let username = '';
	let roomName = '';

	if (props.location.data.user.is_user === true && props.location.is_patient === true) {
		username = props.location.data.user.username
		roomName = props.location.data.user.id + props.location.data.user.email 
			+ props.location.data.id + props.location.data.date + props.location.data.time 
			+ props.location.data.psychologist
	}
	else if (props.location.data.user.is_psychologist === false && props.location.is_psychologist === true) {
		username = props.location.data.psychologist_first_name+props.location.data.psychologist_last_name
		roomName = props.location.data.user.id + props.location.data.user.email 
			+ props.location.data.id + props.location.data.date + props.location.data.time 
			+ props.location.data.psychologist
	}
	else {
		props.history.push('/')
	}


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

			<div className="container">
				<div className="box">
					<div className="hourglass"></div>
				</div>
			</div>

		);
	}
	return render;
};

export default VideoChat;
