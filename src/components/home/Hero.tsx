
import Button from '../ui/Button';

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden pt-14 h-screen flex flex-col justify-center">
            <img
                src="/images/hero/hero.jpeg"
                alt="Team YMH Infra"
                className="absolute inset-0 -z-10 size-full object-cover object-center lg:object-right"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950 via-brand-950/90 via-50% to-transparent sm:via-brand-950/70" />

            <div className="w-full pl-6 md:pl-12 lg:pl-24 2xl:pl-40 pr-6 lg:pr-8">
                <div className="grid lg:grid-cols-12 gap-8 pt-32 pb-48 sm:pt-48 sm:pb-64 lg:pt-56 lg:pb-80 items-center">
                    <div className="max-w-xl lg:max-w-2xl 2xl:max-w-4xl lg:col-span-7">
                        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl 2xl:text-8xl drop-shadow-md">
                            Betrouwbare partner in Infra &amp; Glasvezel
                        </h1>
                        <p className="mt-8 text-lg leading-8 text-gray-200 2xl:text-xl">
                            Van tracé tot huisaansluiting. Wij leveren mankracht, materieel en
                            vakmanschap voor aannemers in heel Nederland.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Button variant="secondary" href="/contact">
                                Bespreek uw project
                            </Button>
                            <Button variant="outline" href="/projecten">
                                Bekijk recent werk <span aria-hidden="true">→</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}