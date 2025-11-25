

interface SectionHeadingProps {
    children: React.ReactNode;
    variant?: 'default' | 'white';
    as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeading({
    children,
    variant = 'default',
    as: Component = 'h2'
}: SectionHeadingProps) {
    const colorClass = variant === 'white' ? 'text-white' : 'text-gray-900';

    return (
        <Component className={`text-4xl font-semibold tracking-tight text-pretty ${colorClass} sm:text-5xl`}>
            {children}
        </Component>
    );
}
