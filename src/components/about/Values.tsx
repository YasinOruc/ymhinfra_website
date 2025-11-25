
import { ShieldCheck, Construction, Handshake, Truck } from 'lucide-react';

const values = [
    {
        name: 'Veiligheid als basis',
        description:
            'VCA-gecertificeerd team, PBM\'s geborgd en dagelijkse checks op locatie. Veilig werken is standaard, niet optioneel.',
        icon: ShieldCheck,
    },
    {
        name: 'Vakmanschap in de uitvoering',
        description: 'Ervaren vakmensen die werken volgens tekening. We leveren alles netjes en volledig hersteld op.',
        icon: Construction,
    },
    {
        name: 'Heldere samenwerking',
        description: 'Eén vast aanspreekpunt en korte lijnen. We communiceren helder en komen afspraken na.',
        icon: Handshake,
    },
    {
        name: 'Eigen materieel & beheer',
        description:
            'Met ons eigen wagenpark en materieel zijn we flexibel en onafhankelijk. We garanderen kwaliteit door alles in eigen beheer te houden.',
        icon: Truck,
    },
];

export default function Values() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-brand-800">ONZE KERNWAARDEN</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                        Waar wij voor staan op de bouwplaats
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-700">
                        Onze waarden bepalen hoe we elke dag werken op de bouwplaats, met opdrachtgevers en met
                        de omgeving. Ze zorgen ervoor dat we infraprojecten veilig, voorspelbaar en netjes
                        opleveren.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {values.map((value) => (
                            <div key={value.name} className="relative pl-16">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-brand-800">
                                        <value.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {value.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-600">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
