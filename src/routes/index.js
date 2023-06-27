import { v4 as uuidv4 } from "uuid"
import Home from "../pages/Home"
import Marketplace from "../pages/Marketplace"
import Signin from "../pages/Signin"
export const publicRoute = [
    {
        id: uuidv4(),
        path: "/",
        component: Home
    },
    {
        id: uuidv4(),
        path: "/marketplace",
        component: Marketplace
    },
    {
        id: uuidv4(),
        path: "/createAccount",
        component: Signin
    },
]