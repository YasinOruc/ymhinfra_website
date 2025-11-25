const teamMembers = [
    {
        name: 'Ömer Şener',
        role: 'Directeur',
        imageUrl: '/images/team/omersener.jpeg',
        imagePosition: 'center 15%',
        linkedinUrl: 'https://www.linkedin.com/in/omer-sener-1990a018a/',
    },
    {
        name: 'Hasan Çetin',
        role: 'Projectmanager',
        imageUrl: '/images/team/hasancetin.jpeg',
        imagePosition: 'center 20%',
        linkedinUrl: 'https://www.linkedin.com/in/hasan-cetin-65357a18a/',
    },
    {
        name: 'Bedir Çetin',
        role: 'Adjunct-Directeur',
        imageUrl: '/images/team/bedircetin.jpeg',
        imagePosition: 'center 30%',
        linkedinUrl: 'https://www.linkedin.com/in/bedir-%C3%A7etin-43229a211/',
    },
];

export default function Team() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Ons team
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Ons team bestaat uit ervaren vakmensen die dagelijks met zorg, precisie en
                        verantwoordelijkheid werken aan uiteenlopende infraprojecten.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {teamMembers.map((member) => (
                        <li key={member.name}>
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="aspect-3/2 w-full rounded-2xl object-cover object-center outline-1 -outline-offset-1 outline-black/5"
                                style={{ objectPosition: member.imagePosition }}
                            />
                            <div className="mt-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="text-base/7 text-gray-600">{member.role}</p>
                                </div>
                                <ul role="list" className="flex gap-x-6">
                                    <li>
                                        <a
                                            href={member.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#0072b1] hover:text-[#005a8c]"
                                        >
                                            <span className="sr-only">LinkedIn</span>
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="size-5"
                                            >
                                                <path
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
