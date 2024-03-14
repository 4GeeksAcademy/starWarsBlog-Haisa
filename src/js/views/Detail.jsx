import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Detail = () => {
    const params = useParams()
    const store = useContext(Context)

    const details = () => {
        
    }

    return(
        <div className="bg-dark">
            <h1 className="text-light">Hola que tal</h1>
        </div>
    )
}

export default Detail;