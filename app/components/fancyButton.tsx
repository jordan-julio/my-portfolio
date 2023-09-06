// import Button from "@mui/material/Button"
import styles from './fancyButton.module.css'
export default function FancyButton({ ButtonText } : { ButtonText: string }) {
    return (
        <button type='button' className={styles.fbutton} id="fancy-button">
            {ButtonText}
        </button>
    )
}