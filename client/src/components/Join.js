import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return (
		<div className="joinOUterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>

				<div>
					<input
						className="joinInput"
						placeholder="Name"
						type="text"
						onChange={e => setName(e.target.value)}
						/>
				</div>

				<div>
					<input
						className="joinInput mt-20"
						placeholder="Room"
						type="text"
						onChange={e => setRoom(e.target.value)}
						/>
				</div>

				<Link
					onClick={e => (!name || !room) ? e.preventDefault() : null}
					to={`/chat?name=${name}&room=${room}`}>
					<button type="submit" className="button mt-20">Sign In</button>
				</Link>

			</div>
		</div>
	)
}
