import forestLogo from "../../assets/forest.png"
import classes from "./logoSection.module.css"

export default function LogoSection(){
    return (
        <section className={classes.logoSection}>
            <div className={classes.mainLogo}>
                <img src={forestLogo} />
                <h2>Деревья</h2>
            </div>
        </section>
    )
}