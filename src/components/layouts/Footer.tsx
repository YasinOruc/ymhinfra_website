
import { MapPin, Mail } from 'lucide-react';

const navigation = {
    pages: [
        { name: 'Home', href: '/' },
        { name: 'Diensten', href: '/diensten' },
        { name: 'Projecten', href: '/projecten' },
        { name: 'Over ons', href: '/over-ons' },
        { name: 'Contact', href: '/contact' },
    ],
    company: [
        { label: 'KVK', value: '70096139' },
        { label: 'BTW', value: 'NL858139613B01' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    <div className="space-y-8">
                        <img src="/images/logo/logo_text.jpeg" alt="YMH Infra" className="h-16 w-auto" />
                        <p className="text-sm/6 text-balance text-gray-600">
                            Betrouwbare partner in Infra & Glasvezel
                        </p>
                    </div>
                    <div className="mt-16 xl:mt-0">
                        <h3 className="text-sm/6 font-semibold text-gray-900">Contactgegevens</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li className="flex gap-x-3">
                                <MapPin aria-hidden="true" className="h-6 w-6 flex-none text-gray-400" />
                                <span className="text-sm/6 text-gray-600">
                                    Aventurijn 1012
                                    <br />
                                    3316 LB Dordrecht
                                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <Mail aria-hidden="true" className="h-6 w-6 flex-none text-gray-400" />
                                <a
                                    href="mailto:info@ymhinfra.nl"
                                    className="text-sm/6 text-gray-600 hover:text-gray-900"
                                >
                                    info@ymhinfra.nl
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-16 xl:mt-0">
                        <h3 className="text-sm/6 font-semibold text-gray-900">Pagina's</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {navigation.pages.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-16 xl:mt-0">
                        <h3 className="text-sm/6 font-semibold text-gray-900">Bedrijfsgegevens</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {navigation.company.map((item) => (
                                <li key={item.label} className="text-sm/6 text-gray-600">
                                    {item.label}: {item.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-sm/6 text-gray-600">
                        &copy; {new Date().getFullYear()} YMH Infra. Alle rechten voorbehouden.
                    </p>
                </div>
            </div>
        </footer>
    );
}
