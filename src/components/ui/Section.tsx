

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
    return (
        <section className={`py-24 sm:py-32 ${className}`}>
            {children}
        </section>
    );
}
