
import { Container } from "../styles/IndoorFarmSetup.style";

import { NavbarComponent } from "../components/Navbar.component";
import { IndoorSetupBodyContainer } from "../components/IndoorSetup.Body.component";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";

export const IndoorFarmSetup = () => {

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <>
            <NavbarComponent />
            <Container className="navi" role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">

                    <Link underline="hover" color="inherit" to="/">Home</Link>
                    <Typography color="text.primary">IndoorFarmSetup</Typography>
                </Breadcrumbs>
            </Container>
            <IndoorSetupBodyContainer />
        </>
    )

}