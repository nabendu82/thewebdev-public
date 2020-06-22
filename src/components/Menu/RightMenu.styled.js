import styled from 'styled-components';

export const StyledRightMenu = styled.nav`
    display: block;
    background: #add8e6;
    height: 100%;
    overflow-y: scroll;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(150%)'};
    padding: 2rem;
    position: fixed;
    top: 9%;
    right: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    width: 85%;
`;

export default StyledRightMenu;