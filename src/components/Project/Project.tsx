import { formatDate } from '@/helpers';
import {
    ImgWrapper,
    ItemLink,
    ItemRole,
    ItemTitle,
    ItemWrapper,
    PreviewWrapper,
    ProjectWrapper,
    ShowcaseWrapper,
} from '@/styles';
import { kebabCase } from 'lodash/fp';
import Image from 'next/image';

interface ProjectProps {
    title: string;
    url: string;
    role: string;
    description: string;
    width: string;
    height: string;
    src: string;
    from: string;
    to?: string;
}

export const Project = (props: ProjectProps) => {
    const { title, url, role, description, width, height, src, from, to } =
        props;

    const text = description.split('\n').map((str, i) => (
        <span key={`project-${i}`}>
            {str}
            <br />
        </span>
    ));

    return (
        <ProjectWrapper key={kebabCase(title)}>
            <PreviewWrapper href={url} target="_blank">
                <ImgWrapper>
                <Image
                    width={width as number | `${number}`}
                    height={height as number | `${number}`}
                    src={src}
                    alt={title}
                />
                </ImgWrapper>
                <ItemTitle>
                    <ItemLink>
                        {title}
                    </ItemLink>
                    {formatDate(from, to)}
                    <ItemRole>{role}</ItemRole>
                </ItemTitle>
            </PreviewWrapper>
            <ShowcaseWrapper>
                <ItemWrapper>
                    <div style={{ display: 'flex' }}>
                        <span>{text}</span>
                    </div>
                </ItemWrapper>
            </ShowcaseWrapper>
        </ProjectWrapper>
    );
};
