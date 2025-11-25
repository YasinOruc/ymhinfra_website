

const stats = [
    {
        id: 1,
        title: 'Sinds 2017',
        heading: 'Actief in infra- en glasvezelprojecten',
        description: 'Ervaring met projecten voor telecom- en infrapartners in heel Nederland.',
        bgColor: 'bg-gray-50',
        titleColor: 'text-gray-900',
        headingColor: 'text-gray-900',
        descColor: 'text-gray-600',
        widthClasses: 'sm:w-3/4 sm:max-w-md lg:w-72 lg:max-w-none lg:flex-none',
        gapClass: '',
    },
    {
        id: 2,
        title: 'Landelijke dekking',
        heading: 'Projecten door heel Nederland',
        description: 'Van woonwijken tot industriegebieden, in nauwe afstemming met opdrachtgevers en gemeenten.',
        bgColor: 'bg-black',
        titleColor: 'text-white',
        headingColor: 'text-white',
        descColor: 'text-gray-200',
        widthClasses: 'lg:w-full lg:max-w-sm lg:flex-auto',
        gapClass: 'lg:gap-y-44',
    },
    {
        id: 3,
        title: 'Veilig werken',
        heading: 'VCA & Gekeurd Materieel',
        description: 'Gecertificeerde medewerkers en periodiek gekeurd materieel voor een veilige en nette uitvoering.',
        bgColor: 'bg-brand-800',
        titleColor: 'text-white',
        headingColor: 'text-white',
        descColor: 'text-gray-200',
        widthClasses: 'sm:w-11/12 sm:max-w-xl lg:w-full lg:max-w-none lg:flex-auto',
        gapClass: 'lg:gap-y-28',
    },
];

export default function Stats() {
    return (
        <>
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                <img
                    src="/images/team/teamwork.jpeg"
                    alt=""
                    className="aspect-5/2 w-full object-cover object-[50%_22%] outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
                />
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            We bouwen aan betrouwbare verbindingen
                        </h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Met vaste veiligheidsnormen, eigen materieel en korte lijnen leveren we voorspelbaar
                            werk op elke projectlocatie.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className={`flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl ${stat.bgColor} p-8 sm:flex-row-reverse sm:items-end ${stat.widthClasses} lg:flex-col lg:items-start ${stat.gapClass}`}
                            >
                                <p className={`flex-none text-3xl font-bold tracking-tight ${stat.titleColor}`}>
                                    {stat.title}
                                </p>
                                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                    <p className={`text-lg font-semibold tracking-tight ${stat.headingColor}`}>
                                        {stat.heading}
                                    </p>
                                    <p className={`mt-2 text-base/7 ${stat.descColor}`}>{stat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
