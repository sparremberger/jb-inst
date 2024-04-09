import React from "react";
import empresaImage from "../resources/aempresa.jpg"; // Import the image
import "./Empresa.css"; // Import the CSS file for Empresa
import FaleConosco from "./FaleConosco";

const Empresa = () => {
    return (
        <div className='empresa-background'>
            <div className='empresa-container'>
                <h2>
                    Bem-vindo à JB Embalagens - Soluções em Embalagens e Limpeza
                </h2>
                {/* Image section */}
                <div className='empresa-image'>
                    <img src={empresaImage} alt='Empresa' />
                </div>

                {/* Text section */}
                <div className='empresa-text'>
                    <p>
                        Na JB Embalagens, acreditamos em proporcionar uma
                        experiência diferenciada aos nossos clientes, guiada por
                        excelência em atendimento e pela oferta de produtos de
                        alta qualidade a preços irresistíveis. Somos mais do que
                        apenas uma empresa de embalagens descartáveis e produtos
                        de limpeza - somos parceiros em seus esforços para
                        oferecer serviços de qualidade e satisfazer as
                        necessidades de seus clientes.
                    </p>

                    <h2>Compromisso com o Atendimento Especializado</h2>

                    <p>
                        Nosso compromisso com o atendimento especializado é o
                        que nos diferencia. Entendemos as necessidades únicas de
                        cada cliente e estamos aqui para fornecer soluções
                        personalizadas que atendam a essas demandas específicas.
                        Nossa equipe altamente capacitada está sempre pronta
                        para ajudar e garantir uma experiência de compra
                        tranquila e satisfatória.
                    </p>

                    <h2>Qualidade e Variedade de Produtos</h2>

                    <p>
                        Na JB Embalagens, valorizamos a qualidade e a variedade
                        de nossos produtos. Trabalhamos em parceria com as
                        melhores marcas do mercado para garantir que você tenha
                        acesso aos produtos mais confiáveis e eficientes. De
                        produtos de limpeza e higienização a uma extensa linha
                        de embalagens descartáveis para tele entrega (Delivery)
                        e retirada (Take Away), estamos aqui para fornecer tudo
                        o que você precisa para operar com sucesso seu negócio.
                    </p>

                    <h2>Soluções de Limpeza e Higienização</h2>

                    <p>
                        Além de embalagens, também oferecemos uma ampla gama de
                        produtos e equipamentos de limpeza e higienização. Desde
                        detergentes e desinfetantes até equipamentos de limpeza
                        profissional, temos tudo o que você precisa para manter
                        seu estabelecimento impecavelmente limpo e higienizado.
                        Nossos produtos são formulados para proporcionar
                        resultados eficazes, garantindo um ambiente seguro e
                        saudável para seus clientes e funcionários.
                    </p>

                    <h2>
                        Soluções para Lanchonetes e Estabelecimentos de
                        Alimentação
                    </h2>

                    <p>
                        Especialmente voltados para lanchonetes e
                        estabelecimentos de alimentação, oferecemos uma ampla
                        gama de embalagens descartáveis que atendem às
                        necessidades específicas desse setor. Seja para
                        hambúrgueres, sanduíches, pizzas ou outros alimentos,
                        nossas embalagens são projetadas para manter a qualidade
                        e a frescura dos alimentos, garantindo uma experiência
                        gastronômica excepcional para seus clientes.
                    </p>

                    <h2>Parceria para o Sucesso</h2>

                    <p>
                        Na JB Embalagens, não apenas fornecemos produtos -
                        construímos parcerias para o sucesso mútuo. Estamos
                        comprometidos em apoiar o crescimento e o
                        desenvolvimento de nossos clientes, fornecendo não
                        apenas produtos de alta qualidade, mas também recursos e
                        suporte contínuo para ajudá-los a alcançar seus
                        objetivos comerciais.
                    </p>

                    <h2>Contate-nos hoje mesmo</h2>

                    <p>
                        Se você está procurando soluções confiáveis em
                        embalagens e limpeza, conte com a JB Embalagens. Estamos
                        aqui para atender às suas necessidades com excelência e
                        comprometimento. Entre em contato conosco hoje mesmo
                        para descobrir como podemos ajudar a impulsionar o
                        sucesso de seu negócio.
                    </p>

                    <FaleConosco></FaleConosco>
                </div>
            </div>
        </div>
    );
};

export default Empresa;
