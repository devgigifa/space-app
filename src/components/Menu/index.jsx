import { styled } from "styled-components";
import ItemNavigation from "./ItemNavigation";

const MenuEstilizado = styled.nav`
  position: absolute;
  top: 90px; /* Ajustado para garantir que o menu fique abaixo do ícone */
  right: 0;
  background-color: #070505;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 1;
  transform: translateY(0);

  &.escondido {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const Menu = ({ closeMenu }) => {
  return (
    <MenuEstilizado onMouseLeave={closeMenu}>
      <ItemNavigation 
        iconeAtivo="/icones/home-ativo.png" 
        iconeInativo="/icones/home-inativo.png"
        ativo={true}
      >
        Início
      </ItemNavigation>
      <ItemNavigation 
        iconeAtivo="/icones/mais-vistas-ativo.png" 
        iconeInativo="/icones/mais-vistas-inativo.png"
      >
        Mais vistas
      </ItemNavigation>
      <ItemNavigation 
        iconeAtivo="/icones/mais-curtidas-ativo.png" 
        iconeInativo="/icones/mais-curtidas-inativo.png"
      >
        Mais curtidas
      </ItemNavigation>
      <ItemNavigation 
        iconeAtivo="/icones/novas-ativo.png" 
        iconeInativo="/icones/novas-inativo.png"
      >
        Novas
      </ItemNavigation>
      <ItemNavigation 
        iconeAtivo="/icones/surpreenda-me-ativo.png" 
        iconeInativo="/icones/surpreenda-me-inativo.png"
      >
        Surpreenda-me
      </ItemNavigation>
    </MenuEstilizado>
  );
};

export default Menu;
