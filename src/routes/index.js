import React, {Suspense, lazy} from "react";
import {Navigate, useRoutes, useLocation} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
    const {pathname} = useLocation();

    return (
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: "auth",
            children: [
                {
                    path: "login",
                    element: (
                        <GuestGuard>
                            <Login/>
                        </GuestGuard>
                    ),
                },
            ],
        },
        {
            path: "/",
            element: <AuthGuard><MainLayout/></AuthGuard>,
            children: [
                {element: <MainDashboard/>, index: true},
                {path: "article-editor", element: <ArticleEditor/>},
                {path: "article/:id", element: <ArticleDetails/>},
                {path: "article-manager", element: <ArticleManager/>},
                {path: "categories", element: <CategoryManager/>},
            ],
        },
    ])
}

const Login = Loadable(lazy(() => import('../views/auth/Login')))
const MainDashboard = Loadable(lazy(() => import('../views/dashboard/MainDashboard')))
const ArticleEditor = Loadable(lazy(() => import('../views/dashboard/ArticleEditor')))
const ArticleManager = Loadable(lazy(() => import('../views/dashboard/ArticleManager')))
const CategoryManager = Loadable(lazy(() => import('../views/dashboard/CategoryManager')))
const ArticleDetails = Loadable(lazy(() => import('../views/dashboard/ArticleDetails')))