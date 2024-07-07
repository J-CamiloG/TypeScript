import { Navbar } from '../../components/Navbar';

export default function TipoDeDatosDashboard() {
    return(
        <div className="p-4 xl:ml-80">
            <Navbar/>
            <div className="mt-12">
                <section className="main-section" >
                    <p className="font-bold text-3xl">Tipos de datos</p>
                    <article className="max-w-4xl mx-auto p-8">
                        <div>
                        <p className="text-gray-500 mb-6">
                            En TypeScript, los tipos de datos son fundamentales para definir y trabajar con diferentes tipos de valores. Aquí hay una lista de los tipos de datos más comunes que se utilizan en TypeScript:
                        </p>
                        </div>
                        <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-gray-900 mb-2">Tipos de Datos Básicos</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>
                                    <strong className="text-blue-600">number:</strong> Representa valores numéricos, ya sean enteros o de punto flotante.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                        <code >let edad: number = 25;</code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">string:</strong> Representa secuencias de caracteres.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>let nombre: string = "Juan";</code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">boolean:</strong> Representa un valor verdadero (<code>true</code>) o falso (<code>false</code>).
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>let esActivo: boolean = true;</code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">array:</strong> Representa una colección de valores del mismo tipo.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>let numeros: number[] = [1, 2, 3];</code><br />
                                    <code>let nombres: Array&lt;string&gt; = ["Juan", "Ana", "Luis"];</code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">tuple:</strong> Representa un array con un número fijo de elementos, donde cada elemento puede tener un tipo distinto.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>let persona: [string, number] = ["Juan", 25];</code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">enum:</strong> Representa un conjunto de constantes con nombre.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>
                                        enum Color {'{'}<br />
                                        &nbsp;&nbsp;Rojo,<br />
                                        &nbsp;&nbsp;Verde,<br />
                                        &nbsp;&nbsp;Azul<br />
                                        {'}'}<br />
                                        let colorFavorito: Color = Color.Verde;
                                    </code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">any:</strong> Representa cualquier tipo de valor y se utiliza cuando el tipo de una variable no se conoce de antemano.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>let valor: any = "Hola";<br />valor = 25;</code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">void:</strong> Representa la ausencia de un valor, generalmente usado como el tipo de retorno de funciones que no devuelven un valor.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>function saludar(): void {'{'}<br />&nbsp;&nbsp;console.log("Hola");<br />{'}'}</code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">null y undefined:</strong> Representan valores nulos y no definidos, respectivamente.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>let valorNulo: null = null;<br />let valorIndefinido: undefined = undefined;</code>
                                    </div>
                                </li>
                                <li>
                                    <strong className="text-blue-600">object:</strong> Representa un valor no primitivo, es decir, cualquier cosa que no sea <code>number</code>, <code>string</code>, <code>boolean</code>, <code>symbol</code>, <code>null</code> o <code>undefined</code>.
                                    <div className="text-white bg-gray-900 p-2 mt-1 rounded-md">
                                    <code>let persona: {'{'} nombre: string; edad: number {'}'} = {'{'} nombre: "Juan", edad: 25 {'}'};</code>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </article>
                </section>
            </div>
        </div> 
    )
}