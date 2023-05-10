import styled from 'styled-components';
import Image from 'next/image';

// box for image avatar that is a circle
export const Avatar = styled(Image)`
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #000;
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: center;
`;
