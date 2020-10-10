import React from "react"
import * as S from "./style"
import { Link } from "gatsby"
import Avatar from "../Avatar"


const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.NavBarWrapper>
        <S.NavBarBrand>
          <Avatar/>
          <div>
            <h3>Ederson Pravtz</h3>
            <h4>Analista de Sistemas e um completo curioso!</h4>
          </div>
        </S.NavBarBrand>
        <S.NavBarToggler><S.IconToggleMenu/></S.NavBarToggler>
        <S.NavBarGroup>
          <S.NavBarMenu>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li> <span> | </span> 

              <li>
                <Link to="/contact/">Contato</Link>
              </li>

            </ul>
          </S.NavBarMenu>
          <S.SocialMedia></S.SocialMedia>
        </S.NavBarGroup>
      </S.NavBarWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
