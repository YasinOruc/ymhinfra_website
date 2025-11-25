
import ProjectCard from '../ui/ProjectCard';
import Container from '../ui/Container';

const projects = [
    {
        id: 1,
        title: 'Duiven',
        href: '#',
        description:
            'Glasvezeltracé in Duiven, inclusief sleufaanleg, mantelbuis en herstelwerk. Uitgevoerd in woonwijken en industriegebied.',
        imageUrl: '/images/projects/duiven.jpeg',
    },
    {
        id: 2,
        title: 'Wijchen',
        href: '#',
        description:
            'Civiele werkzaamheden voor een glasvezelnet in het industriegebied. Strakke afstemming met bedrijven om hinder te beperken.',
        imageUrl: '/images/projects/wijchen.jpeg',
    },
    {
        id: 3,
        title: 'Hoeksche Waard',
        href: '#',
        description:
            'Ondergrondse aanleg en herstelwerk in meerdere kernen. Uitvoering met eigen materieel en ervaren ploeg.',
        imageUrl: '/images/equipment/equipment1.jpeg',
    },
    {
        id: 4,
        title: 'Nijmegen',
        href: '#',
        description:
            'Civiele werkzaamheden voor een glasvezelnet in stedelijk gebied. Minimale hinder en goede communicatie met omwonenden.',
        imageUrl: '/images/projects/nijmegen.jpeg',
    },
];

export default function ProjectGrid() {
    return (
        <div className="bg-white pt-0 pb-24 sm:pt-0 sm:pb-32">
            <Container>
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
            </Container>
        </div>
    );
}
