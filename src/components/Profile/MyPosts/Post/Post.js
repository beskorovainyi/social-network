import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

	return (
		<div className={s.item}>
			<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/240px-Lewis_Hamilton_2016_Malaysia_2.jpg' />
			{props.message}
			<div>
				<span>
					like {props.likesCount}
				</span>
			</div>
		</div>
	)
}

export default Post;