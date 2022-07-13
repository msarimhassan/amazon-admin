import React, { useState, useEffect } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Input, Button } from 'reactstrap';
import { Icons } from '../../../common';
import { io } from 'socket.io-client';
import { Network, Urls, config } from '../../../config';
import Messages from './Messages';
import useUser from '../../../hooks/useUser';
export default function ChatPopup({ open, setOpen, conversationId, shopID }) {
    const { AI } = Icons;
    const { userData } = useUser();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const socket = io('https://amazon-clone-12345.herokuapp.com');
        socket.on('connection', (data) => {
            console.log({ data });
        });
        socket.on(`conversation-${conversationId}`, (data) => {
            setMessages((prevstate) => {
                let newState = prevstate;
                return [...newState, data];
            });
        });
    }, []);

    useEffect(() => {
        GetMessages();
    }, []);

    const GetMessages = async () => {
        const response = await Network.get(
            Urls.getMessages + conversationId,
            (
                await config()
            ).headers
        );
        setMessages(response.data.messages);
    };

    const SendMessage = async() => {
        const obj = {
            conversation: conversationId,
            message: message,
            user: userData.role._id,
            shop: shopID,
            sender: userData.role._id,
        };
        await Network.post(Urls.sendMessage, obj, (await config()).headers);
        setMessage('');
        
    };

    return (
        <div>
            <Offcanvas isOpen={open} direction='end' toggle={() => setOpen(!open)}>
                <OffcanvasHeader toggle={() => setOpen(!open)}>Chat</OffcanvasHeader>
                <OffcanvasBody style={{ height: '80%', flexGrow: 0 }}>
                    <div className='chat-section'>
                        {messages && <Messages conversation={messages} />}
                    </div>
                </OffcanvasBody>
                <div className='d-flex create-message'>
                    <div>
                        <Input
                            placeholder='Enter a message'
                            className='message-input'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div>
                        <Button className='ms-2 send-btn' onClick={() => SendMessage()}>
                            <AI.AiOutlineSend size={20} />
                        </Button>
                    </div>
                </div>
            </Offcanvas>
        </div>
    );
}
