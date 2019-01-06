import React, {Component} from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    background-color: #FFFFFF;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const StyledHeader = styled.h4`
    color: rgba(0, 0, 0, 0.4);
    margin-left 10px;
`;

class Header extends Component {
    render() {
        const {appName} = this.props;
        console.log(appName)
        return(
            <NavBar>
                <StyledHeader>{appName}</StyledHeader>
            </NavBar>
        );
    }
}

export default Header;