import styled from 'styled-components'

export const IconsWrapper = styled.div `

`
export const IconsUl = styled.ul `
    display: flex
`
export const IconsLi = styled.li `
    margin: 2px;

`
export const IconsA = styled.a `

`
export const IconWraper = styled.div `
    width: 30px;
    color: ${ props => props.theme.colorsSite.colorIcons || 'silver'};

    :hover{
        color: ${ props => props.theme.colorsSite.colorIconsHover || 'white'};
    }
    
`