
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Equipment() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <p className="text-sm font-bold uppercase tracking-wide text-brand-800">
                        MATERIEEL & UITRUSTING
                    </p>
                    <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Eigen, modern en goed onderhouden materieel
                    </h2>
                    <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                        <div>
                            <p>
                                YMH Infra werkt met eigen materieel, van graafmachines tot pompwagens en
                                minigravers. Alles is goed onderhouden, VCA-gekeurd en onze mensen zijn
                                geschoold om ermee te werken. Zo kunnen we snel schakelen op locatie en hoeven
                                we niet steeds materieel in te huren of te wachten.
                            </p>
                            <p className="mt-8">
                                Daarnaast hebben we uitrusting voor plaatsbepaling, veiligheidsmateriaal en
                                uiteenlopend handgereedschap waarmee we alle gangbare situaties rondom
                                sleufaanleg en raketboringen zelfstandig aankunnen.
                            </p>
                        </div>
                        <div>
                            <p>
                                Omdat we het materieel in eigendom hebben, kan de planning flexibel bepaald
                                worden. Een extra ploeg inzetten, een machine langer aan het werk houden of
                                direct bijstaan na een technisch probleem: dat regelen we intern zonder grote
                                afhankelijkheid van derden. Dit draagt bij aan continuïteit en voorspelbaarheid
                                binnen uw project.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex">
                        <Button variant="primary" href="/contact">
                            Bespreek uw project
                        </Button>
                    </div>
                </div>
            </Container>

            <div className="mt-16 sm:mt-24 xl:mx-auto xl:max-w-7xl xl:px-8">
                <img
                    src="/images/equipment/equipment2.jpeg"
                    alt=""
                    className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
                />
            </div>
        </div>
    );
}
