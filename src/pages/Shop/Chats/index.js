import React, { useEffect, useState } from 'react';
import { Network, Urls, config } from '../../../config';
import ChatPopup from './ChatPopup';
import Loader from '../../../assets/animations';

export default function Chat() {
    const [open, setOpen] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentChat, setCurrentChat] = useState({});

    useEffect(() => {
        MyConversations();
    }, []);

    const MyConversations = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getMyConversation, (await config()).headers);
        console.log(response.data);
        setConversations(response.data.conversations);
        setLoading(false);
    };

    const handleModal = (conversation) => {
        setCurrentChat(conversation);
        setOpen(!open);
    }
    return (
        <div>
            
                {loading ? (
                    <Loader />
            ) : (
                    <>
                        <h1>Chat Rooms</h1>
                        {conversations?.map((conversation) => {
                            return <div onClick={() => handleModal(conversation)}>
                                {conversation.conversation.chatRoom}
                            </div>;
                        })}
                    </>
                )}
                    
        
            {open?<ChatPopup open={open} setOpen={setOpen} conversationId={currentChat.conversation?._id} shopID={currentChat?.shop} />:null}
        </div>
    );
}
