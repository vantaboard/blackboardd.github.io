import { useEffect, useState } from 'react';
import { IconBox } from '@/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowDownLong,
    faArrowUpLong,
} from '@fortawesome/free-solid-svg-icons';

export const ScrollTo: () => JSX.Element = () => {
    const [arrow, setArrow] = useState(
        <FontAwesomeIcon icon={faArrowDownLong} />
    );

    useEffect(() => {
        setArrow(
            window.pageYOffset ? (
                <FontAwesomeIcon icon={faArrowUpLong} />
            ) : (
                <FontAwesomeIcon icon={faArrowDownLong} />
            )
        );
    }, []);

    const scrollToTop = () => {
        window.pageYOffset
            ? window.scrollTo(0, 0)
            : window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <button onClick={scrollToTop}>
            <IconBox>{arrow}</IconBox>
        </button>
    );
};
