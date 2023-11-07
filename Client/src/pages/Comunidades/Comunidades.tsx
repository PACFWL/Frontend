import "./Comunidades.css"

import Avatar from "../modules/user/components/Avatar/Avatar";
import Filters from "../modules/user/components/Filters/Filters";
import Postagem from "../modules/user/components/Postagem/Postagem";
import FiltersResponsivo from "../modules/user/components/FiltersResponsivo/FiltersResponsivo";
import MenuHamburger from '../../assets/Hamburger_menu.png';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

const Comunidades = () => {
    const [showFilter, setShowFilter] = useState(false);

    const openFilter = () => {
        setShowFilter(true);
        console.log("teste")
    }

    const closeFilter = () => {
        setShowFilter(false);
    }

    const communitiesUrls = [
        "https://clipart-library.com/images_k/transparent-bass-guitar/transparent-bass-guitar-23.png",
        "https://images.emojiterra.com/google/android-12l/512px/1f3b8.png",
        "https://www.clipartmax.com/png/middle/3-31605_size-guitar-icon-png.png",
        "https://cdn-icons-png.flaticon.com/512/4472/4472584.png",
        "https://t3.ftcdn.net/jpg/04/79/81/76/360_F_479817672_BpTyGX9qAl3rs9mHqvQUsyWXTJrkLUII.jpg"
    ]


    return (
        <menu>
            <div className="container-comunidades">


                <Filters showHeaderCommunity={true} exibirGenero={true} />

                <div className="menu-hamburger" onClick={openFilter}>
                    <img src={MenuHamburger} alt="" />
                </div>
                <FiltersResponsivo exibirGenero={true} showHeaderCommunity={true} showMenuFiltro={showFilter} closeMenuFiltro={closeFilter} />

                <div className="content-comunidades">

                    <div className="comunidades-box">
                        <div className="title-header">
                            <h2>Conheça nossas comunidades</h2>
                            <a href=""><h5>Visualizar mais</h5></a>
                        </div>
                        <div className="list-imgs">
                            {communitiesUrls.map((artista, index) => (
                                <Avatar key={index} avatarUrl={artista} />
                            ))}
                        </div>
                    </div>

                    <div className="comunidades-box">
                        <div className="title-header">
                            <h2>Discussões</h2>
                            <span className="seta">Discussões relevantes<KeyboardArrowDownIcon /></span>
                        </div>

                        <Postagem />

                        <Postagem />

                    </div>


                </div>



            </div>
        </menu>
    )
}


export default Comunidades;