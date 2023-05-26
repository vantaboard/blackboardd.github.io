import styled from 'styled-components';
import { Card } from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const AvatarBox = styled.div`
    transition: padding 0.1s ease-in-out;

    @media (max-width: 1000px) {
        padding-bottom: 2rem;
    }
`;

export const ContactCard = styled(Card)`
    transition: padding 0.2s ease-in-out;

    box-shadow: unset;
    border: unset;

    display: flex;

    line-height: 1.5;

    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const ContactButton = styled(Link)`
    display: flex;
    width: fit-content;
    flex-direction: row;
    justify-content: center;
    border: 1px solid rgba(255, 195, 235, 1);
    font-size: 1.2rem !important;
    border-radius: 5px;
    margin: 10px 15px;
    padding: 10px 20px;
    padding-left: 0;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(255, 195, 235, 1), 6px 6px 4px rgba(255, 195, 235, 1);

    /* remove link formatting */
    text-decoration: none;
    color: inherit;

    transition: background-color 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
        background-color: #ffeeff;
        box-shadow: 0 0 0 1px rgba(255, 195, 235, 1), 8px 8px 4px rgba(255, 195, 235, 1);
    }

    &:active {
        border: 1px solid black;
    }

    &:focus {
        border: 1px solid black;
    }
`;

export const ContactIcon = styled(FontAwesomeIcon)`
    width: 20px;
    padding: 10px 10px;
    padding-left: 15px;
    border-right: 1px solid black;
    margin-right: 10px;
`;

export const ContactIconFooter = styled(FontAwesomeIcon)`
    padding-top: 3px;
    padding-right: 12px;
`;

export const ContactFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
