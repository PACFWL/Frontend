import "./Transcricao.css";
import SideMenu from "../modules/user/components/SideMenu/SideMenu";
import Cifra from "../modules/user/components/Cifra/Cifra";
import Comentario from "../modules/user/components/Comentario/Comentario";


import musicaData from './Musicas.json';
import comentariosData from './comentarios.json';
import { useRef } from "react";


const Transcricao = () => {
    const musicaId = 1;

    const musica = musicaData.find(musica => musica.id === musicaId);

    if (!musica) {
        return <div>Música não encontrada</div>;
    }

    const commentsSectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToComments = () => {
        if (commentsSectionRef.current) {
            commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="container-transcricao">
            <div className="box-cifra">
                <div className="side-menu" >
                    <SideMenu scrollToComments={scrollToComments} />
                </div>

                <div>
                    <Cifra nome={musica.nome} artista={musica.artista} conteudo={musica.cifra} />
                </div>
            </div>

            <div className="container-comentarios" ref={commentsSectionRef}>
                <h2 className="title-comentarios">Comentários</h2>

                {comentariosData.map((comentario, index) => (
                    <Comentario
                        key={index}
                        User={comentario.autor}
                        userImg={comentario.userImg}
                        Content={comentario.content}
                        dataPubli={comentario.dataPubli}
                    />
                ))}
            </div>
        </main>
    );
}

export default Transcricao;
