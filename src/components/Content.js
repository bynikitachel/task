import { useState } from 'react'
import { onClick } from './ContentScript'
import Loader from './Loader'
import contentImage from '../images/content/image.webp'
import contentMovie from '../images/content/efir 1.webm'
const logo = 'https://multimedia.corprensa.com/la-prensa/assets/logo_laprensa_panama.svg'

const Content = () => {

    const themeTitle = 'La fuga del cartel a un convento por un producto inventado y el rejuvenecimiento milagroso de todas sus hermanas'
    const themeSubtitle = 'La historia desgarradora de la Hermana Mónica (Dra. Mónica Astorga Carmona del Instituto Nacional de Laboratorios de Salud, antes de convertirse en monja)'
    const themeDescription = 'Qué producto inventó Mónica, por qué se escondió de la mafia, qué tenía que ver con el negocio farmacéutico, cómo acabó en un convento del sur del país y el milagro de rejuvenecimiento que ocurrió con las monjas, lo descubrirás en este artículo.'
    const firstP = `Blanca Herrera: ¿Qué pasó después?
                    Hermana Mónica: Una semana después, cuando volvía a casa del trabajo, creí que me perseguía un minibús negro de la marca Mercedes.`
    const secondP = `Cuando llegué a casa, encontré la puerta abierta. Me asusté y quise huir, pero dos hombres se acercaron por detrás y me exigieron que entrara al apartamento. Otros dos hombres ya estaban allí. Me agarraron y... todavía me resulta difícil hablar de ello, lo siento... (llorando) ...me golpearon y violaron.`
    const thirdP = `Blanca Herrera: ¡Qué horror! ¿Has averiguado quién era?
                    Hermana Mónica: Sí, uno de los atacantes me gritó diciendo: "¡¿Quieres acabar en una zanja con la boca cosida y una nota en el bolsillo? ¡Nadie se atreve a ir contra el Cártel del Golfo!”`

    const [disableButton, setDisableButton] = useState(false)


    return (
        <>
            <div className="content">
                <div className="theme-title"><h1>{themeTitle}</h1></div>
                <div className="interviewer">Blanca Herrera</div>
                <video src={contentMovie} controls></video>
                <h2>{themeSubtitle}</h2>
                <p>{themeDescription}</p>
                <p>{firstP}</p>
                <p>{secondP}</p>
                <p>{thirdP}</p>
                <img src={contentImage} alt='victim'></img>
            </div>
            <div className='button-container'>
                <button
                    className='order-button'
                    disabled={disableButton}
                    onClick={() => onClick(setDisableButton)}
                >
                    {disableButton ?
                        <Loader /> :
                        <>
                            <img src={logo} width='100px' alt='logo'></img>
                            <div>PEDIR AHORA</div>
                            <div>CON 50% DE DESCUENTO</div>
                        </>
                    }

                </button>
            </div>
        </>
    )
}

export default Content