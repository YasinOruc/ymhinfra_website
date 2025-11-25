

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    href: string;
}

export default function ProjectCard({ title, description, imageUrl, href }: ProjectCardProps) {
    return (
        <article className="relative flex flex-col rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full overflow-hidden">
                <img
                    src={imageUrl}
                    alt=""
                    className="aspect-video w-full bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 inset-ring inset-ring-gray-900/10" />
            </div>
            <div className="flex max-w-xl grow flex-col justify-between p-6">
                <div className="group grow">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <a href={href}>
                            <span className="absolute inset-0" />
                            {title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{description}</p>
                </div>
            </div>
        </article>
    );
}
