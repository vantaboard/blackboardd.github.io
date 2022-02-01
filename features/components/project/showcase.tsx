import { ShowcaseHeader, Wrapper } from '../../../styles/project';

export interface IShowcaseProps {
  children: JSX.Element;
  date: Date;
  format: string;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Showcase: (props: IShowcaseProps) => JSX.Element = (
  props: IShowcaseProps
) => {
  const { date, format, children } = props;
  let dateStr = '';

  if (format === 'MMyyyy') {
    dateStr = `${months[date.getMonth()].toUpperCase()}, ${date.getFullYear()}`;
  }

  return (
    <Wrapper>
      <ShowcaseHeader>{dateStr}</ShowcaseHeader>
      {children}
    </Wrapper>
  );
};

export default Showcase;
