import styled from 'styled-components';

export const IconButton = styled.button`
    /* remove default button styles */
    background: none;
    border: none;
    cursor: pointer;
    outline: inherit;
    height: 25px;
    min-width: 35px;
    color: #ff6aff;
`;

export const IconRow = styled.div`
    display: flex;
    width: 100%;
    padding-top: 1.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
