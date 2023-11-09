import Link from "next/link";

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
                </ul>
            </nav>
        </header>
    )
}