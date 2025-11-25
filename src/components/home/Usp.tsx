
import { ShieldCheck, CalendarClock, Wrench } from 'lucide-react';

const features = [
    {
        name: 'Veiligheid',
        description:
            'VCA-gecertificeerd team, PBM\'s geborgd en dagelijkse checks op locatie. Veilig werken is standaard, niet optioneel.',
        icon: ShieldCheck,
    },
    {
        name: 'Planning',
        description:
            'Duidelijke fasering, strakke afstemming met uitvoerder en korte lijnen tijdens het werk. Zo blijft de planning realistisch en haalbaar.',
        icon: CalendarClock,
    },
    {
        name: 'Vakmanschap',
        description:
            'Ervaren ploegen met modern, gekeurd materieel en oog voor de omgeving. Netjes werken en goed herstellen horen er standaard bij.',
        icon: Wrench,
    },
];

export default function Usp() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Voorspelbare uitvoering in drie pijlers
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        We maken infraprojecten beheersbaar door vaste afspraken over veiligheid, planning en
                        vakmanschap. Zo weet u van tevoren waar u aan toe bent.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-brand-800">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
