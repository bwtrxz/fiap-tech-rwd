import Link from "next/link";
import Image from "next/image";
import "./Cabecalho.scss";

export default function Cabecalho() {
  return (
    <header>
      <nav>
        <div className="logo">
            <a href="/">
                <Image src="/img/logo-porto-seguro.png" alt="image" width={200} height={300} />
            </a>
        </div>
        <ul>
          <li>
            <Link href="/">Página Inicial</Link>
          </li>
          <li>
            <Link href="/tech/desafios">Desafios</Link>
          </li>
          <li>
            <Link href="/tech/solucoes">Soluções</Link>
          </li>
          <li>
            <Link href="/tech/integrantes">Integrantes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
