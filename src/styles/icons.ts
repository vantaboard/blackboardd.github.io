import styled from 'styled-components';

export const IconButton = styled.button`
    /* remove default button styles */
    background: none;
    border: none;
    cursor: pointer;
    width: 40px;
    outline: inherit;
    padding-top: 1.5rem;
    font-size: 1.5rem;
    color: #ff6aff;
`;

export const IconRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;
`;
