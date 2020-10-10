import React from 'react'

import Icons from "./icons"
import Links  from "./content"

import * as S from "./style"

const SocialIcons = () => {
    return(
        <S.IconsWrapper>
            <S.IconsUl>
                {Links.map((link, i)=> {
                    const Icon = Icons[link.label]

                    return (
                        <S.IconsLi key={i}>
                            <S.IconsA
                                href={link.url}
                                title={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <S.IconWraper>
                                    <Icon/>
                                </S.IconWraper>
                            </S.IconsA>
                        </S.IconsLi>
                    )
                })}
            </S.IconsUl>
        </S.IconsWrapper>
    )
}

export default SocialIcons