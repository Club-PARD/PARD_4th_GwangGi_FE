import {Route, Routes} from "react-router-dom";
import IntroPage from "../Pages/IntroPage/IntroPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import MyPage from "../Pages/MyPage/MyPage"
import HomePage from "../Pages/HomePage/HomePage"
import ListPage from "../Pages/Community/ListPage/ListPage"
import DetailPage from "../Pages/Community/DetailPage/DetailPage"
import CreatePage from "../Pages/Community/CreatePage/CreatePage"




function Router() {

    return (
        <Routes>
            <Route index="index" path="/" element={<IntroPage />}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/create" element={<CreatePage />} />
        </Routes>
    )
}

export default Router;