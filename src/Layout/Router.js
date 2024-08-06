import { Route, Routes } from "react-router-dom";
import IntroPage from "../Pages/IntroPage/IntroPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import TestPage from "../Pages/TestPage/TestPage";
import MyPage from "../Pages/MyPage/MyPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListPage from "../Pages/Community/ListPage/ListPage";
import DetailPage from "../Pages/Community/DetailPage/DetailPage";
import CreatePage from "../Pages/Community/CreatePage/CreatePage";
import SharePage from "../Pages/Community/SharePage/SharePage";
import ShowPage from "../Pages/Community/ShowPage/ShowPage";
import Layout from "./Layout";
import PublicRoute from "../Layout/PublicRoute";
import PrivateRoute from "../Layout/PrivateRoute";
import BaseLayout from "../Layout/BaseLayout";

import { FormProvider } from "../Pages/RegisterPage/FormContext";
import Page1 from "../Pages/RegisterPage/Page1";
import Page2 from "../Pages/RegisterPage/Page2";
import Page3 from "../Pages/RegisterPage/Page3";
import Page4 from "../Pages/RegisterPage/Page4";

function Router() {
    return (
        <FormProvider>
            <Routes>
                <Route element={<BaseLayout />}>
                    <Route
                        path="/"
                        element={<PublicRoute element={<IntroPage />} />}
                    />
                    <Route
                        path="/register"
                        element={<PrivateRoute element={<RegisterPage />} />}
                    />
                    <Route
                        path="/r_page1"
                        element={<PrivateRoute element={<Page1 />} />}
                    /> {/* 테스트용 */}
                    <Route
                        path="/r_page2"
                        element={<PrivateRoute element={<Page2 />} />}
                    /> {/* 테스트용 */}
                    <Route
                        path="/r_page3"
                        element={<PrivateRoute element={<Page3 />} />}
                    /> {/* 테스트용 */}
                    <Route
                        path="/r_page4"
                        element={<PrivateRoute element={<Page4 />} />}
                    /> {/* 테스트용 */}
                    <Route
                        path="/test"
                        element={<PrivateRoute element={<TestPage />} />}
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
                            path="/detail/:challenge_id"
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
                    <Route
                        path="/api_test"
                        element={<PrivateRoute element={<APITest />} />}
                    />
                </Route>
            </Routes>
        </FormProvider>
    );
}

export default Router;
