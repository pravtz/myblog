import React from "react"
import PropsTypes from 'prop-types'

import * as S from "./style"

const Cards = ({ slug, title, description, date, timeToRead, category,  }) => {



  return (
    <S.CardWrapper>
      <S.Card>
        <S.CardImage></S.CardImage>

        <S.CardLink to={slug}>
          <S.CardContent>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </S.CardContent>
        </S.CardLink>
  <S.CardData>{date} • {timeToRead}min de leitura • {category}</S.CardData>
      </S.Card>
    </S.CardWrapper>
  )
}

Cards.propTypes = {
    slug: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    description: PropsTypes.string.isRequired,
    date: PropsTypes.string.isRequired,
}

export default Cards
