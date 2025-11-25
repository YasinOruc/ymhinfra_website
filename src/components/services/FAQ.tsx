
import Container from '../ui/Container';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Voeren jullie projecten in heel Nederland uit?',
        answer:
            'Ja. YMH Infra is landelijk inzetbaar voor glasvezel- en civiele infraprojecten. In de praktijk werken we veel in stedelijke en dichtbevolkte gebieden, waar goede afstemming met omgeving en planning extra belangrijk is. Bij grotere trajecten stemmen we vooraf samen af welke regio\'s, fasering en doorlooptijd haalbaar zijn.',
    },
    {
        question: 'Voor wat voor opdrachtgevers werken jullie vooral?',
        answer:
            'Wij werken voornamelijk als uitvoerende civiele partner voor hoofdaannemers, telecombedrijven en netbeheerders. Daarbij sluiten we aan op bestaande projectstructuren, tekeningen en werkafspraken. In sommige gevallen voeren we ook werk uit voor gemeenten of vastgoedeigenaren, altijd in nauwe afstemming met de verantwoordelijke projectorganisatie.',
    },
    {
        question: 'Hoe borgen jullie veiligheid en kwaliteit op de projectlocatie?',
        answer:
            'Veiligheid en kwaliteit zijn vaste onderdelen van onze werkwijze. Onze ploegen werken met actuele VCA-certificering, gekeurd materieel en duidelijke werkinstructies. We houden rekening met KLIC-/WIBON-voorschriften, lokale regels en afspraken met opdrachtgever en gemeente. Tijdens de uitvoering controleren we regelmatig herstel en werkwijze, zodat het werk veilig, netjes en volgens afspraak wordt opgeleverd.',
    },
    {
        question: 'Kunnen jullie opschalen naar meerdere ploegen bij grotere projecten?',
        answer:
            'Ja. YMH Infra kan, afhankelijk van de scope, meerdere ploegen inzetten binnen één project of tracé. We spreken vooraf af welke capaciteit nodig is, hoeveel ploegen wanneer beschikbaar zijn en hoe we de fasering afstemmen op de planning van de hoofdaannemer. Zo blijft de voortgang voorspelbaar, ook als de werkdruk toeneemt.',
    },
    {
        question: 'Hoe ziet het eerste contact en de start van een project eruit?',
        answer:
            'Na uw contactaanvraag plannen we een intake in waarin we tracé, scope, planning, risico\'s en omgeving bespreken. Op basis daarvan doen we een voorstel voor aanpak, capaciteit en doorlooptijd. Na akkoord stemmen we detailplanning en werkvoorbereiding af met uw uitvoerder en werkvoorbereiding, zodat onze ploegen gestructureerd kunnen starten op de projectlocatie.',
    },
];

export default function FAQ() {
    return (
        <div className="bg-white">
            <Container className="py-24 sm:py-32 lg:py-40">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Veelgestelde vragen
                    </h2>
                    <dl className="mt-16 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <Plus aria-hidden="true" className="size-6 group-data-open:hidden" />
                                            <Minus aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </Container>
        </div>
    );
}
