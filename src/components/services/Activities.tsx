
import Container from '../ui/Container';
import { Cable, Drill, Hammer } from 'lucide-react';

const activities = [
    {
        name: 'Tracé & Kabelinfrastructuur.',
        description:
            'Graafwerk en sleufaanleg voor het hoofdtracé. We leggen mantelbuizen en trekken kabels volgens tekening en KLIC-melding, zowel machinaal als handmatig.',
        icon: Cable,
    },
    {
        name: 'Raketboringen & Persingen.',
        description:
            'Het realiseren van raketboringen onder wegen, inritten en kruispunten door. Hierdoor blijft de verharding intact en blijft de weg bereikbaar tijdens het werk.',
        icon: Drill,
    },
    {
        name: 'Bestrating & Herstel.',
        description:
            'Vakkundig dichtstraten van sleuven en herstellen van bermen en groenstroken. We leveren de openbare ruimte op in oorspronkelijke staat, conform CROW-richtlijnen.',
        icon: Hammer,
    },
];

export default function Activities() {
    return (
        <div className="overflow-hidden bg-white pb-24 pt-0 sm:pb-32">
            <Container>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="lg:col-start-1 lg:row-start-1 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-sm font-bold uppercase tracking-wide text-brand-800">
                                KERNACTIVITEITEN
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Dit doen wij binnen uw infraproject
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-700">
                                Wij nemen de volledige civiele verantwoordelijkheid rondom het tracé uit handen.
                                Van voorbereiding tot herstel, in nauwe afstemming met uw uitvoerder.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-full">
                        <img
                            src="/images/fiber/fiber2.jpeg"
                            alt="Diensten foto"
                            className="aspect-square w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover sm:aspect-2/1 lg:aspect-auto lg:absolute lg:inset-0 lg:h-full"
                        />
                    </div>

                    <div className="lg:col-start-1 lg:row-start-2 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <dl className="space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {activities.map((activity) => (
                                    <div key={activity.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <activity.icon
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 size-5 text-brand-800"
                                            />
                                            {activity.name}
                                        </dt>{' '}
                                        <dd className="inline">{activity.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
