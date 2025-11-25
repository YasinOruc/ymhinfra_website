

interface LinkProps {
    href: string;
    children: React.ReactNode;
    variant?: 'default' | 'arrow';
    className?: string;
}

export default function Link({ href, children, variant = 'default', className = '' }: LinkProps) {
    const baseStyles = 'text-sm/6 font-semibold text-gray-900';
    const combinedClassName = `${baseStyles} ${className}`;

    if (variant === 'arrow') {
        return (
            <a href={href} className={combinedClassName}>
                {children} <span aria-hidden="true">→</span>
            </a>
        );
    }

    return (
        <a href={href} className={combinedClassName}>
            {children}
        </a>
    );
}
