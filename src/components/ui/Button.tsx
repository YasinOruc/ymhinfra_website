

type ButtonBaseProps = {
    variant?: 'primary' | 'secondary' | 'outline';
    children: React.ReactNode;
    className?: string;
};

type ButtonAsButton = ButtonBaseProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        href?: never;
    };

type ButtonAsLink = ButtonBaseProps & {
    href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors";

    const variants = {
        primary: "bg-brand-800 text-white hover:bg-brand-700 focus-visible:outline-brand-800",
        secondary: "bg-white text-brand-800 hover:bg-gray-50 focus-visible:outline-white",
        outline: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-800",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return <a href={href} className={combinedClassName}>{children}</a>;
    }

    return <button className={combinedClassName} {...props}>{children}</button>;
}
