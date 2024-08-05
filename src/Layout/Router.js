import { Route, Routes } from "react-router-dom";
import IntroPage from "../Pages/IntroPage/IntroPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import MyPage from "../Pages/MyPage/MyPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListPage from "../Pages/Community/ListPage/ListPage";
import DetailPage from "../Pages/Community/DetailPage/DetailPage";
import CreatePage from "../Pages/Community/CreatePage/CreatePage";
import SharePage from "../Pages/Community/SharePage/SharePage";
import ShowPage from "../Pages/Community/ShowPage/ShowPage";
import APITest from "../Test/APITest";
import Layout from "./Layout";
import PublicRoute from "../Layout/PublicRoute";
import PrivateRoute from "../Layout/PrivateRoute";

function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={<PublicRoute element={<IntroPage />}/>}
            />
            <Route
                path="/register"
                element={<PrivateRoute element={<RegisterPage />} />}
            />
            <Route element={<Layout />}>
                <Route
                    path="/mypage"
                    element={<PrivateRoute element={<MyPage />} />}
                />
                <Route
                    path="/home"
                    element={<PrivateRoute element={<HomePage />} />}
                />
                <Route
                    path="/list"
                    element={<PrivateRoute element={<ListPage />} />}
                />
                <Route
                    path="/detail"
                    element={<PrivateRoute element={<DetailPage />} />}
                />
                <Route
                    path="/create"
                    element={<PrivateRoute element={<CreatePage />} />}
                />
                <Route
                    path="/share"
                    element={<PrivateRoute element={<SharePage />} />}
                />
                <Route
                    path="/show"
                    element={<PrivateRoute element={<ShowPage />} />}
                />
            </Route>
            <Route path="/api_test" element={<PrivateRoute element={<APITest />} />} />
        </Routes>
    );
}

export default Router;
