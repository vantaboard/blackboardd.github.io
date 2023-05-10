import styled from 'styled-components';
import Image from 'next/image';

// box for image avatar that is a circle
export const Avatar = styled(Image)`
    border-radius: 50%;
    box-shadow: 0 0 5px 9px rgb(255, 195, 235);
    object-fit: cover;
    object-position: center;
`;
