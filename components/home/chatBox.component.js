import React, {useState} from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../../assets/styles/chatBox.module.scss'

import Image from 'next/image'
import chatBoxIcon from '../../assets/images/chatbox_icon.png'

const ChatBox = () => {
    const { t, i18n } = useTranslation();
    const [isShowChatBox, setIsShowChatBox] = useState(false);

    const onChatBoxBtnClicked = ()=>{
        setIsShowChatBox(!isShowChatBox);
    }

    return <div className={styles.chatbox_container}>
        <div className={styles.icon_container} onClick={onChatBoxBtnClicked}>
            <Image src={chatBoxIcon} />
        </div>
        {isShowChatBox ?
            <div className={styles.chatbox}>
                <div className={styles.charbox_header}>
                    <h3>Customer service</h3>
                </div>

                <div className={styles.chatbox_messages}>

                </div>
                <div className={styles.chatbox_input}>
                    <input className={styles.input}>
                    </input>
                    <a className={styles.send_message_btn} href="#">
                        <p>Send</p>
                    </a>
                </div>
            </div>
        : null}
    </div>
}

export default ChatBox;