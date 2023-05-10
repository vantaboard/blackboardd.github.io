import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    transition: all 0.2s ease-in-out;

    position: fixed;
    left: 0;
    bottom: 0;
    width: -moz-available;
    width: -webkit-fill-available;
    background: #1c1616;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 2.5em;
    padding-right: 2.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: reverse;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const Text = styled.div`
    transition: all 0.2s ease-in-out;

    color: white;
`;
