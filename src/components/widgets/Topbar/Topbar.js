import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TopbarWrapper = styled.div`
    background-color: #64b5f6;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: middle;
    justify-content: space-around;
`;

const Topbar = () => (
    <TopbarWrapper>
        <Button component={Link} to="/" variant="contained" color="primary">
            Earth
        </Button>
        <Button component={Link} to="/moon" variant="contained" color="primary">
            Moon
        </Button>
        <Button component={Link} to="/mars" variant="contained" color="primary">
            Mars
        </Button>
        <Button component={Link} to="/about" variant="contained" color="primary">
            About
        </Button>
    </TopbarWrapper>
)

Topbar.propTypes = {

}

export default Topbar;