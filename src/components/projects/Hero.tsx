
import Button from '../ui/Button';
import Link from '../ui/Link';

export default function Hero() {
    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-bold uppercase tracking-wide text-brand-800">PROJECTEN</p>
                <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Projecten die Nederland Verbinden
                </h2>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Met vakmanschap en innovatie bouwen we aan toekomstbestendige netwerken.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button variant="primary" href="/contact">
                        Bespreek uw project
                    </Button>
                    <Link href="/diensten" variant="arrow">
                        Ontdek onze diensten
                    </Link>
                </div>
            </div>
        </div>
    );
}
