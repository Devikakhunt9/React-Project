import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Link to = "/">Home</Link>{" "}
        <Link to = "/getAll">Matches</Link>{" "}
        <Link to = "/getAll/add">Add Match/es</Link>
        <Outlet />
        </>
    )
}

export default Layout;