import { dataTrees } from '../../data.tsx'
import classes from './BlocksSection.module.css'

export default function BlocksSection(){
    return(
        <div className={classes.blocks}>
            {
                dataTrees.map((tree)=><div key={tree.id} className={classes.blockAboutTree}>
                    <div className={classes.blockAboutTree_picture}><img src={tree.img} alt={tree.title} /></div>
                    <div className={classes.blockAboutTree_title}>{tree.title}</div>
                    <div className={classes.blockAboutTree_description}>{tree.description}</div>
                </div>)
            }
        </div>
    )
}