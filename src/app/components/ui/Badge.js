import { cn } from '@/lib/utils';

const Badge = ({ children , className }) => {
    return (
        <span className = {cn('w-fit font-display border border-neutral-200 dark:border-neutral-800 p-1 px-2 rounded-md transition-all' , className)}>{ children }</span>
    );
};

export default Badge;
