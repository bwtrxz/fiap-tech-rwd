import Image from "next/image";
import "./Rodape.scss";

export default function Rodape() {
    return (
        <div>
            <footer>
                <ul>
                    <li>
                        <a href="/">
                            <figure>
                                <Image src="/img/instagram.png" alt="Logo do instagram" width={35} height={35} />
                            </figure>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <figure>
                                <Image src="/img/facebook.png" alt="Logo do facebook" width={50} height={50} />
                            </figure>
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            <figure>
                                <Image src="/img/twitter-logo.png" alt="Logo do twitter" width={45} height={45} />
                            </figure>
                        </a>
                    </li>
                </ul>
                <p>&copy;Todos os direitos reservados para FiapTech - 2023.</p>
            </footer>
        </div >
    )
}