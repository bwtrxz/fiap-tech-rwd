import Link from "next/link";
import Image from "next/image";

export default function Problemas() {
  return (
    <>
      <div>
        <h1>Problema</h1>
        <Image src="/img/fabrica.png" alt="modal" width={800} height={400} />
        <p>
          Durante a análise dos desafios propostos para o Challenge 2023 - Porto
          Seguro, identificámos um conjunto de questões obtidas pelo desafio
          proposto, por falta de informações transmitida a Porto no pedido de
          reboques adequados à procura; uma modalidade; um veículo modificado
          cujas características básicas são alteradas para determinar o modo
          correto; uma rota que não atende às necessidades do veículo de
          transporte. Para isso desenvolvemos, uma solução criativa e eficiente
          para esse problema enfrentado por nossos clientes.
        </p>
      </div>

      <div>
        <h1>Desafio</h1>
        <Image src="/img/mecanico.png" alt="modal" width={800} height={600} />
        <p>
          É possível identificar uma série de desafios quando o assunto é a
          comunicação entre a empresa e o cliente. A ausência de informações
          precisas quando um pedido de reboque é realizado, pode resultar em
          complicações no envio do modal/guincho para solucionar o problema.
          Portanto, é necessário que as informações fornecidas pelo cliente
          sejam concisas proporcionando um atendimento mais rápido e preciso.
        </p>
      </div>
    </>
  );
}
