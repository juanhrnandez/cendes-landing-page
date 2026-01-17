import Link from 'next/link';

export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    href,
    onClick,
    className = '',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95";

    const variants = {
        primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-lg hover:shadow-xl",
        secondary: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
        accent: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] shadow-lg hover:shadow-xl",
        large: "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white hover:shadow-2xl shadow-xl text-lg md:text-xl"
    };

    const sizes = {
        small: "px-6 py-2 text-sm",
        medium: "px-8 py-3 text-base",
        large: "px-12 py-4 text-lg",
        xlarge: "px-16 py-6 text-xl md:text-2xl"
    };

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClasses} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={buttonClasses} {...props}>
            {children}
        </button>
    );
}
