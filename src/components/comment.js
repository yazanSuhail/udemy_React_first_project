import React from 'react';
import { formatRelative } from 'date-fns';
import {ptBR} from 'date-fns/locale'
import userImage from '/Users/yazanalzubi/Desktop/React Completo do básico ao avançado/my-react-app/src/user.png';
import './comment.css';


const Comment = (props) => {
	return (
		<div className="comment">
			<img className="userImage" src={userImage} />
			<div className="content">
				<h2 className="name">{props.name}</h2>
				<p className="email">{props.email}</p>
				<p className="Msg">{props.children}</p>
				<p className="date">{formatRelative(props.date, new Date(), {locale: ptBR})}</p>
				<button className="remove_btn" onClick={props.onRemove}>&times;</button>
			</div>
		</div>
	);
};

export default Comment;
