// import Button from "@mui/material/Button"
import styles from './fancyButton.module.css'
export default function FancyButton({ type='button', ButtonText='', onClick, style, disabled=false, id='' } : { ButtonText: string;
onClick?: () => void;
type?: 'button' | 'submit' | 'reset' | undefined;
style?: any;
disabled?: boolean
id?: string }) {
    return (
        <button type={type} onClick={onClick} className={`${styles.fbutton} ${style} fancyButton`} id={id} disabled={disabled}>
            {ButtonText}
        </button>
    )
}