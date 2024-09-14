import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RuoterUi } from "./routerUi";
import { Login } from "../layouts/login";
import { RouterDocu } from "./routerDocu";
import { BadRoute } from "../layouts/badroute";


export function RouterMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<RuoterUi />} />
                <Route path="login" element={<Login />} />
                <Route path="badroute" element={<BadRoute />} />
                <Route path="/documentation/*" element={<RouterDocu />}/>
            </Routes>
        </BrowserRouter>
    )
}