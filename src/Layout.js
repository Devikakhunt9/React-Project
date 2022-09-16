import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


function Layout(){
    return(<>
    <Header />
    <Link to = "/" class="myHome border-primary btn "><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link>{" "}
    <Link to = "/students" class="btn  border-primary myHome">Get All Student</Link>{"  "}
    <Link to = "/students/add" class="  btn border-primary myHome">Add Student</Link>{"    "}
    <br />
    <Outlet />
    <br/>
    
    <Footer />
    </>)
}

export default Layout;