import {Route, Routes} from "react-router-dom";
import IntroPage from "../Pages/IntroPage/IntroPage"
import RegisterPage from "../Pages/RegisterPage/RegisterPage"
import MyPage from "../Pages/MyPage/MyPage"
import HomePage from "../Pages/HomePage/HomePage"
import ListPage from "../Pages/Community/ListPage/ListPage"
import DetailPage from "../Pages/Community/DetailPage/DetailPage"
import CreatePage from "../Pages/Community/CreatePage/CreatePage"
import Layout from "./Layout";

function Router() {

    return (
        <Routes>
            <Route index="index" path="/" element={<IntroPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route element={<Layout />}>
                <Route path="/mypage" element={<MyPage />}/>
                <Route path="/home" element={<HomePage />}/>
                <Route path="/list" element={<ListPage />}/>
                <Route path="/detail" element={<DetailPage />}/>
                <Route path="/create" element={<CreatePage />}/>
            </Route>
        </Routes>
    )
}

export default Router;