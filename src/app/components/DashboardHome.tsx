import { Navbar } from './Navbar';
import SvgCsharp from '../icons/SvgCsharp';
import SvgTypeScript from '../icons/SvgTypeScript';
import TopicsList from '../components/CartTopics';

const topicsTypeScript = [
    { title: 'Tipos de datos Básicos', href: 'pages/tipo-de-datos', icon: <SvgTypeScript /> },
    { title: 'Tipos Avanzados', href: 'pages/tipos-avanzados', icon: <SvgTypeScript /> },
];

const topicsCsharp = [
    { title: 'Introducción a JavaScript', href: '#', icon: <SvgCsharp /> },
    { title: 'Funciones Avanzadas', href: '#', icon: <SvgCsharp/> },
];

export default function DashboardHome() {
    return(
        <div className="p-4 xl:ml-80">
            <Navbar/>
            <div className="mt-12">
                <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                    <TopicsList 
                    topics={topicsTypeScript} 
                    title="TypeScript" 
                    icon={<SvgTypeScript/>} 
                    gradientFrom="blue-600"
                    shadowColor="blue"
                    colorCard="blue"
                    />

                    <TopicsList 
                    topics={topicsCsharp} 
                    title="Csharp"  
                    icon={<SvgCsharp/>} 
                    gradientFrom="purple-600"
                    shadowColor="purple"
                    colorCard="purple"
                    />
                    {/* <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-purple-600 to-purple-400 text-white shadow-purple-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <SvgCsharp/>
                    </div>
                    <div className="p-4 text-right">
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">Csharp</h4>
                    </div>
                        <div className="border-t border-blue-gray-50 p-4">
                            <ul>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Tipos de datos</strong>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div> 
    )
}