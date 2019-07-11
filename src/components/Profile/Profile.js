import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return(
		<div>
        	<ProfileInfo />
			<MyPosts postData={props.profilePage.postData}
					 newPostText={props.profilePage.newPostText}
					 updateNewPostText={props.updateNewPostText}
					 addPost={props.addPost}
					/>
		</div>
		);
}

export default Profile;