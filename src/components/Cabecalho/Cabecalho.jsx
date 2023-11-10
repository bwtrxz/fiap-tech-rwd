import Link from "next/link";
import "./Cabecalho.scss";

export default function Cabecalho(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href= "/">Página Inicial</Link>
                    </li>
                    <li>
                        <Link href= "/tech/desafios">Desafios</Link>
                    </li>
                    <li>
                        <Link href= "/tech/solucoes">Soluções</Link>
                    </li>
                    <li>
                        <Link href= "/tech/integrantes">Integrantes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}