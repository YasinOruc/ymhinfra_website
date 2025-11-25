
import Button from '../ui/Button';
import DecorativeGradient from '../ui/DecorativeGradient';

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-brand-950 px-6 py-24 sm:py-32 lg:px-8">
            <DecorativeGradient />
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-bold uppercase tracking-wide text-white">DIENSTEN & EXPERTISE</p>
                <h1 className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                    Uitvoerende kracht voor glasvezel en civiele techniek.
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                    Wij fungeren als flexibele, civiele partner voor hoofdaannemers en netbeheerders. Met
                    eigen materieel en vaste ploegen realiseren we complete tracés, huisaansluitingen en
                    herstelwerkzaamheden. Veilig, volgens planning en naadloos geïntegreerd in uw
                    projectorganisatie.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button variant="secondary" href="/contact">
                        Bespreek uw project
                    </Button>
                    <Button variant="outline" href="/projecten">
                        Bekijk onze projecten <span aria-hidden="true">→</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
