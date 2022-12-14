import MvpButton from '../MvpButton/MvpButton';
import './cadastro.css';

function Cadastro(){
    return (
        <div className="cadastroUsuario">
            <br></br>
            <h1 className='page__title'>Cadastre-se</h1>

            <form>
                
                    <div class="containerTitle">
                        <p class="colorAtention">Atenção: </p>
                        <p class="colorAsterisco">(*) campos de preenchimento obrigatório</p>
                    </div>

                    <div id="container">

                        <div class="containerBlock">
                            <div class="containerPerson">
                                <i class="fa-solid fa-circle-user"></i>
                                <h2>Dados Pessoais</h2>
                                <ul>
                                <li><label for="textName">Nome *</label></li>
                                <li><input name="textName" required="" id="textName" type="text"/></li>
                                
                                <li><label for="lastName">Sobrenome *</label></li>
                                <li><input name="lastName" required=""  id="lastName" type="text"/></li>
                                
                                <li><label for="numberCPF">CPF *</label></li>
                                <li><input  name="numberCPF" 
                                        required="" 
                                        id="numberCPF"
                                        type="text" 
                                        placeholder="  ___.___.___.__"
                                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                                        title="Digite um CPF no formato: xxx.xxx.xxx-xx"/></li>

                                <li><label for="birthDay">Data de Nascimento *</label></li>
                                <li><input name="birthDay"
                                            required=""  
                                            id="birthDay" 
                                            type="text"
                                            placeholder="  __/__/____"
                                            pattern="\d{2}\/\d{2}\/\d{4}" 
                                            title="Digite uma data no formato: xx/xx/xxxx"/></li>                        
                                
                                
                                    <p>Sexo *</p>
                                    <div class="genre"><label><input name="genre" type="radio" value="0"/> Feminino</label></div>
                                    <div class="genre"><label><input name="genre" type="radio" value="1"/> Masculino</label></div>
                                    <div class="genre"><label><input name="genre" type="radio" value="2"/> Não Informar</label></div>
                            

                                <li>
                                    <div><label for="numberCel">Celular *</label></div>
                                    <div><input name="numberCel"
                                                required=""  
                                                id="numberCel" 
                                                type="text"
                                                placeholder="  (__)_____-____"
                                                pattern="(\d{2}\)\d{5}\-\d{4}" 
                                                title="Digite um númerdo de celular no formato: (xx)xxxxx-xxxx"/></div>
                                </li>

                                <li>
                                    <div><label for="numberTel">Telefone Fixo</label></div>
                                    <div><input name="numberTel" 
                                                id="numberTel" 
                                                type="text"
                                                placeholder="  (__)____-____"
                                                pattern="(\d{2}\)\d{4}\-\d{4}" 
                                                title="Digite um númerdo de celular no formato: (xx)xxxx-xxxx"/></div>
                                </li>
                                </ul>
                            </div>
                            

                            <div class="containerEmail">
                                <i class="fa-solid fa-lock"></i>
                                <h2>Dados de Acesso ao Site</h2>
                                
                                <ul>
                                <li><label for="email">E-mail *</label></li>
                                <li><input name="email" required="" id="email" type="text"/></li>
                                
                                <li><label for="senha">Senha *</label></li>
                                <li><input name="senha" required=""  id="senha" type="password"/></li>
                                
                                <li><label for="senha">Confirme sua Senha *</label></li>
                                <li><input name="senha" required=""  id="senha" type="password"/></li>
                                </ul>
                            </div>
                        </div>

                        <div class="containerAddress" >
                            <i class="fa-solid fa-house"></i>
                            <h2>Dados de Entrega</h2>

                            <ul>
                            <li><label for="endereço">CEP *</label></li>
                            <li><input name="endereço" required=""  id="endereço" type="text"/></li>

                            <li><label for="rua">Rua/Avenida *</label></li>
                            <li><input name="rua" required=""  id="rua" type="text"/></li>

                            <li><label for="numero">Número *</label></li>
                            <li><input name="numero" required=""  id="numero" type="text"/></li>

                            <li><label for="bairro">Bairro *</label></li>
                            <li><input name="bairro" required=""  id="bairro" type="text"/></li>

                            <li><label for="complemento">Complemento </label></li>
                            <li><input name="complemento" id="complemento" type="text"/></li>

                            <li><label for="cidade">Cidade *</label></li>
                            <li><input name="cidade" required=""  id="cidade" type="text"/></li>

                            <li><label for="estado">Estado *</label></li>
                            <li><input name="estado" required=""  id="estado" type="text"/></li>
                            </ul>

                        </div>

                        <div class="containerLicense">
                            <i class="fa-solid fa-trophy"></i>
                            <p>Quer receber ofertas exclusivas?</p>

                            <div>
                            <input name="ofertas" id="ofertas" type="checkbox" value="aceitar"/>
                            <label for="ofertas">Quero receber ofertas e descontos exclusivos. Li e concordo com o termo de consentimento </label>
                            </div>
                        
                            <i class="fa-solid fa-shop-lock"></i>
                            <p>Termos de uso e dados *</p>

                            <div>
                            <input name="termoUso" id="termoUso" type="checkbox" requere="" value="aceitar"/>
                            <label for="termoUso">Li e concordo com o termo de consentimento e aceito os termos e condições * </label>
                            </div>

                            <div>
                            <MvpButton tittle="Cadastrar"/>
                            </div>

                        </div>
                    </div>
                
            </form>


        </div>
    )
}
   
   export default Cadastro