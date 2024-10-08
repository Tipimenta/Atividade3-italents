import style from './Button.module.css'

function Button ({children}) {
    return (
        <button className={style.btn}>{children}</button>
    )
}

export { Button }