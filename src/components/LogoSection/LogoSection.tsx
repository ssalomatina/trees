import forestLogo from "../../assets/forest.png"
import classes from "./logoSection.module.css"

export default function LogoSection(){
    return (
        <section>
            <div className={classes.logoSection}>
                <div className={classes.mainLogo}>
                    <img src={forestLogo} alt="" />
                    <h2>Деревья</h2>
                </div>
            </div>
        </section>
    )
}