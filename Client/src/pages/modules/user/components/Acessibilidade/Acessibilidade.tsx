
import './Acessibilidade.css'
import { useTheme } from './useTheme';

const Acessibilidade = () => {
    const [theme, handleChange] = useTheme('light');

    return (
        <div className="Acessibilidade">
            <span>
                <ul>
                    <li><a href="/Acessibilidade">Acessibilidade</a></li>
                    <li><a href="">A -</a></li>
                    <li><a href="">A +</a></li>
                    <label className="switch">
                        <input type="checkbox" onChange={handleChange}/>
                        <span className="slider">Alto Contraste</span>
                    </label>
                </ul>
            </span>
        </div>
    )
}

export default Acessibilidade;