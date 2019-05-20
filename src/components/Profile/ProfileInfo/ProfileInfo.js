import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
          <div className={s.wrapper}>
              <img src='https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_1280.jpg' />
          </div>
          <div className={s.descriptionBlock}>
              ava+description
          </div>
      </div>
    );
}


export default ProfileInfo;