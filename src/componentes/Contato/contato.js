import React from "react";

export default function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="limita-contato">
                <h4>FALE CONOSCO</h4>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="lista-contato">
                    <h5>Contato</h5>
                    <div>
                        <img src="assets/imagens/local.png" alt=""/>
                        <p>Nova Iguaçu, RJ</p>
                    </div>
                    <div>
                        <img src="assets/imagens/telefone.png" alt=""/>
                        <a href="telto:219999-9999">(21) 9999-9999</a>
                    </div>
                    <div>
                        <img src="assets/imagens/email.png" alt=""/>
                        <a href="mailto:contato@oticavida.com">contato@oticavida.com</a> 
                    </div>
                </div>
                <div className="lista-redes">
                    <h5>Nossas Redes Sociais</h5>
                    <div>
                        <img src="assets/imagens/fb.png" alt=""/>
                        <p>Nova Iguaçu, RJ</p>
                    </div>
                    <div>
                        <img src="assets/imagens/ig.png" alt=""/>
                        <a href="telto:219999-9999">(21) 9999-9999</a>
                    </div>
                    <div>
                        <img src="assets/imagens/tt.png" alt=""/>
                        <a href="mailto:contato@oticavida.com">contato@oticavida.com</a> 
                    </div>
                </div>
            </div>
        </section>
    )
}