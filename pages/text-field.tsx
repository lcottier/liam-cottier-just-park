import styles from '../styles/TextField.module.css'

interface TextFieldProps {
    title?: string,
    placeholder?: string,
    subtitle?: string,
    icon?: string,
}

export default function TextField({ title, placeholder, subtitle, icon }: TextFieldProps) {
    return (
        <div className={styles.input}>
            {!!title && <span className={styles.title}>{title}</span>}
            {!!placeholder && !!icon && (<div className={styles.inputField}>
                <span className={styles[icon]}></span>
                <input className={styles.field} placeholder={placeholder}></input>
            </div>)}
            {!!placeholder && !icon && (<div className={styles.inputField}>
                <input className={styles.field} placeholder={placeholder}></input>
            </div>)}
            {!placeholder && !!icon && (<div className={styles.inputField}>
                <span className={styles[icon]}></span>
                <input className={styles.field} placeholder={placeholder}></input>
            </div>)}
            {!placeholder && !icon && (<div className={styles.inputField}>
                <input className={styles.field} placeholder={placeholder}></input>
            </div>)}
            {!!subtitle && <a href="" className={styles.subtitle}>{subtitle}</a>}
        </div>
    )
}
