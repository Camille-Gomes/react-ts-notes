import * as React from "react";
import { Navbar, Container } from "react-bootstrap";

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <Navbar fixed="top" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand>
                    React Typescript Bootstrap Notes Application
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;
