import { startCase } from 'lodash/fp';

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

export const formatDate = (from: string, to?: string) => {
    const year = from.slice(0, 4);
    const month = Number(from.slice(5, 7));

    let toString = '';

    if (to) {
        const toYear = to.slice(0, 4);
        const toMonth = Number(to.slice(5, 7));

        toString = ` - ${startCase(months[toMonth - 1])}, ${toYear} `;
    }

    return `${startCase(months[month - 1])}, ${year}${toString}`;
};
