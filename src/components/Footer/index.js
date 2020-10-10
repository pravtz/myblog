import React from 'react'

import * as S from './style'
import SocialIcons from "../SocialIcons"


const Footer = () => {
    return (
        <S.Footer>
            <S.FooterWrapper>
                <S.FooterContact>
                    <h4>Cadastre-se para receber dicas e novidades de  marketing e  tecnologias.</h4>
                    <form>
                        
                        <input type="text" placeholder="Name" />
                        
                        <input type="email" placeholder="Email" />
                        <button>Enviar</button>
                    </form>
                    
                </S.FooterContact>
                <S.FooterSocialMidia>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia gravida eleifend. Suspendisse pellentesque dignissim enim, vitae interdum dui convallis vel.</p>
                    <hr/>
                    <S.FooterIcons>
                        <SocialIcons />
                    </S.FooterIcons>
                    <hr/>
                </S.FooterSocialMidia>
            </S.FooterWrapper>
            <S.FooterCopyright>© {new Date().getFullYear()} | Pravtz</S.FooterCopyright>
        </S.Footer>
        
    )

}

export default Footer;