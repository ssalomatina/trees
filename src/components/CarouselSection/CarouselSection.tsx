import { Carousel } from 'antd'
import img1 from '../../assets/89467715758d8057c6413e8acb847d87.jpg'
import img2 from '../../assets/preserve-the-forest-1.jpg'
import img3 from '../../assets/scale_2400.jpg'
import img4 from '../../assets/лес.jpg'
import classes from './CarouselSection.module.css'

export default function CarouselSection(){
    return (
        <section>
            <Carousel autoplay>
                <div><img className={classes.slideImg} src={img1}/></div>
                <div><img className={classes.slideImg} src={img3}/></div>
                <div><img className={classes.slideImg} src={img4}/></div>
                <div><img className={classes.slideImg} src={img2}/></div>
            </Carousel>
        </section>
    )
}