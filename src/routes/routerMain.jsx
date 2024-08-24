import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RuoterUi } from "./routerUi";
import { Login } from "../layouts/login";


export function RouterMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<RuoterUi />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}