// import Button from "@mui/material/Button"
import styles from './fancyButton.module.css'
export default function FancyButton({ ButtonText='', onClick, style, disabled=false } : { ButtonText: string;
onClick?: () => void;
style?: any;
disabled?: boolean }) {
    return (
        <button type='button' onClick={onClick} className={`${styles.fbutton} ${style}`} id="fancy-button" disabled={disabled}>
            {ButtonText}
        </button>
    )
}