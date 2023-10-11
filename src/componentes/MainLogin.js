import React, { useState } from "react";
import Celular from "../assets/img/phones-2x.png"
import Instagram from "../assets/img/instagram-logo-14.png"
import "../assets/style-login.css";

function MainLogin() {

    const [username, setUsername] = useState("");
    const [password, setPasswrd] = useState("");

    const login = () => {
        if (username == "Aluno") {
            if (password == "senha") {
                alert("Bem-vindo(a)!! :D")
            } else {
                alert("Senha incorreta!")
            }
        } else {
            alert("Acesso negado!")
        }
    }

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
                                <input 
                                    type="text" 
                                    placeholder="Telefone, nome de usuário ou email" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)}
                                >
                                </input>
                                <input 
                                    type="password" 
                                    placeholder="Senha" 
                                    value={password} 
                                    onChange={(e) => setPasswrd(e.target.value)}
                                >
                                </input>
                                <button onClick={login}>Entrar</button>
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