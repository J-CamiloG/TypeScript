import { Navbar } from '../../components/Navbar';

export default function TipoDeDatosAvanzadosDashboard() {
    return(
        // <div className="p-4 xl:ml-80">
        //     <Navbar/>
        //     <div className="mt-12">
        //     <p className="font-bold text-3xl">Tipos de datos</p>
        //     <ul className="list-disc list-inside space-y-2 text-gray-700">
        //         <li>
        //             <p>
        //                 <strong className="text-blue-600">Union Types:</strong> 
        //                 Permiten que una variable tenga uno de varios tipos especificados.
        //             </p>
        //             <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
        //                 <code>let id: number | string;<br />id = 10;<br />id = "ABC123";</code>
        //             </div>
        //         </li>
        //         <li>
        //             <p>
        //                 <strong className="text-blue-600">Intersection Types:</strong> 
        //                 Permiten combinar múltiples tipos en uno.
        //             </p>
        //             <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
        //                 <code>
        //                     interface Persona {'{'}<br />
        //                     &nbsp;&nbsp;nombre: string;<br />
        //                     {'}'}<br />
        //                     interface Trabajador {'{'}<br />
        //                     &nbsp;&nbsp;trabajo: string;<br />
        //                     {'}'}<br />
        //                     let empleado: Persona & Trabajador = {'{'}<br />
        //                     &nbsp;&nbsp;nombre: "Juan",<br />
        //                     &nbsp;&nbsp;trabajo: "Ingeniero"<br />
        //                     {'}'};
        //                 </code>
        //             </div>
        //         </li>
        //         <li>
        //             <strong className="text-blue-600">Literal Types:</strong> Permiten especificar el valor exacto que una variable puede tener.
        //             <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
        //             <code>let direccion: "izquierda" | "derecha";<br />direccion = "izquierda";</code>
        //             </div>
        //         </li>
        //         <li>
        //             <strong className="text-blue-600">Type Aliases:</strong> Permiten crear un alias para un tipo de dato.
        //             <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
        //             <code>type ID = number | string;<br />let usuarioID: ID;<br />usuarioID = 10;<br />usuarioID = "ABC123";</code>
        //             </div>
        //         </li>
        //         <li>
        //             <strong className="text-blue-600">Interfaces:</strong> Permiten definir la estructura de un objeto.
        //             <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
        //             <code>
        //                 interface Usuario {'{'}<br />
        //                 &nbsp;&nbsp;nombre: string;<br />
        //                 &nbsp;&nbsp;edad: number;<br />
        //                 {'}'}<br />
        //                 let usuario: Usuario = {'{'}<br />
        //                 &nbsp;&nbsp;nombre: "Juan",<br />
        //                 &nbsp;&nbsp;edad: 25<br />
        //                 {'}'};
        //             </code>
        //             </div>
        //         </li>
        //         <li>
        //             <strong className="text-blue-600">Generics:</strong> Permiten crear componentes que trabajen con una variedad de tipos en lugar de un único tipo.
        //             <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
        //             <code>
        //                 function identidad&lt;T&gt;(valor: T): T {'{'}<br />
        //                 &nbsp;&nbsp;return valor;<br />
        //                 {'}'}<br />
        //                 let numero = identidad&lt;number&gt;(10);<br />
        //                 let texto = identidad&lt;string&gt;("Hola");
        //             </code>
        //             </div>
        //         </li>
        //     </ul>
        //     </div>
        // </div>
        <div className="p-4 xl:ml-80">
            <Navbar />
            <div className="mt-12">
                <p className="font-bold text-3xl">Tipos de datos</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        <p>
                            <strong className="text-blue-600">Union Types:</strong> 
                            Permiten que una variable tenga uno de varios tipos especificados.
                        </p>
                        <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                            <code>let id: number | string;<br />id = 10;<br />id = &quot;ABC123&quot;;</code>
                        </div>
                    </li>
                    <li>
                        <p>
                            <strong className="text-blue-600">Intersection Types:</strong> 
                            Permiten combinar múltiples tipos en uno.
                        </p>
                        <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                            <code>
                                interface Persona {'{'}<br />
                                &nbsp;&nbsp;nombre: string;<br />
                                {'}'}<br />
                                interface Trabajador {'{'}<br />
                                &nbsp;&nbsp;trabajo: string;<br />
                                {'}'}<br />
                                let empleado: Persona &amp; Trabajador = {'{'}<br />
                                {`
                                nombre: "Juan",
                                `}
                                <br />
                                {`
                                "Ingeniero"
                                `}
                                <br />
                                {'}'};
                            </code>
                        </div>
                    </li>
                    <li>
                        <strong className="text-blue-600">Literal Types:</strong> Permiten especificar el valor exacto que una variable puede tener.
                        <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                            <code>let direccion: &quot;izquierda&quot; | &quot;derecha&quot;;<br />direccion = &quot;izquierda&quot;;</code>
                        </div>
                    </li>
                    <li>
                        <strong className="text-blue-600">Type Aliases:</strong> Permiten crear un alias para un tipo de dato.
                        <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                            <code>type ID = number | string;<br />let usuarioID: ID;<br />usuarioID = 10;<br />usuarioID = &quot;ABC123&quot;;</code>
                        </div>
                    </li>
                    <li>
                        <strong className="text-blue-600">Interfaces:</strong> Permiten definir la estructura de un objeto.
                        <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                            <code>
                                interface Usuario {'{'}<br />
                                &nbsp;&nbsp;nombre: string;<br />
                                &nbsp;&nbsp;edad: number;<br />
                                {'}'}<br />
                                let usuario: Usuario = {'{'}<br />
                                {`
                                    nombre: "Juan",
                                `}
                                <br />
                                &nbsp;&nbsp;edad: 25<br />
                                {'}'};
                            </code>
                        </div>
                    </li>
                    <li>
                        <strong className="text-blue-600">Generics:</strong> Permiten crear componentes que trabajen con una variedad de tipos en lugar de un único tipo.
                        <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                <code className="text-white">
                                    {`
                                        function identidad<T>(valor: T): T {
                                    `}
                                    <br />
                                    {`
                                    return valor;
                                    `}
                                    <br />
                                    {`
                                    }
                                    `}
                                    <br />
                                    {`
                                    let numero = identidad<number>(10);
                                    `}
                                    <br />
                                    {`
                                    let texto = identidad<string>("Hola");
                                    `}
                                </code>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}