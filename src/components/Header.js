const logo = 'https://multimedia.corprensa.com/la-prensa/assets/logo_laprensa_panama.svg'


function Header() {
    const date = new Date()
    const navTitles = ['Locales', 'Judiciales', 'Política', 'Economía', 'Mundo', 'Deportes', 'Vivir+', 'Status K', 'Podcasts', 'Opinión', 'Multimedia', 'Correcciones']
    const themesTitles = ['Tribunal', 'Electoral', 'Patrocinado', 'Enfermedades', 'Caja De Seguro', 'Jubilados', 'Laurentino Cortizo', 'Asamblea Nacional', 'Corte Suprema De', 'José Ayú Prado']
    return (
        <header>
            <div className="header-container">
                <div className="menu-container">
                    <div className="menu">
                        <div className="burger">
                            <a href="#" className="fa-solid icon"></a>
                        </div>
                        <div className="search">
                            <a href="#" className="fa-solid icon"></a>
                        </div>
                        <ul className="social-media">
                            <li><a href="#" className="fa-brands fa-square-twitter icon twitter"></a></li>
                            <li><a href="#" className="fa-brands fa-square-facebook icon facebook"></a></li>
                            <li><a href="#" className="fa-brands fa-square-instagram icon instagram"></a></li>
                        </ul>
                    </div>
                    <div className="current-date">{`Panamá, ${date.getDay()} ${date.getMonth()} ${date.getFullYear()}`}</div>
                </div>
                <img className="logo" src={logo} alt="logo"></img>
                <div className="auth-container">
                    <div>
                        <div className="buttons-container">
                            <button className="auth">Inicia Sesión</button>
                            <button className="subscription">Suscríbete desde</button>
                        </div>
                        <div className="ePaper">ePaper</div>
                    </div>
                </div>
            </div>
            <div className="buttons-container">
                <button className="auth">Inicia Sesión</button>
                <button className="subscription">Suscríbete desde</button>
            </div>
            <ul className="navigation">
                {navTitles.map((e, i) => <li key={i}><a>{e}</a></li>)}
            </ul>
            <ul className="themes">
                <li>TEMAS DE HOY:</li>
                {themesTitles.map((e, i) => <li key={i}><a>{e}</a></li>)}
            </ul>
        </header>
    )
}

export default Header