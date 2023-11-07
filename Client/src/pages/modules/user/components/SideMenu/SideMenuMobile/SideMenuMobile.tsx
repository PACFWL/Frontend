import './SideMenuMobile.css';
import Avatar from '../../Avatar/Avatar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AppsIcon from '@mui/icons-material/Apps';
import Afinacao from '../../../../../../assets/afinacao.png';

const SideMenuMobile = ( ) => {
    return (
        <>
            <div className="side-menu-mobile">
                {/*<Avatar avatarUrl={"https://i.scdn.co/image/ab67616100005174e9348cc01ff5d55971b22433"} />*/}

                <ul className="actions-buttons-mobile">
                    <li className="btn-li"><span   className="btn-side rolagem"><UnfoldMoreIcon className="icons" /> Rolagem</span></li>
                    <li className="btn-li"><span className="btn-side between"><RemoveIcon className="icons" /> Texto <AddIcon className="icons" /></span></li>
                    <li className="btn-li"><span className="btn-side between"><RemoveIcon className="icons" />  Tom <AddIcon className="icons" /></span></li>
                </ul>

                <ul className="actions-buttons-mobile">
                    <li><span className="element-li" ><DownloadIcon /> <span>Baixar</span> </span></li>
                    <li ><span className="element-li"><EditIcon /> <span>Corrigir</span></span></li>
                    <li ><span className="element-li"><img src={Afinacao} width="24px" /> <span>Afinação</span></span></li>
                    {/*<li ><span className="element-li"><FavoriteBorderIcon /> <span>Favoritar</span></span></li>*/}
             
                </ul>
            </div>
        </>
    )
}

export default SideMenuMobile;