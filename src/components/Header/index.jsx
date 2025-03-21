import { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import TextField from "../Search";
import Menu from "../Menu";

const StylizedHeader = styled.header`
  padding: 40px 0;
  display: flex;
  gap: 6rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  img {
    max-width: 212px;
    margin-left: 2rem;
  }
`;

const MenuButton = styled.div`
  font-size: 40px;
  cursor: pointer;
  color: #fff;
  margin-right: 2rem;
`;

const Header = () => {
  const [menuOpen, setMenuAberto] = useState(false);
  const menuRef = useRef();

  // Função para alternar o estado do menu
  const toggleMenu = () => setMenuAberto(!menuOpen);

  // Função para fechar o menu ao clicar fora
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuAberto(false);
    }
  };

  useEffect(() => {
    // Adicionando evento para fechar ao clicar fora
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StylizedHeader>
      <img src="/imagens/logo.png" alt="Logo" />
      <TextField />
      <MenuButton onClick={toggleMenu}>
        <GiHamburgerMenu />
      </MenuButton>
      {menuOpen && <Menu ref={menuRef} />} {/* Menu só aparece se menuOpen for true */}
    </StylizedHeader>
  );
};

export default Header;
