import style from './Header.module.css'

function Header({children}) {
    return(
        <header className={style.header}>
            <h1>{children}</h1>
        </header>
    )
}

export { Header }