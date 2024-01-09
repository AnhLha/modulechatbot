import styles from '../assets/styles/gallery.module.scss';
import { Grid, Box } from '@mui/material';
import Image from 'next/image';
import img00 from '../assets/images/gallery00.jpg'
import img01 from '../assets/images/gallery01.jpg'
import img03 from '../assets/images/gallery03.jpg'
import img04 from '../assets/images/gallery04.png'
import img05 from '../assets/images/gallery05.png'
import img06 from '../assets/images/gallery06.png'
import img07 from '../assets/images/gallery07.png'
import img08 from '../assets/images/gallery08.png'
import img09 from '../assets/images/gallery09.png'
import img10 from '../assets/images/gallery10.png'
import img11 from '../assets/images/gallery11.png'
import img12 from '../assets/images/gallery12.png'
import img13 from '../assets/images/gallery13.png'
import img14 from '../assets/images/gallery14.png'
import img15 from '../assets/images/gallery15.png'
import img16 from '../assets/images/gallery16.png'
import img17 from '../assets/images/gallery17.png'
import img18 from '../assets/images/gallery18.png'
import img19 from '../assets/images/gallery19.png'
import img20 from '../assets/images/gallery20.png'
import img21 from '../assets/images/gallery21.png'
import img22 from '../assets/images/gallery22.png'
import img23 from '../assets/images/gallery23.png'
import img24 from '../assets/images/gallery24.png'
import img25 from '../assets/images/gallery25.png'
import img26 from '../assets/images/gallery26.png'
import img27 from '../assets/images/gallery27.png'
import img28 from '../assets/images/gallery28.png'
import img29 from '../assets/images/gallery29.png'

import img30 from '../assets/images/gallery30.png'
import img31 from '../assets/images/gallery31.png'
import img32 from '../assets/images/gallery30.png'
import img33 from '../assets/images/gallery33.png'
import img34 from '../assets/images/gallery34.png'
import img35 from '../assets/images/gallery35.png'
import img36 from '../assets/images/gallery36.png'
import img37 from '../assets/images/gallery37.png'
import img38 from '../assets/images/gallery38.png'
import img39 from '../assets/images/gallery39.png'
import img40 from '../assets/images/gallery40.png'
import img41 from '../assets/images/gallery41.png'
import img42 from '../assets/images/gallery42.png'
import img43 from '../assets/images/gallery43.png'
import img44 from '../assets/images/gallery44.png'
import img45 from '../assets/images/gallery45.png'
import img46 from '../assets/images/gallery46.png'
import img47 from '../assets/images/gallery47.png'
import img48 from '../assets/images/gallery48.png'
import img49 from '../assets/images/gallery49.png'
import img50 from '../assets/images/gallery50.png'
import img51 from '../assets/images/gallery51.png'
import img52 from '../assets/images/gallery52.png'
import img53 from '../assets/images/gallery53.png'
import img54 from '../assets/images/gallery54.png'
import img55 from '../assets/images/gallery55.png'
import img56 from '../assets/images/gallery56.png'
import img57 from '../assets/images/gallery57.png'
import img58 from '../assets/images/gallery58.png'
import img59 from '../assets/images/gallery59.png'

import img60 from '../assets/images/gallery60.png'
import img61 from '../assets/images/gallery61.png'
import img62 from '../assets/images/gallery62.png'
import img63 from '../assets/images/gallery63.png'
import img64 from '../assets/images/gallery64.png'

export default function Gallery() {
    const images = [
        img00, img01, img03, img04,
        img05, img06, img07, img08,
        img09, img10, img11, img12,
        img13, img14, img15, img16,
        img17, img18, img19, img20,
        img21, img22, img23, img24,
        img25, img26, img27, img28,
        img29, img30, img31, img32,
        img33, img34, img35, img35,
        img36, img37, img38, img39,
        img40, img41, img42, img43,
        img44, img45, img46, img47,
        img48, img49, img50, img52,
        img53, img54, img55, img56,
        img57, img58, img59, img60,
        img61, img58, img59, img60,
        img61, img62, img63, img64
    ]
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>GALLERY</h2>
            </div>

            <div className={styles.main}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 1 }}  >
                        {images.map((image, index) => {
                            return <Grid key={index} item xs={6} sm={4} md={3}>
                                <Image src={image.src}
                                    quality="50"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,  33vw"
                                    height="100%"
                                    width="100%"
                                />
                            </Grid>
                        })}
                    </Grid>
                </Box>
            </div>
        </div>
    )
}
