import { styled } from "styled-components"
import TextField from "../TextField"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = () => {
    return (<HeaderEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <TextField />
    </HeaderEstilizado>)
}

export default Header