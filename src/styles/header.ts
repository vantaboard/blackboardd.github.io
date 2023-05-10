import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    border-radius: 1rem;
    py: 1.5em;
    backgroundcolor: rgba(255, 255, 255, 0.8);
    boxshadow: 1px 2px 0px 2px rgba(0, 0, 0, 0.1);
    zindex: 5;
    px: 4em;
    width: auto;
    position: fixed;
    display: flex;
    justifycontent: space-evenly;
`;

export const HeaderBox = styled.div`
    display: flex;
    transition: margin-top 0.2s ease-in-out;
    transition: margin-right 0.2s ease-in-out;

    @media (max-width: 1000px) {
        justify-content: center;
        margin-right: 0;
        margin-top: 0.5rem;
    }

    @media (min-width: 1000px) {
        justify-content: center;
        margin-right: 0;
        margin-top: 1.5rem;
    }

    @media (min-width: 1800px) {
        justify-content: right;
        margin-right: -16rem;
        margin-top: 1.5rem;
    }
    margin-bottom: 10rem;
`;

export const HeaderButton = styled.button`
    color: #000;
    width: fit-content;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 6.5px;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #313131;
    }
`;
