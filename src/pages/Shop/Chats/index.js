import React, { useEffect, useState } from 'react';
import { Network, Urls, config } from '../../../config';
import ChatPopup from './ChatPopup';
import Loader from '../../../assets/animations';
import { Icons } from '../../../common';
import { useTranslation } from 'react-i18next';

export default function Chat() {
    const [open, setOpen] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentChat, setCurrentChat] = useState({});
    const { BS } = Icons;
    const { t } = useTranslation();

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
                        <h1>{t('Chats')}</h1>
                        {conversations?.map((conversation) => {
                            return (
                                <div
                                    className='chat-card'
                                    onClick={() => handleModal(conversation)}
                                >
                                    <div className='p-3'>
                                        <BS.BsFillChatFill size={30} color='#1E93B0' />
                                    </div>
                                    <div className='ms-3'> {conversation.conversation.chatRoom}</div>
                                </div>
                            );
                        })}
                    </>
                )}
                    
        
            {open?<ChatPopup open={open} setOpen={setOpen} conversationId={currentChat.conversation?._id} shopID={currentChat?.shop} />:null}
        </div>
    );
}
