import React from 'react';
import Image from 'next/image';

import styles from '../assets/styles/services.module.scss'
import gbImg from '../assets/images/parallax_05.jpg'
// import leafsImage from '../assets/images/leafs.png';

function Services() {
  const categorires = [
    {
      name: 'Pedicure',
      services: [
        {
          name: 'Classic Pedi',
          price: 34
        },
        {
          name: 'Hot stone Pedi',
          price: 40
        },
        {
          name: 'The Deluxe Pedi',
          price: 48
        },
        {
          name: 'The Texans Spa',
          price: 58,
          serviceDetails: [
            'Milk & Honey',
            'Aloe Vera',
            'Green Tea'
          ]
        },
        {
          name: 'The Organic',
          price: 68,
          serviceDetails: [
            'Lavender Lace',
            'Crystal Water',
            'Perfume No.5'
          ]
        },
        {
          name: 'The Elegant Spa',
          price: 78,
          serviceDetails: [
            'Honey Pearl',
            'Tropical',
            'Orange No.5'
          ]
        },
        {
          name: 'The Royal CBD',
          price: 88,
          serviceDetails: [
            'Gold',
            'Beach Paradise',
            'Havana Secret'
          ]
        },
      ],
    },
    {
      name: 'Manicures',
      services: [
        {
          name: 'Classic Mani',
          price: 20
        },
        {
          name: 'Hot stone Mani',
          price: 30
        },
        {
          name: 'The Deluxe Mani',
          price: 40
        },
        {
          name: 'The Texans Mani',
          price: 45,
          serviceDetails: [
            'Milk & Honey',
            'Aloe Vera',
            'Green Tea'
          ]
        },
        {
          name: 'The Organic Mani',
          price: 50,
          serviceDetails: [
            'Lavender Lace',
            'Crystal Water',
            'Perfume No.5'
          ]
        },
        {
          name: 'The Elegant Mani',
          price: 55,
          serviceDetails: [
            'Honey Pearl',
            'Tropical',
            'Orange No.5'
          ]
        },
        {
          name: 'The Royal CBD',
          price: 60,
          serviceDetails: [
            'Gold',
            'Beach Paradise',
            'Havana Secret'
          ]
        },
      ],
    },
    {
      name: 'Waxing',
      services: [
        {
          name: 'Eyebrows',
          price: 10
        },
        {
          name: 'Lip',
          price: 7
        },
        {
          name: 'Eyebrows + Tint',
          price: 30
        },
        {
          name: 'Sideburn',
          price: 12,
        },
        {
          name: 'Chin',
          price: 10,
        },
        {
          name: 'Under Arm',
          price: 20,
        },
        {
          name: 'Full Arm',
          price: 40,
        },
        {
          name: 'Full Leg',
          price: 50,
        },
        {
          name: 'Half Leg',
          price: 30,
        },
        {
          name: 'Full Face',
          price: 35,
        },
        {
          name: 'Bikini',
          price: '35+',
        },
        {
          name: 'Brazilian',
          price: '50+',
        },
        {
          name: 'Back',
          price: 50,
        },
      ],
    },
    {
      name: 'Kids (12 & Under)',
      services: [
        {
          name: 'Classic Pedicure',
          price: 20
        },
        {
          name: 'Deluxe Pedicure',
          price: 30
        },
        {
          name: 'Manicure',
          price: 10
        },
        {
          name: 'Polish Change Hand',
          price: 6,
        },
        {
          name: 'Polish Change Hand',
          price: 8,
        },
        {
          name: 'Design',
          price: '5+',
        },
      ],
    },
    {
      name: 'Acrylic',
      services: [
        {
          name: 'Full Set Color Powder',
          price: 45
        },
        {
          name: 'Full Set Ombre',
          price: 55
        },
        {
          name: 'Full Color Powder (same color)',
          price: 30
        },
        {
          name: 'Full Color Powder (different color)',
          price: 40
        },
        {
          name: 'Regular Full Set',
          price: 35
        },
        {
          name: 'Regular Fill-in',
          price: 30
        },
        {
          name: 'Add Gel',
          price: 18
        },
      ],
    },
    {
      name: 'Dipping Gel',
      services: [
        {
          name: 'Dipping on Natural Nails',
          price: 40
        },
        {
          name: 'Add Tip',
          price: 5
        },
        {
          name: 'Dipping Ombre',
          price: 55
        },
        {
          name: 'Dipping & Classic Manicure',
          price: 47
        },
        {
          name: 'Dipping & Deluxe Manicure',
          price: 65
        },
        {
          name: 'Dipping & Organic Manicure',
          price: 70
        },
      ],
    },
    {
      name: 'Add-on',
      services: [
        {
          name: 'Special Shape',
          price: 5
        },
        {
          name: 'Design',
          price: '10+'
        },
        {
          name: 'Extra Length',
          price: '5+'
        },
        {
          name: 'French',
          price: '10+'
        },
        {
          name: 'Take Off w/Service',
          price: 5
        },
        {
          name: 'Take Off w/o Service',
          price: 10
        },
      ],
    },
    {
      name: 'Shellac (gel)',
      services: [
        {
          name: 'Gel Manicure',
          price: 35
        },
        {
          name: 'Gel Manicure w French',
          price: 40
        },
        {
          name: 'Gel Deluxe Manicure',
          price: 55
        },
        {
          name: 'Gel Organic Manicure',
          price: 65
        },
        {
          name: 'Gel Color Change',
          price: 25
        },
        {
          name: 'Gel Only',
          price: 20
        },
      ],
    },
    {
      name: 'Eyelash Extension',
      services: [
        {
          name: 'Lashes Extension',
          price: '100+'
        },
        {
          name: 'Fill',
          price: '60+'
        },
      ],
    },
    {
      name: 'French set',
      services: [
        {
          name: 'Full set',
          price: '50+'
        },
        {
          name: 'Fill',
          price: 45
        },
        {
          name: 'Fill Pink',
          price: 30
        },
      ],
    }
  ]
  return (
    <></>
    // <div className={styles.container}
    //   style={{
    //     backgroundImage: `url(${gbImg.src})`,
    //     backgroundSize: 'contain',
    //   }}
    // >
    //   <div className={styles.header}>
    //     <h2>SERVICES</h2>
    //   </div>
      
    //   <div className={styles.main}>
    //     {categorires.map((category, cIndex) => {
    //       return <React.Fragment key={cIndex}>
    //         <div className={cIndex %2 == 0 ? styles.category_odd : styles.category_even}>
    //           {/* category header */}
    //           <div className={styles.category_header}>
    //             <h4>{category.name}</h4>
    //           </div>

    //           {/* services */}
    //           <div className={styles.services_container}>
    //             {category?.services.map((service, sIndex) => {
    //               return <div key={sIndex} className={styles.service}>
    //                 <div className={styles.service_title}>
    //                   <h6>{service.name}</h6>
    //                   <span className={styles.dots}></span>
    //                   <h6 className={styles.price}><span>$</span>{service.price}</h6>
    //                 </div>
    //                 <div className={styles.service_desc}>
    //                   {service?.serviceDetails ? service?.serviceDetails.map((detail, dIndex) => {
    //                     if(dIndex==0) return <span key={dIndex}>- {detail} </span>
    //                     else return <span key={dIndex}>/ {detail}</span>
    //                   })
    //                     : null
    //                   }
    //                 </div>
    //               </div>
    //             })}
    //           </div>
    //         </div>

    //       </React.Fragment>
    //     })}

    //   </div>
    // </div>
  )
}

export default Services;