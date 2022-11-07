export const backgroundColor = (color: string) => {
    switch (color) {
        case 'white':
            return 'bg-white ';
        case 'black':
            return 'bg-black ';
        case 'primary':
            return 'bg-[#25D366] ';
        case 'red':
            return 'bg-[#BD081C] ';
        case 'blue':
            return 'bg-[#0099FF] ';
        default:
            return ` bg-[${color}] `;
    }
};

export function textColor(color: string): string {
    if (color === 'white') {
        return 'text-black';
    } else {
        return 'text-white';
    }
}

export function borderColor(color: string): string {
    if (color === 'white') {
        return 'border-black';
    } else {
        return '';
    }
}