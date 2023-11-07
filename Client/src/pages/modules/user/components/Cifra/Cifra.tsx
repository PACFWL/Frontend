import './Cifra.css'
import { Link } from 'react-router-dom';
import SideMenuMobile from '../SideMenu/SideMenuMobile/SideMenuMobile';

const Cifra = ({ artista, nome, conteudo }: any) => {
    const conteudoFormatado = conteudo.replace(/\t/g, '    ');
    const linhas = conteudoFormatado.split('\n');

    const tom = ["A", "Am", "A#", "A#m", "B", "Bm", "C", "Cm", "C#", "C#m", "D", "Dm", "D#", "D#m", "E", "Em", "F", "Fm", "F#", "F#m", "G", "Gm", "G#", "G#m"];

    const realcarAcorde = (linha: string) => {
        const palavras = linha.split(' ');
        const linhaComAcordes = palavras.map((palavra, index) => {
            if (tom.includes(palavra)) {
                return (
                    <span key={index}>
                        <span className="acorde">{palavra}</span>
                        {' '}
                    </span>
                );
            }
            return <span key={index}>{palavra}</span>;
        });

        return linhaComAcordes;
    }

    const renderConteudo = () => {
        return linhas.map((linha: string, index: number) => (
            <span key={index}>
                {linha.startsWith("[") && linha.endsWith("]") ? (
                    <span className="secao">{linha}</span>
                ) : eUmAcorde(linha) ? (
                    <span className="acorde">{realcarAcorde(linha)} </span>
                ) : (
                    linha
                )}
                <br />
            </span>
        ));
    };

    const eUmAcorde = (linha: string) => {
        const palavras = linha.split(' ');
        return palavras.some((palavra) => tom.includes(palavra));
    };

    return (
        <main>
            <h1 className="titulo-cifra">{nome}</h1>
            <Link className='link-transcricao' to="/PerfilArtista"><h2 className="sub-titulo">{artista}</h2></Link>
            <div className="video-box-mobile">
                <iframe
                    src="https://www.youtube.com/embed/QDYfEBY9NM4?si=5JXMBwTg_p1I5rFM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <SideMenuMobile  />
            <div className="cifra-column">
                <div className="cifra-video">
                    <pre className="cifra">{renderConteudo()}</pre>

                    <div className="video-box">
                        <iframe
                        height="200px"
                        width="350px"
                            src="https://www.youtube.com/embed/QDYfEBY9NM4?si=5JXMBwTg_p1I5rFM"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cifra;
