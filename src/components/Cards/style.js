import styled from 'styled-components'
import { Link } from 'gatsby'
import media from "styled-media-query"


export const CardWrapper = styled.div `
    background-color: #091D33;
    padding: 10px;
    width: 100%;
    border-radius: 10px;

    ${media.lessThan("small") `
        width: 320px;
        border-radius: 0;

    `}


`

export const Card = styled.div `
    border: 1px solid rgba(255,255,255, 0.05);
    padding: 20px;
    display: flex;
    flex-direction: column;




`

export const CardImage = styled.div `

`
export const CardLink = styled(Link) `
    text-decoration:none;
    color: #86ADD9;
    :hover{
        color: white;
    }
`


export const CardContent = styled.div `
    h1{
        font-size: 2.4em;
        margin-top: 0.5em;
        margin-bottom: .8em;

    }
    h2{
        font-size: 1em;
        margin-top: 0.5em;
        margin-bottom: 1.5em;
        line-height: 1.6em;

    }

`
export const CardData = styled.h4 `
    font-size: 0.6em;
    align-self: flex-end;


`