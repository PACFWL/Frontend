import './Comunidade.css';

import Wallpaper from '../../assets/wallpaper.jpg';
import Postar from '../modules/user/components/Postar/Postar';
import Postagem from '../modules/user/components/Postagem/Postagem';
import SideMenuComunidade from '../modules/user/components/SideMenuComunidade/SideMenuComunidade';

import ComunidadeTitulo from '../modules/user/components/ImgsComunidade/ComunidadeTitulo/ComunidadeTitulo';

const Comunidade = () => {

    return (
        <>

            <main className='container-comunidade'>

                <img className="background" src={Wallpaper} alt="" />

                <div className='header-comunidade'>

                    <div className='header-box'>

                        <div className='img-comunidade'><ComunidadeTitulo ComunidadeTituloUrl="https://effigy.im/a/brantly.eth.svg" /></div>

                        <div className='titulo-box'><h1>Titulo</h1></div>

                        <div className='btn-comunidade-box'><button className='btn-comunidade'>Unir-se</button></div>

                    </div>



                </div>



                <section className='content-comununidade'>

                    <div className='feed-comunidade'>

                        <Postar />

                        <Postagem />

                        <Postagem />

                        <Postagem />

                    </div>

                    <div className='sideMenu-comunidade'>
                        <SideMenuComunidade/>
                    </div>



                </section>

            </main>

        </>
    )
}


export default Comunidade;