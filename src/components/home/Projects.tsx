
import Button from '../ui/Button';
import ProjectCard from '../ui/ProjectCard';
import Container from '../ui/Container';

const projects = [
    {
        id: 1,
        title: 'Duiven',
        href: '/projecten/duiven',
        description:
            'Glasvezeltracé in Duiven, inclusief sleufaanleg, mantelbuis en herstelwerk. Uitgevoerd in woonwijken en industriegebied.',
        imageUrl: '/images/projects/duiven.jpeg',
    },
    {
        id: 2,
        title: 'Wijchen',
        href: '/projecten/wijchen',
        description:
            'Civiele werkzaamheden voor een glasvezelnet in het industriegebied. Strakke afstemming met bedrijven om hinder te beperken.',
        imageUrl: '/images/projects/wijchen.jpeg',
    },
    {
        id: 3,
        title: 'Hoeksche Waard',
        href: '/projecten/hoekschewaard',
        description:
            'Ondergrondse aanleg en herstelwerk in meerdere kernen. Uitvoering met eigen materieel en ervaren ploeg.',
        imageUrl: '/images/equipment/equipment1.jpeg',
    },
];

export default function Projects() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Projecten door heel Nederland
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        Een selectie van recent werk. Van lokale glasvezeltracés tot civiele projecten voor
                        onze infrapartners.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            href={project.href}
                        />
                    ))}
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <Button variant="primary" href="/projecten">
                        Bekijk al onze projecten
                    </Button>
                </div>
            </Container>
        </div>
    );
}
