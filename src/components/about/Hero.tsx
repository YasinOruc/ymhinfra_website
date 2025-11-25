const images = [
    { src: '/images/team/hasancetin_omersener.jpeg', alt: '', scale: 'scale-100' },
    { src: '/images/equipment/equipment1.jpeg', alt: '', scale: 'scale-[2.0] origin-[80%_50%]' },
    { src: '/images/fiber/fiber2.jpeg', alt: '', scale: 'scale-100' },
    { src: '/images/fiber/fiber3.jpeg', alt: '', scale: 'scale-100' },
];

const stats = [
    { label: 'Vakspecialisten', value: '20', suffix: '+' },
    { label: 'Oprichting', value: '2017', suffix: '' },
    { label: 'Projecten succesvol afgerond', value: '28', suffix: '' },
    { label: 'Landelijke dekking', value: '100', suffix: '%' },
];

export default function Hero() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <p className="text-sm font-bold uppercase tracking-wide text-brand-800">OVER ONS</p>
                    <h1 className="mt-2 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                        Uw betrouwbare uitvoeringspartner
                    </h1>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700">
                        Vanuit Dordrecht werkt YMH Infra aan diverse telecom- en infratrajecten. Met een vaste
                        kern van specialisten leveren we werk dat veilig, voorspelbaar en volgens afspraak wordt
                        uitgevoerd.
                    </p>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
                            Praktische mentaliteit
                        </h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Wij geloven dat infraprojecten beter kunnen. Geen ruis op de lijn, maar heldere
                            communicatie en doen wat je belooft. YMH Infra is ontstaan vanuit de praktijk, met de
                            overtuiging dat een hoofdaannemer volledig ontzorgd moet worden op civiel gebied.
                        </p>
                        <p className="mt-8 text-base/7 text-gray-600">
                            We realiseren complete trajecten: van graafwerk en mantelbuis tot huisaansluiting en
                            straatwerk. Omdat we werken met eigen, gekeurd materieel en vaste teams, houden we
                            grip op de kwaliteit en de planning. U regelt het grote plaatje, wij regelen de
                            uitvoering buiten.
                        </p>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 ${index === 1 || index === 3 ? '-mt-8 lg:-mt-40' : ''
                                        }`}
                                >
                                    <img src={image.src} alt={image.alt} className={`block size-full object-cover ${image.scale}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-lg:mt-16 lg:col-span-1">
                        <p className="text-base/7 font-semibold text-gray-500">YMH in cijfers</p>
                        <hr className="mt-6 border-t border-gray-200" />
                        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4 ${index === 2 ? 'max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4' : ''
                                        } ${index === 3 ? 'border-none' : ''}`}
                                >
                                    <dt className="text-sm/6 text-gray-600">{stat.label}</dt>
                                    <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900">
                                        <span>{stat.value}</span>
                                        {stat.suffix}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>
            </div>
        </div>
    );
}
