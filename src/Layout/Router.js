import {Route, Routes} from "react-router-dom";
import IntroPage from "../Pages/IntroPage/IntroPage"
import RegisterPage from "../Pages/RegisterPage/RegisterPage"
import MyPage from "../Pages/MyPage/MyPage"
import HomePage from "../Pages/HomePage/HomePage"
import ListPage from "../Pages/Community/ListPage/ListPage"
import DetailPage from "../Pages/Community/DetailPage/DetailPage"
import CreatePage from "../Pages/Community/CreatePage/CreatePage"
import SharePage from "../Pages/Community/SharePage/SharePage"
import ShowPage from "../Pages/Community/ShowPage/ShowPage"
import APITest from "../Test/APITest"

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
                <Route path="/share" element={<SharePage/>}/>
                <Route path="/show" element={<ShowPage/>}/>
            </Route>
            <Route path="/api_test" element={<APITest/>}/>
        </Routes>
    )
}

export default Router;