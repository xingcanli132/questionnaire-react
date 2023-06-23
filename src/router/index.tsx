import React from "react";
import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import QuestionLayout from "../layouts/QuestionLayout";
import ManageLayout from "../layouts/ManageLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star";
import Edit from "../pages/question/Edit";
import Statistics from "../pages/question/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "register",
                element: <Register/>,
            },
            {
                path: "/manage",
                element: <ManageLayout/>,
                children: [
                    {
                        path: "list",
                        element: <List/>,
                    },
                    {
                        path: "trash",
                        element: <Trash/>,
                    },
                    {
                        path: "star",
                        element: <Star/>,
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound/>,
            }
        ]
    },
    {
        path: "/question",
        element: <QuestionLayout/>,
        children: [
            {
                path: "edit/:id",
                element: <Edit/>,
            },
            {
                path: "statistics/:id",
                element: <Statistics/>,
            }
        ]
    },
])

export default router;

// 常用的路由常量
export const HOME_PATH = "/";
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";
export const MANAGE_INDEX_PATH = "/manage/list";