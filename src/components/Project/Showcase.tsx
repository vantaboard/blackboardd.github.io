import { months } from '@/helpers';
import { ShowcaseHeader, ShowcaseWrapper } from '@/styles';

export interface ShowcaseProps {
    children?: JSX.Element;
    date: Date;
    format: string;
}

export const Showcase = (props: ShowcaseProps) => {
    const { date, format, children } = props;
    let dateStr = '';

    if (format === 'MMyyyy') {
        dateStr = `${months[
            date.getMonth()
        ].toUpperCase()}, ${date.getFullYear()}`;
    }

    return (
        <ShowcaseWrapper>
            <ShowcaseHeader>{dateStr}</ShowcaseHeader>
            {children}
        </ShowcaseWrapper>
    );
};
