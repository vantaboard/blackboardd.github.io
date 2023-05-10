import styled from 'styled-components';

export const ShowcaseWrapper = styled.div`
    transition: margin-top 0.2s ease-in-out;
    transition: margin-left 0.2s ease-in-out;

    padding-left: 1.5rem;
    padding-bottom: 1.85rem;
    border-left: 1px solid #beb4b4;

    &:before {
        transition: top 0.2s ease-in-out;

        content: '';
        left: -32px;
        position: relative; /*makes left effective*/
        display: table-cell;
        top: 16px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid #949494;
        background-color: #fff;
    }

    @media (min-width: 1500px) {
        padding-top: 2rem;
        margin-top: 3.5rem;
        margin-left: 3.5rem;
        &:before {
            top: 100px;
        }
    }
`;

export const ImgWrapper = styled.div`
    display: flex;

    -webkit-mask-image: linear-gradient(to top, transparent 2%, black 5%);
    mask-image: linear-gradient(to top, transparent 2%, black 5%);

    @media (max-width: 1500px) {
        margin-bottom: -3rem;
    }
    @media (min-width: 1500px) {
        margin-top: -3rem;
    }
    padding-left: calc(1.5rem + (25vw - 768px) * 0.25);
    padding-right: 0.5rem;
`;

export const ItemHeader = styled.div`
    display: flex;

    transition: text-align 0.2s ease-in-out;
    transition: font-size 0.2s ease-in-out;
    transition: margin-top 0.2s ease-in-out;
    transition: margin-bottom 0.2s ease-in-out;

    color: #575757;
    font-weight: bold;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
    margin-left: -0.45rem;

    @media (min-width: 1500px) {
        text-align: center;
        font-size: 1.5rem;
        margin-top: -9rem;
        margin-bottom: 1rem;
    }
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ProjectWrapper = styled.div`
    display: flex;
    padding-left: 200px;
    padding-right: 150px;
`;

export const ShowcaseHeader = styled.div`
    display: flex;
    justify-content: center;

    transition: margin-top 0.2s ease-in-out;
    transition: margin-left 0.2s ease-in-out;

    color: #949494;
    font-weight: bold;
    font-size: 0.85rem;
    text-transform: uppercase;
    padding-bottom: 0.5rem;

    @media (min-width: 1500px) {
        margin-top: 2rem;
        margin-left: -100rem;
    }
`;
