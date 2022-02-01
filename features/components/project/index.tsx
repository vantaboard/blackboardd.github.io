import { Box } from '@mui/material';
import Item, { IItemProps } from './item';
import Showcase, { IShowcaseProps } from './showcase';

type IProjectProps = IItemProps & IShowcaseProps;

export const Project: (props: IProjectProps) => JSX.Element = (
  props: IProjectProps
) => {
  const { heading, text, img, date, format } = props;

  return (
    <Box>
      <Showcase date={date} format={format}>
        <Item heading={heading} text={text} img={img} />
      </Showcase>
    </Box>
  );
};
