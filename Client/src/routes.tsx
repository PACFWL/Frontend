import { Route, Routes } from "react-router-dom";
import EditUserPage from "./pages/modules/user/editUserPage";
import ListUserPage from "./pages/modules/user/listUserPage";
import CreateUserPage from "./pages/modules/user/createUserPage";
import Home from './pages/Home/Home';
import Explorar from "./pages/Explorar/Explorar";
import Perfil_Usuario from "./pages/Perfil_Usuario/Perfil_Usuario";
import Perfil_Favoritos from "./pages/Perfil_Usuario/Perfil_Paginas/Perfil_Favoritos/Perfil_Favoritos";
import Perfil_Listas from "./pages/Perfil_Usuario/Perfil_Paginas/Perfil_Listas/Perfil_Listas";
import Perfil_Contribuicoes from "./pages/Perfil_Usuario/Perfil_Paginas/Perfil_Contribuicoes/Perfil_Contribuicoes";
import Transcricao from "./pages/Transcricao/Transcricao";
import Perfil_Artista from "./pages/Perfil_Artista/Perfil_Artista";
import Cadastro from "./pages/Cadastro/Cadastro";
import UploadTab from "./pages/UploadTab/UploadTab";
import Comunidades from "./pages/Comunidades/Comunidades";
import Comunidade from "./pages/Comunidade/Comunidade";
import Editar_Perfil from "./pages/Perfil_Usuario/Editar_Perfil/Editar_Perfil";
import UploadTranscricao from "./pages/UploadTranscricao/UploadTranscricao";
import Acessibilidade_Pagina from "./pages/Acessibilidade/Acessibilidade";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Acessibilidade" element={<Acessibilidade_Pagina/>}/>
      <Route path="/Explorar" element={<Explorar />} />
      <Route path="/Perfil" element={<Perfil_Usuario />} />
      <Route path="/Perfil/Favoritos" element={<Perfil_Favoritos />} />
      <Route path="/Perfil/Listas" element={<Perfil_Listas />} />
      <Route path="/Perfil/Contribuicoes" element={<Perfil_Contribuicoes />} />
      <Route path="/Perfil/EditarPerfil" element={<Editar_Perfil/>} />
      <Route path="/PerfilArtista" element={<Perfil_Artista/>} />
      <Route path={`/Transcricao`} element={<Transcricao />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/UploadTab" element={<UploadTab />} />
      <Route path="/UploadTranscricao" element={<UploadTranscricao/>}/>
      <Route path="/Comunidades" element={<Comunidades />} />
      <Route path="/Comunidade" element={<Comunidade />} />
      <Route path="/users" element={<ListUserPage />} />
      <Route path="/users/new" element={<CreateUserPage />} />
      <Route path="/users/:id" element={<EditUserPage />} />

    </Routes>
  )
}