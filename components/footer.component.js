import { memo } from "react"
import styles from "../assets/styles/footer.module.scss"
import Image from 'next/image'

const Footer = () => {
    return <footer>
        {/* <div className={styles.footer_container}>
            
        </div> */}
        <div className={styles.bottom_footer}>
            <div className={styles.copyright_container}>
                <p>Copyright © 2022 Texas Nail Bar & Lash</p>
            </div>
            <div className={styles.author_container}>
                {/* <p>Designed By Kong</p> */}
            </div>
        </div>
    </footer>
}

export default memo(Footer)