

interface SectionLabelProps {
    children: React.ReactNode;
    variant?: 'brand' | 'white';
}

export default function SectionLabel({ children, variant = 'brand' }: SectionLabelProps) {
    const colorClass = variant === 'white' ? 'text-white' : 'text-brand-800';

    return (
        <p className={`text-sm font-bold uppercase tracking-wide ${colorClass}`}>
            {children}
        </p>
    );
}
