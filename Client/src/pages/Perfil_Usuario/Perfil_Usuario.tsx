import React, { useState } from 'react';
import './Perfil_Usuario.css';
import MenuHamburger from '../../assets/Hamburger_menu.png';
import { useUser } from '../../UserContext';

import Perfil from '../modules/user/components/Perfil/Perfil';
import PerfilResponsivo from '../modules/user/components/PerfilResponsivo/PerfilResponsivo';

import Perfil_Bio from './Perfil_Paginas/Perfil_Bio/Perfil_Bio';
import Perfil_Favoritos from './Perfil_Paginas/Perfil_Favoritos/Perfil_Favoritos';
import Perfil_Listas from './Perfil_Paginas/Perfil_Listas/Perfil_Listas';
import Perfil_Contribuicoes from './Perfil_Paginas/Perfil_Contribuicoes/Perfil_Contribuicoes';
import Perfil_Mensagens from './Perfil_Paginas/Perfil_Mensagens/Perfil_Mensagens';

const Perfil_Usuario = () => {
    const [showFilter, setShowFilter] = useState(false);
    const { userState } = useUser();;

    const openFilter = () => { setShowFilter(true); }

    const closeFilter = () => { setShowFilter(false); }

        const [selectedItem, setSelectedItem] = useState('Perfil');

        const handleSelectItem = (item:any) => {
            setSelectedItem(item);
        };



    return (
        <div className='Perfil_usuario'>
            <Perfil onSelectItem={handleSelectItem} />
            <PerfilResponsivo onSelectItem={handleSelectItem} showMenuFiltro={showFilter} closeMenuFiltro={closeFilter} />
            <div className={ "menu-hamburger-perfil"} onClick={openFilter}>
                <img src={MenuHamburger} alt="" />
            </div>


            {selectedItem === 'Perfil' && <Perfil_Bio />}
            {selectedItem === 'Favoritos' && <Perfil_Favoritos />}
            {selectedItem === 'Listas' && <Perfil_Listas />}
            {selectedItem === 'Contribuições' && <Perfil_Contribuicoes />}
            {/*selectedItem === 'Mensagens' && <Perfil_Mensagens />*/}
        </div>
    );
};

export default Perfil_Usuario;
