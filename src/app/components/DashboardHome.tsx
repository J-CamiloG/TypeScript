import Link from 'next/link';
import SvgTypeScript from '../icons/SvgTypeScript';
import { Navbar } from './Navbar';

export default function DashboardHome() {
    return(
        <div className="p-4 xl:ml-80">
            <Navbar/>
            <div className="mt-12">
                <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <SvgTypeScript/>
                    </div>
                    <div className="p-4 text-right">
                        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">TypeScript</h4>
                    </div>
                        <div className="border-t border-blue-gray-50 p-4">
                            <ul>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Tipos de datos Basicos</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Tipos avanzados</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Funciones</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Interfaces y tipos</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Clases</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Genericos</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Tipado de modulos</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Decoradores</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Tipado seguro</strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <strong className="text-black-600">Configuracion del compilador</strong>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    )
}