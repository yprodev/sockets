import React from 'react'

let onlineIcon = ''
let closeIcon = ''

export default ({ room }) => {

	return (
		<div className="infoBar">
			<div className="leftInnerContainer">
				<img className="onlineIcon" src={onlineIcon} />
				<h3>{ room }</h3>
			</div>
			<div className="rightInnerContainer">
				<a href="/">
					<img src={closeIcon} />
				</a>

			</div>
		</div>
	)
}




