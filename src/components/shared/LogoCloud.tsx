

const logos = [
    {
        src: '/images/badges/vca.png',
        alt: 'VCA',
        mobileOrder: 'order-1',
        desktopOrder: 'lg:order-1',
    },
    {
        src: '/images/badges/bam.svg',
        alt: 'BAM',
        mobileOrder: 'order-3',
        desktopOrder: 'lg:order-2',
    },
    {
        src: '/images/badges/gpi.png',
        alt: 'GPI',
        mobileOrder: 'order-2',
        desktopOrder: 'lg:order-3',
    },
];

type Props = {
    bgClass?: string;
};

export default function LogoCloud({ bgClass = 'bg-gray-50' }: Props) {
    return (
        <div className={`${bgClass} py-24`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-10 lg:gap-10">
                    {logos.map((logo) => (
                        <img
                            key={logo.alt}
                            width="158"
                            height="48"
                            src={logo.src}
                            alt={logo.alt}
                            className={`${logo.mobileOrder} ${logo.desktopOrder} max-h-20 w-auto object-contain`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
