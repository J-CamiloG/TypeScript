import Link from 'next/link';// Asumiendo que SvgIcon es un componente que renderiza iconos según el tema

interface Topic {
    title: string;
    href: string;
    icon: React.ReactNode; // Aquí puedes usar un componente de ícono genérico que renderice diferentes íconos según el tema
}

interface Props {
    topics: Topic[];
    title: string;
    icon: React.ReactNode; 
    gradientFrom: string;
    shadowColor: string;
    colorCard:string;
}

const TopicsList: React.FC<Props> = ({ topics, title, icon, gradientFrom, shadowColor, colorCard }) => (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-${gradientFrom} to-${colorCard}-400 text-white shadow-${shadowColor}-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`}>
            {icon}
        </div>

        <div className="p-4 text-right">
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{title}</h4>
        </div>
        
        <div className="border-t border-blue-gray-50 p-4">
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>
                        <Link href={topic.href}>
                            <strong className="text-black-600">{topic.title}</strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default TopicsList;