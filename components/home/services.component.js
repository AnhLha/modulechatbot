
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useTranslation } from 'react-i18next'
import styles from '../../assets/styles/home/services.module.scss'

import Image from 'next/image'
import rightImage from '../../assets/images/img_05.jpg';
import manicureImage from '../../assets/images/manicure-110x110.jpg';
import pedicureImage from '../../assets/images/pedicure-110x110.jpg';
import eyeLashImage from '../../assets/images/eyelash-110x110.jpg';
import eyeBrowImage from '../../assets/images/eyebrow-110x110.jpg';
import nailsImage from '../../assets/images/nails-110x110.jpg';
import gelImage from '../../assets/images/gel-110x110.jpg';
import maniImage from '../../assets/images/mani-110x110.jpg';

const Services = () => {
    // const { t, i18n } = useTranslation();
    // const { services } = useSelector(state => state.index);
    const services = [
        {
            name: 'Manicure - The Royal CBD',
            price: 60,
            description: '',
            image: manicureImage
        },
        {
            name: 'Pedicure - The Royal CBD',
            price: 88,
            description: '',
            image: pedicureImage
        },
        {
            name: 'Eyelash extention - Fill',
            price: 60,
            description: '',
            image: eyeLashImage
        },
        {
            name: 'Waxing - Eyebrows',
            price: 10,
            description: '',
            image: eyeBrowImage
        },
        // {
        //     name: '',
        //     price: 14,
        //     description: '35 minutes',
        //     image: nailsImage
        // },
        // {
        //     name: 'Manicure - The Royal CBD',
        //     price: 45,
        //     description: '35 minutes',
        //     image: gelImage
        // },
        // {
        //     name: 'Manicure - The Royal CBD',
        //     price: 45,
        //     description: '35 minutes',
        //     image: maniImage
        // },
    ]

    return <div className={styles.services_container}>
        <div className={styles.services_header}>
            <h3>POPULAR OFFERS</h3>
        </div >
        <div className={styles.services_menu}>

            <div className={styles.services_list}>
                {services.map((service) => {
                    return <div className={styles.service}>
                        <div className={styles.service_image}>
                            <Image
                                src={service.image}
                                alt="right-image"
                                width="80px"
                                height="80px"
                                objectFit="contain"
                            />
                        </div>
                        <div className={styles.service_detail}>
                            <div className={styles.service_title}>
                                <h6>{service.name}</h6>
                                <span className={styles.dots}></span>
                                <h6><span>$</span>{service.price}</h6>
                            </div>
                            <div className={styles.service_desc}>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div className={styles.right_image}>
                <Image src={rightImage} alt="right-image" />
            </div>
        </div>

    </div>
}

export default Services;