import Image from "next/image";

import { Box, Container, AsideMenu } from "../components/styled";

import User from "../assets/User.png";
import Atualiza from "../assets/Icons/Atualiza.svg";
import Book from "../assets/Icons/Book.svg";
import Camera from "../assets/Icons/Camera.svg";
import Config from "../assets/Icons/Config.svg";
import Plus from "../assets/Icons/Plus.svg";
import Sunny from "../assets/Icons/Sunny.svg";
import ToDoList from "../assets/Icons/ToDoList.svg";
import VideoCam from "../assets/Icons/VideoCam.svg";
import Perfil from "../assets/Icons/Perfil.svg";


const SideMenu = () => {
  return (
    <>
        <Box width="230px" height="760px" style={{ marginTop: 25 }}>
          <AsideMenu>
            <div className="img-perfil">
              <Image src={User} width="150px" height="150px" layout="fixed" />
            </div>

            <span className="divider-hor" />

            <div className="text-perfil">
              <span className="secundatyText">Marcilio Júnior</span>
              <span className="status-perfil">
                masculino, solteiro(a) Brasil
              </span>

              <span className="divider-hor" />

              <label> <Perfil />{" "}<span>Perfil</span></label>
              <label> <Book />{" "}<span>Recados</span></label>
              <label> <Camera />{" "}<span>Fotos</span></label>
              <label> <VideoCam />{" "}<span>Vídeos</span></label>
              <label> <Sunny />{" "}<span>Depoimentos</span></label>

              <span className="divider-hor" />

              <h4>Apps</h4>
              <label> <Plus />{" "}<span>Adicionar apps</span></label>

              <span className="divider-hor" />

              <label> <ToDoList />{" "}<span>Listas</span></label>
              <label> <Atualiza />{" "}<span>Atualizações</span></label>
              <label> <Config />{" "}<span>Configurações</span></label>

            </div>
          </AsideMenu>
        </Box>
      </>
  )
}

export default SideMenu;
