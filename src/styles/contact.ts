import styled from 'styled-components';
import { Card } from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AvatarBox = styled.div`
    transition: padding 0.1s ease-in-out;

    @media (max-width: 1000px) {
        padding-bottom: 2rem;
    }
`;

export const ContactCard = styled(Card)`
    transition: padding 0.2s ease-in-out;

    display: flex;
    width: 90%;

    max-width: 500px;

    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 100px;

    line-height: 1.5;

    justify-content: center;
    align-items: center;

    @media (max-width: 1500px) {
        margin-left: -3px;
        min-width: 300px;
        flex-direction: column;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const ContactIcon = styled(FontAwesomeIcon)`
    width: 20px;
    padding-right: 10px;
`;
