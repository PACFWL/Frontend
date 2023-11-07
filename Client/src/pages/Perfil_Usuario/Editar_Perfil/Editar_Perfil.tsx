import './Editar_Perfil.css';
import MessageIcon from '../../../assets/MessageIcon.png';
import LockIcon from '../../../assets/LockIcon.png';
import UserXIcon from '../../../assets/UserXIcon.png';
import ExitIcon from '../../../assets/ExitIcon.png';

const Editar_Perfil = ({ }) => {
    return (
        <main className='EditarPerfil'>
            <aside className='Side-Options'>
                <ul className='Box-Options'>
                    <p>Geral </p>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M12.9992 14.8463C14.2232 14.8463 15.3972 14.36 16.2627 13.4945C17.1283 12.6289 17.6146 11.455 17.6146 10.2309C17.6146 9.00685 17.1283 7.83291 16.2627 6.96735C15.3972 6.1018 14.2232 5.61554 12.9992 5.61554C11.7751 5.61554 10.6012 6.1018 9.7356 6.96735C8.87005 7.83291 8.38379 9.00685 8.38379 10.2309C8.38379 11.455 8.87005 12.6289 9.7356 13.4945C10.6012 14.36 11.7751 14.8463 12.9992 14.8463Z" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.11621 22.0459C5.94004 20.6936 7.09789 19.576 8.47844 18.8005C9.85899 18.025 11.4158 17.6177 12.9993 17.6177C14.5827 17.6177 16.1396 18.025 17.5201 18.8005C18.9007 19.576 20.0585 20.6936 20.8824 22.0459" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 25C16.1826 25 19.2348 23.7357 21.4853 21.4853C23.7357 19.2348 25 16.1826 25 13C25 9.8174 23.7357 6.76516 21.4853 4.51472C19.2348 2.26428 16.1826 1 13 1C9.8174 1 6.76516 2.26428 4.51472 4.51472C2.26428 6.76516 1 9.8174 1 13C1 16.1826 2.26428 19.2348 4.51472 21.4853C6.76516 23.7357 9.8174 25 13 25Z" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Editar Conta
                    </li>
                    <li>
                        <img src={MessageIcon} alt="Message Icon" />
                        Notificações
                    </li>
                </ul>
                <ul className='Box-Options'>
                    <p>Configurações</p>
                    <li>
                        <img src={LockIcon} alt="Lock Icon" />
                        Privacidade
                    </li>
                    <li>
                        <img src={UserXIcon} alt="User Icon" />
                        Excluir conta
                    </li>
                    <li>
                        <img src={ExitIcon} alt="User Icon" />
                        Sair
                    </li>
                </ul>

            </aside>
            <div className='Cadastro'>
                <form action="">
                    <h2>Editar Perfil</h2>
                    <div className='Corpo'>
                        <h3>Informações pessoais</h3>
                        <div className='Two-input'>
                            <div>
                                <label htmlFor="">Nome</label>
                                <input type="text" placeholder='Nome de Usuario' />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='usuario@gmail.com' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Bio</label>
                            <textarea placeholder='Escreva sua Bio'>

                            </textarea>
                        </div>
                        <h3>Informações da conta</h3>
                        <div>
                            <label htmlFor="">Senha</label>
                            <input type="password" />
                        </div>
                        <input type="submit" value="Atualizar" />
                    </div>
                </form>

            </div>
        </main>
    )
}

export default Editar_Perfil;