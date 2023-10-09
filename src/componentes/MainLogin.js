import React from "react";
import Celular from "../assets/img/phones-2x.png"
import Instagram from "../assets/img/instagram-logo-14.png"
import "../assets/style.css";

function MainLogin() {

    let login = document.querySelector("#login");
    // let login = document.getElementById("login");

    // if (login == "Lívia") {
    //     alert("Acesso permitido!")
    // } else {
    //     alert("Acesso negado!")
    // }

    return (
        <div>
            <main>
                <section className="container-main">
                    <section className="box1 no-mobile">
                        <img height="580px" src={Celular} alt=""></img>
                    </section>
                    <section className="box2">
                        <fieldset>
                            <img width="174px" src={Instagram} alt=""></img>
                            <form>
                                <input id="login" type="text" placeholder="Telefone, nome de usuário ou email"></input>
                                <input id="senha" type="password" placeholder="Senha"></input>
                                <button>Entrar</button>
                            </form>
                            <section className="login">
                                <div className="section-ou">
                                    <div className="reta"></div>
                                    <p className="f-13">OU</p>
                                    <div className="reta"></div>
                                </div>
                                <a className="f-14" href="">Entrar com o Facebook</a>
                                <a className="f-12" href="">Esqueceu a senha?</a>
                            </section>    
                        </fieldset>
                        <section className="cadastro">
                            <p className="f-14">Não tem uma conta? <a href="">Cadastre-se</a></p>
                        </section>
                        <section className="baixar">
                            <p className="f-14">Obtenha o aplicativo.</p>
                            <div>
                                <a href="">DISPONÍVEL NO Google Play</a>
                                <a href="">Baixe da Microsoft</a>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </div>
    );
}
export default MainLogin;