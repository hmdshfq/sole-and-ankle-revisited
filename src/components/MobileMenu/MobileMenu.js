/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <Content>
                <CloseButton onClick={onDismiss}>
                    <Icon id='close'></Icon>
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </CloseButton>
                <Filler />
                <Nav>
                    <NavLink href='/sale'>Sale</NavLink>
                    <NavLink href='/new'>New&nbsp;Releases</NavLink>
                    <NavLink href='/men'>Men</NavLink>
                    <NavLink href='/women'>Women</NavLink>
                    <NavLink href='/kids'>Kids</NavLink>
                    <NavLink href='/collections'>Collections</NavLink>
                </Nav>
                <Footer>
                    <FooterLink href='/terms'>Terms and Conditions</FooterLink>
                    <FooterLink href='/privacy'>Privacy Policy</FooterLink>
                    <FooterLink href='/contact'>Contact Us</FooterLink>
                </Footer>
            </Content>
        </Overlay>
    );
};

const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: hsl(220 5% 40% / 0.8);
    display: flex;
    justify-content: flex-end;
`;

const Content = styled(DialogContent)`
    background: white;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const CloseButton = styled(UnstyledButton)`
    position: absolute;
    top: 16px;
    right: 0;
    padding: 16px;
`;
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
`;
const NavLink = styled.a`
    text-transform: uppercase;
    color: ${COLORS.gray[900]};
    font-size: 1.125rem;
    font-weight: ${WEIGHTS.medium};
    text-decoration: none;

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;
const Footer = styled.footer`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 32px;
    gap: 6px;
`;
const FooterLink = styled.a`
    color: ${COLORS.gray[700]};
    text-decoration: none;
    font-size: 0.875rem;
`;
const Filler = styled.div`
    flex: 1;
`;
export default MobileMenu;
