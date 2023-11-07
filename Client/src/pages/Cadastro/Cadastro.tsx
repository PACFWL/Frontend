import Wallpaper from "../../assets/Cadastro_wallpaper.jpg"
import { Link } from 'react-router-dom';
import './Cadastro.css';
const Cadastro = ({ }) => {
    return (
        <main className='PaginaCadastro'>
            <div className='Side-Background'>
                <img className='Background' src={Wallpaper} alt="" />
                <p>Cadastre-se </p>
                <h3>E tenha acesso às nossas comunidades.</h3>

            </div>
            <div className='Cadastro'>
                <form action="">
                    <h2>Cadastre-se</h2>
                    <div>
                        <label htmlFor="">Nome Completo</label>
                        <input type="text" placeholder='Nome de Usuario'/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='usuario@gmail.com' />
                    </div>

                    <div className='Senha'>
                        <div>
                            <label htmlFor="">Senha</label>
                            <input type="password" />
                        </div>
                        <div>
                            <label htmlFor="">Repetir senha</label>
                            <input type="password" />
                        </div>
                    </div>
                    <div className='redirecionamento'>
                        <input type="checkbox" /> <label>Li e aceito os termos de uso do Legato</label>
                    </div>

                    <Link to={'/'}><input type="submit" value="Entrar" /></Link>
                    <div className='redirecionamento'>
                        <p>Já tem conta?</p> <a href="">Entre</a>
                    </div>
                </form>

            </div>
        </main>
    )
}

export default Cadastro;