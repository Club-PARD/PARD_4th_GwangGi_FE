// src/Components/PrivateRoute.js
import {Navigate} from "react-router-dom";

function PrivateRoute({
    element,
    ...rest
}) {
    const email = sessionStorage.getItem("user_email");

    if (!email) {
        alert("로그인 후 이용 가능합니다.");
        return <Navigate to="/"/>;
    }

    return element;
}

export default PrivateRoute;
