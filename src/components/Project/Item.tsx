import { ImgWrapper, ItemHeader, ItemWrapper } from '@/styles';

export interface ItemProps {
    heading: JSX.Element;
    text: JSX.Element;
    img: JSX.Element;
}

export const Item = (props: ItemProps) => {
    const { heading, text, img } = props;

    return (
        <div>
            <ItemWrapper>
                <div style={{ display: 'flex' }}>
                    <ItemHeader>{heading}</ItemHeader>
                    <span>{text}</span>
                </div>
                <ImgWrapper>{img}</ImgWrapper>
            </ItemWrapper>
        </div>
    );
};
