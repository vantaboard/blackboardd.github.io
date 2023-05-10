import { ProjectWrapper } from '@/styles';
import { Item, ItemProps } from './Item';
import { Showcase, ShowcaseProps } from './Showcase';

export const Project = (props: ItemProps & ShowcaseProps) => {
    const { heading, text, img, date, format } = props;

    return (
        <ProjectWrapper>
            <Showcase date={date} format={format}>
                <Item heading={heading} text={text} img={img} />
            </Showcase>
        </ProjectWrapper>
    );
};
