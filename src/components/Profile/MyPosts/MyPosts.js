import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from "../Profile";

const MyPosts = (props) => {
	let postElements = props.posts.map( p => {
		return (
			<Post message={p.message} likesCount={p.likesCount} />
			)
	});

	let newPostElement = React.createRef();
	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
	<div className={s.postsBlock}>
		<h2>My posts</h2>
		<div>
			<div className={s.text}>
				<textarea onChange={onPostChange}  ref={newPostElement} value={props.newPostText} />
			</div>
			<div>
				<button onClick={onAddPost}>Add post</button>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	</div>
	)
}

export default MyPosts;