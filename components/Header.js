import Link from "next/link";
import { Container, Nav, NavBar, Logo, Search, SearchInput } from "./styled";
import Alurakut from "../assets/Alurakut.svg";

const Header = () => {
  return (
    <NavBar>
      <Container>
        <Nav>
          <aside>
            <Logo>
              <Alurakut />
            </Logo>
            <Link href="/"><p className="primaryText">Início</p></Link>
            <span className="divider" />
            <Link href="/"><p>Perfil</p></Link>
            <span className="divider" />
            <Link href="/"><p>Página de recados</p></Link>
            <span className="divider" />
            <Link href="/"><p>Amigos</p></Link>
            <span className="divider" />
            <Link href="/"><p>Comunidade</p></Link>
          </aside>

          <aside>
            <Link href="/" className="tertiaryText">
              <p className="tertiaryText"> seuemail@email.com.br</p>
            </Link>
            <span className="divider" />
            <Link href="/"><p>Sair</p></Link>
            <Search>
              <SearchInput
                type="text"
                placeholder="Pesquisar no Orkut"
              ></SearchInput>
            </Search>
          </aside>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default Header;
