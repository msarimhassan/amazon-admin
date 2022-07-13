import React from 'react'
import useUser from '../../../hooks/useUser';

const NotMyMessages = ({ message }) => {
    return <div className='shop-message'>{message}</div>;
};

const MyMessages = ({ message }) => {
    return (
        <div className='d-flex justify-content-end'>
            <div className='user-message'>{message}</div>
        </div>
    );
};

export default function Messages({ conversation }) {
    const { userData } = useUser();
    console.log("currentUser",userData.role._id);

  return (
      <>
          {conversation.map((message) => {
              console.log("sender", message.sender);
              if (message.sender === userData.role._id) {
                  return <MyMessages message={message.message} />;
              } else {
                  return <NotMyMessages message={message.message} />;
              }
          })}
      </>
  );
}
