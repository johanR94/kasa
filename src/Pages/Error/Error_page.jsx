import { Link } from "react-router-dom";


export default function ErrorPage(){

    return(
        <>
        <div className="error">
            <h1 className="error_title">404</h1>
            <p className="error_text"> Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/" ><span className="error_return"> Retourner sur la page d&apos;accueil</span></Link>
        </div>
        </>
    )
}