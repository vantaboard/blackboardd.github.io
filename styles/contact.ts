import styled from '@emotion/styled';
import { Avatar, Box, Card } from '@mui/material';

export const StyledAvatar = styled(Avatar)`
  width: 10rem;
  height: 10rem;
`;

export const AvatarBox = styled(Box)`
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
      top: -7rem;
      width: 2px;
      height: 80px;
      background-color: #b1b1b1;
  }
`;

export const ContactCard = styled(Card)`
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

export const InfoBox = styled(Box)`
  @media (min-width: 1000px) {
    padding-left: 6rem;
    padding-bottom: 4.5rem;
  }

  @media (max-width: 1000px) {
    padding-top: 3rem;
  }
`;
