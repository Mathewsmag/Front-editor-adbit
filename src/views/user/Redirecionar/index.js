import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

function Child() {
    let { uri } = useParams();
    if (uri === "google"){
        window.location.replace("https://www.google.com/")
    }else{
        return(
            <h3>ERRO 404, O ENDEREÇO "{uri}" NÃO EXISTE</h3>
        )
    } 
}
export default function Params() {
    return (
        <Router>
            <Switch>
                <Route path="/:uri" children={<Child />} />
            </Switch>
        </Router>

    );
}
