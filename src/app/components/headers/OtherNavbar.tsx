import { Container, Stack, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export function OtherNavbar(){
    const authMemeber = null;
    return <div className="other-navbar">
    <Container className="navbar-container">
        <Stack className="menu">
            <Box>
                <NavLink to={"/"}>
                    <img className="brand-logo" src="/icons/burak.svg"/>
                </NavLink>
            </Box>
            <Stack className="links">
                <Box className = {"hover-line"}>
                    <NavLink to={"/"} >Home</NavLink>
                </Box>
                <Box className = {"hover-line"}>
                    <NavLink to={"/products"} activeClassName={"underline"}>Products</NavLink>
                </Box>
                {authMemeber ?
                 (<Box className = {"hover-line"}>
                    <NavLink to={"/orders"} activeClassName={"underline"}>Orders</NavLink>
                </Box>) : null}
                
                {authMemeber ?
                 (<Box className = {"hover-line"}>
                    <NavLink to={"/member-page"} activeClassName={"underline"}>My Page</NavLink>
                </Box>) : null}
                <Box className = {"hover-line"}>
                    <NavLink to={"/help"} activeClassName={"underline"}>Help</NavLink>
                </Box>
                <Basket/>
                {!authMemeber ? 
                    (<Box><Button variant="contained" className="login-button">Login</Button></Box>) : 
                    (<img className="user-avatar" src={"/icons/default-user.svg"} aria-haspopup={"true"} />)}
            </Stack>
        </Stack>
        
    </Container>
</div>
}