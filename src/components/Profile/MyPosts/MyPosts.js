import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postElements = props.postData.map( p => {
		return (
			<Post message={p.post} likesCount={p.likesCount}/>
			)
	});

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
	}

	return (
	<div className={s.postsBlock}>
		<h2>My posts</h2>
		<div>
			<div className={s.text}>
				<textarea ref={newPostElement}></textarea>
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