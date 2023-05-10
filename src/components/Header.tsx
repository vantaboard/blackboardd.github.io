import { HeaderButton, HeaderWrapper } from '@/styles';
import Link from 'next/link';

export const Header = () => {
    const headerButtons: JSX.Element[] = [];

    ['home', 'projects', 'contact'].forEach((_) => {
        const href = `#${_}`;
        const content = _.charAt(0).toUpperCase() + _.slice(1);

        headerButtons.push(
            <HeaderButton>
                <Link href={href}>{content}</Link>
            </HeaderButton>
        );
    });

    return <HeaderWrapper>{headerButtons}</HeaderWrapper>;
};
