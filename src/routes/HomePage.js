import Button from '@mui/material/Button'
import { Outlet, Link } from "react-router-dom";
// import  NavBar  from "../NavBar"
export default function HomePage(props){
    return (<>
    {/* <AllCards /> */}
    {/* <NavBar /> */}
    <Button variant="contained"><Link style={{textDecoration: 'none', color: 'white'}} to={`../login/`}>Log In</Link></Button>
    </>);
}