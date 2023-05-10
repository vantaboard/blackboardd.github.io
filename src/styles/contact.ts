import styled from 'styled-components';
import { Avatar } from './avatar';
import { Card } from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledAvatar = styled(Avatar)`
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
    width: 10rem;
    height: 10rem;
`;

export const AvatarBox = styled.div`
  &:after {
    content: '';
    display: block;
    position: relative;
    margin: auto;
    width: 40px;
    height: 2px;
    background-color: #b1b1b1;
  }
  @media (max-width: 1000px) {
    &:after {
      margin-top: 3rem;
    }
  }
  @media (min-width: 1000px) {
    // partial border to the left side
    &:after {
      margin-right: -3rem;
      top: -5.8rem;
      width: 2px;
      height: 80px;
      background-color: #b1b1b1;
  }
`;

export const ContactCard = styled(Card)`
    transition: padding 0.2s ease-in-out;

    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;

    @media (min-width: 1000px) {
        padding: 1rem 3rem;
        padding-top: 2.75rem;
        padding-bottom: 0;
        flex-direction: row;
    }

    @media (max-width: 1000px) {
        padding: 4rem 3rem;
        flex-direction: column;
    }
`;

export const InfoBox = styled.div`
    transition: padding 0.2s ease-in-out;

    @media (min-width: 1000px) {
        padding-left: 6rem;
        padding-bottom: 4.5rem;
    }

    @media (max-width: 1000px) {
        padding-top: 3rem;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const ContactIcon = styled(FontAwesomeIcon)`
    margin-top: 20px;
    padding-right: 20px;
`;
