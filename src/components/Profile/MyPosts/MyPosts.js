import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {updateNewPostText} from "../../redux/state";

const MyPosts = (props) => {

	let postElements = props.postData.map( p => {
		return (
			<Post message={p.message} likesCount={p.likesCount}/>
			)
	});

	let newPostElement = React.createRef();

	let addPost = () => {
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
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	</div>
	)
}

export default MyPosts;