import Link from "next/link";

export default function Cabecalho(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href= "/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}