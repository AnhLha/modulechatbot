import styles from '../assets/styles/chatwithus/chatwithus.module.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function ChatWithUs() {

    const [userInput, setUserInput] = useState('')
    const [chathistory, setChathistory] = useState([{
        role: "admin",
        content: "Hi"
    }, {
        role: "user",
        content: "Hello"
    }])
    const [isLoading, setIsLoading] = useState(false)

    const handleUserInput = async () => {
        setIsLoading(true);
        setChathistory((prevChat) => [
            ...prevChat,
            {
                role: 'user',
                content: userInput
            }
        ]);
        // call module chatbot in here
        const chatCompletion = await axios.post("", {
            message: [
                ...chathistory,
                {
                    role: 'admin',
                    content: userInput
                }]
        })

        setChathistory((prevChat) => [
            ...prevChat,
            {
                role: "admin",
                // content: chatCompletion.choices[0].message.content
                content: "How are you"
            }
        ])

        setUserInput('');
        setIsLoading(false);
    }

    return (
        <div className={styles.parent}>
            <div style={{ height: "500px", overflow: "auto" }}>
                <div style={{ height: "470px", overflow: "auto", display: "flex", flexDirection:"column"}}>
                    {
                        chathistory.map((message, index) => {
                            return (
                                <div
                                    key={index}
                                    className={message.role === 'user' ? styles.textLeft : styles.textRight}
                                >
                                    <div className={message.role === 'user' ? styles.iconMe : styles.iconAdmin}>
                                        {message.role === 'user' ? 'Me' : 'Ad'}
                                    </div>
                                    <div className={message.role === 'user' ? styles.contentMe : styles.contentAdmin}>
                                        {message.content}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.areaTxt}>
                    <input
                        className={styles.userInputTxt}
                        type='text'
                        placeholder='Ask me something...'
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}>
                    </input>
                    <button className={styles.btnAsk}>
                        Ask
                    </button>
                </div>
            </div>
        </div>
    );
}
