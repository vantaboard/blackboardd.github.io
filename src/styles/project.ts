import styled from 'styled-components';
import { Card } from './card';
import Link from 'next/link';

export const ShowcaseWrapper = styled.div`
    display: flex;

    line-height: 1.5;
    
    transition: margin-top 0.2s ease-in-out;
    transition: margin-left 0.2s ease-in-out;

    align-items: center;

    padding-left: 1.5rem;
    padding-top: 1.85rem;
    padding-bottom: 1.85rem;
    border-left: 1px solid #beb4b4;

    @media (max-width: 1500px) {
        margin-top: 1rem;
        padding-left: unset;
        border-left: none;
    }
`;

export const PreviewWrapper = styled(Link)`
    display: flex;

    color: #000;
    text-decoration: none;
    justify-content: center;
    align-items: center;

    @media (min-width: 1500px) {
        min-width: 400px;
    }
`;

export const ImgWrapper = styled.div`
    -webkit-mask-image: linear-gradient(to top, transparent 2%, black 5%);
    mask-image: linear-gradient(to top, transparent 2%, black 5%);
`;

export const ItemRole = styled.div`
    font-weight: bold;
`;

export const ItemTitle = styled.div`
    font-size: 1.25rem;
    padding-left: 20px;
    display: flex;
    line-height: 1.5;
    width: 100%;
    justify-content: center;
    flex-direction: column;
`;

export const ItemLink = styled.div`
    font-size: 1.25rem;
    color: blue;
    text-decoration: underline;
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 1.25rem;
`;

export const ProjectWrapper = styled(Card)`
    display: flex;
    flex-direction: row;
    min-height: 200px;
    word-wrap: break-all;

    @media (max-width: 1500px) {
        margin-left: -3px;
        min-width: 300px;
        flex-direction: column;
    }
`;

export const ShowcaseDate = styled.div`
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
