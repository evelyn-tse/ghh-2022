import Button from '@mui/material/Button'
import { Outlet, Link } from "react-router-dom";
export default function HomePage(props){
    return (<>
    <div>HomePage</div>
    <Button variant="contained"><Link to={`../login/`}>Log In</Link></Button>
    </>);
}