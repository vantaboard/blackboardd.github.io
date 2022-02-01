import { Box, Typography } from '@mui/material';
import { ImgWrapper, ItemHeader, ItemWrapper } from '../../../styles/project';

export interface IItemProps {
  heading: JSX.Element;
  text: JSX.Element;
  img: JSX.Element;
}

export const Item: (props: IItemProps) => JSX.Element = (props: IItemProps) => {
  const { heading, text, img } = props;

  return (
    <div>
      <ItemWrapper>
        <Box>
          <ItemHeader>{heading}</ItemHeader>
          <Typography>{text}</Typography>
        </Box>
        <ImgWrapper>{img}</ImgWrapper>
      </ItemWrapper>
    </div>
  );
};

export default Item;
