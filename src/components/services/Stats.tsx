
import DecorativeGradient from '../ui/DecorativeGradient';
import Container from '../ui/Container';

const stats = [
    { id: 1, name: 'Projecten succesvol opgeleverd', value: '28' },
    { id: 2, name: 'Glasvezeltracés aangelegd', value: '100+ km' },
    { id: 3, name: 'Veiligheidsincidenten', value: '0' },
];

export default function Stats() {
    return (
        <div className="relative isolate overflow-hidden bg-brand-950 py-24 sm:py-32">
            <DecorativeGradient />
            <Container>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Container>
        </div>
    );
}
