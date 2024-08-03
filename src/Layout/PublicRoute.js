// src/Components/PublicRoute.js
import {Navigate} from "react-router-dom";

function PublicRoute({
    element,
    restricted,
    ...rest
}) {
    const email = sessionStorage.getItem("user_email");

    if (email && restricted) {
        alert("이미 로그인한 상태입니다.");
        return <Navigate to="/home"/>;
    }

    return element;
}

export default PublicRoute;
