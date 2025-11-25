
import Button from '../ui/Button';

export default function CTA() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-brand-950 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                        Klaar om uw project te starten?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
                        Of het nu gaat om een complex glasvezeltracé of civiel grondwerk: wij hebben de
                        capaciteit en het materieel om direct te schakelen.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button variant="secondary" href="/contact">
                            Neem contact op
                        </Button>
                        <Button variant="outline" href="/diensten">
                            Bekijk onze diensten
                        </Button>
                    </div>
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
                    >
                        <circle r="512" cx="512" cy="512" fill="url(#gradient-cta)" fillOpacity="0.4" />
                        <defs>
                            <radialGradient id="gradient-cta">
                                <stop stopColor="var(--color-brand-700)" />
                                <stop offset="1" stopColor="var(--color-brand-500)" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}
