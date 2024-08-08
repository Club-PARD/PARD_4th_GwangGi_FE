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

import AlertPage from "../Pages/TestPage/AlertPage";
import StartPage from "../Pages/TestPage/StartPage";
import QPage1 from "../Pages/TestPage/QPage1";
import QPage2 from "../Pages/TestPage/QPage2";
import QPage3 from "../Pages/TestPage/QPage3";
import QPage4 from "../Pages/TestPage/QPage4";
import QPage5 from "../Pages/TestPage/QPage5";
import QPage6 from "../Pages/TestPage/QPage6";
import QPage7 from "../Pages/TestPage/QPage7";
import QPage8 from "../Pages/TestPage/QPage8";
import QPage9 from "../Pages/TestPage/QPage9";
import QPage10 from "../Pages/TestPage/QPage10";
import QPage11 from "../Pages/TestPage/QPage11";
import QPage12 from "../Pages/TestPage/QPage12";
import AgreePage from "../Pages/TestPage/AgreePage";
import Result_success from "../Pages/TestPage/result_success";
import Result_fail from "../Pages/TestPage/result_fail";

import AlertPaget from "../Pages/TestPage/Unlogin/AlertPage";
import StartPaget from "../Pages/TestPage/Unlogin/StartPage";
import QPage1t from "../Pages/TestPage/Unlogin/QPage1";
import QPage2t from "../Pages/TestPage/Unlogin/QPage2";
import QPage3t from "../Pages/TestPage/Unlogin/QPage3";
import QPage4t from "../Pages/TestPage/Unlogin/QPage4";
import QPage5t from "../Pages/TestPage/Unlogin/QPage5";
import QPage6t from "../Pages/TestPage/Unlogin/QPage6";
import QPage7t from "../Pages/TestPage/Unlogin/QPage7";
import QPage8t from "../Pages/TestPage/Unlogin/QPage8";
import QPage9t from "../Pages/TestPage/Unlogin/QPage9";
import QPage10t from "../Pages/TestPage/Unlogin/QPage10";
import QPage11t from "../Pages/TestPage/Unlogin/QPage11";
import QPage12t from "../Pages/TestPage/Unlogin/QPage12";
import AgreePaget from "../Pages/TestPage/Unlogin/AgreePage";
import Result_successt from "../Pages/TestPage/Unlogin/result_success";
import Result_failt from "../Pages/TestPage/Unlogin/result_fail";

import { FormProvider } from "../Pages/RegisterPage/FormContext";
import Page1 from "../Pages/RegisterPage/Page1";
import Page2 from "../Pages/RegisterPage/Page2";
import Page3 from "../Pages/RegisterPage/Page3";
import Page4 from "../Pages/RegisterPage/Page4";
import Page5 from "../Pages/RegisterPage/Page5";
import { AppProvider } from "../Pages/TestPage/Context";
import { AppProvider2 } from "../Pages/TestPage/Unlogin/Context";

function Router() {
    return (
        <FormProvider>
            <AppProvider>
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
                    /> 
                    <Route
                        path="/r_page5"
                        element={<PrivateRoute element={<Page5 />} />}
                    />
                    {/*비로그인 검진 */}
                    
                    <Route
                        path="/t_alert"
                        element={<PublicRoute element={<AlertPaget />} />}
                    />
                    <Route
                        path="/t_start"
                        element={<PublicRoute element={<StartPaget />} />}
                    />
                    <Route
                        path="/t_1"
                        element={<PublicRoute element={<QPage1t />} />}
                    />
                    <Route
                        path="/t_2"
                        element={<PublicRoute element={<QPage2t />} />}
                    />
                    <Route
                        path="/t_3"
                        element={<PublicRoute element={<QPage3t />} />}
                    />
                    <Route
                        path="/t_4"
                        element={<PublicRoute element={<QPage4t />} />}
                    />
                    <Route
                        path="/t_5"
                        element={<PublicRoute element={<QPage5t />} />}
                    />
                    <Route
                        path="/t_6"
                        element={<PublicRoute element={<QPage6t />} />}
                    />
                    <Route
                        path="/t_7"
                        element={<PublicRoute element={<QPage7t />} />}
                    />
                    <Route
                        path="/t_8"
                        element={<PublicRoute element={<QPage8t />} />}
                    />
                    <Route
                        path="/t_9"
                        element={<PublicRoute element={<QPage9t />} />}
                    />
                    <Route
                        path="/t_10"
                        element={<PublicRoute element={<QPage10t />} />}
                    />
                    <Route
                        path="/t_11"
                        element={<PublicRoute element={<QPage11t />} />}
                    />
                    <Route
                        path="/t_12"
                        element={<PublicRoute element={<QPage12t />} />}
                    />
                    <Route
                        path="/t_agree"
                        element={<PublicRoute element={<AgreePaget />} />}
                    />
                    <Route
                        path="/t_success"
                        element={<PublicRoute element={<Result_successt />} />}
                    />
                    <Route
                    path="/t_fail"
                    element={<PublicRoute element={<Result_failt />} />}
                    />
                    {/*로그인 후 검진 */}
                    <Route
                        path="/test_alert"
                        element={<PrivateRoute element={<AlertPage />} />}
                    />
                    <Route
                        path="/test_start"
                        element={<PrivateRoute element={<StartPage />} />}
                    />
                    <Route
                        path="/test_1"
                        element={<PrivateRoute element={<QPage1 />} />}
                    />
                    <Route
                        path="/test_2"
                        element={<PrivateRoute element={<QPage2 />} />}
                    />
                    <Route
                        path="/test_3"
                        element={<PrivateRoute element={<QPage3 />} />}
                    />
                    <Route
                        path="/test_4"
                        element={<PrivateRoute element={<QPage4 />} />}
                    />
                    <Route
                        path="/test_5"
                        element={<PrivateRoute element={<QPage5 />} />}
                    />
                    <Route
                        path="/test_6"
                        element={<PrivateRoute element={<QPage6 />} />}
                    />
                    <Route
                        path="/test_7"
                        element={<PrivateRoute element={<QPage7 />} />}
                    />
                    <Route
                        path="/test_8"
                        element={<PrivateRoute element={<QPage8 />} />}
                    />
                    <Route
                        path="/test_9"
                        element={<PrivateRoute element={<QPage9 />} />}
                    />
                    <Route
                        path="/test_10"
                        element={<PrivateRoute element={<QPage10 />} />}
                    />
                    <Route
                        path="/test_11"
                        element={<PrivateRoute element={<QPage11 />} />}
                    />
                    <Route
                        path="/test_12"
                        element={<PrivateRoute element={<QPage12 />} />}
                    />
                    <Route
                        path="/test_agree"
                        element={<PrivateRoute element={<AgreePage />} />}
                    />
                    <Route
                        path="/test_success"
                        element={<PrivateRoute element={<Result_success />} />}
                    />
                    <Route
                    path="/test_fail"
                    element={<PrivateRoute element={<Result_fail />} />}
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
                    </Route>
                    <Route
                        path="/show/:challenge_id"
                        element={<PrivateRoute element={<ShowPage />} />}
                    />
                    <Route
                        path="/share"
                        element={<PrivateRoute element={<SharePage />} />}
                    />
                </Route>
            </Routes>
            </AppProvider>
        </FormProvider>
    );
}

export default Router;
