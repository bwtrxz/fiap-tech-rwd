import Link from "next/link";

export default function NotFound() {
    return(
        <div>
            <h1>Erro 404 - A pagina não encontrada!</h1>
            <p>A página que você está procurando não existe.</p>
            <Link href= "/">Voltar para página inicial.</Link>
        </div>
    )
}