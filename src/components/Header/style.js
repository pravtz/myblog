import styled from 'styled-components'
import  {Menu}  from "@styled-icons/material-rounded/Menu"
import media from "styled-media-query"

export const HeaderWrapper = styled.div `
    background-color: ${ props => props.theme.colorsSite.backgroundHeader};
    color: ${ props => props.theme.colorsSite.textHeader};
`

export const NavBarWrapper = styled.nav `
    display: flex;
    justify-content: space-between;
    padding: 20px;
`

export const NavBarBrand = styled.a `
    display: flex;
    align-items: center;
    

    div{
        margin-left:1em;
        border-left: 1px solid #86ADD9;
        padding-left: 0.7em;
        
    }
    h3{
        font-size: 1.8em;
        margin-bottom:0.3em;
        color: #86ADD9;

        ${ media.greaterThan("medium")`
            font-size: 2.3em;
        `}
    }
    h4{
        font-size: 0.5em;
        color: #86ADD9;

        ${ media.greaterThan("medium")`
            font-size: 0.8em;
        `}
    }

`

export const NavBarToggler = styled.button `
    display: block;
    background: transparent;
    border: none;
    outline: none;
    ${media.greaterThan("large")`
      display: none;
  `}
`
export const IconToggleMenu = styled(Menu)`
    color: ${ props => props.theme.colorsSite.LinkMenuNavBar};
    width: 30px;
    :hover{
        color: ${ props => props.theme.colorsSite.LinkMenuNavBarHover};
    }
    
`

export const NavBarGroup = styled.div `
display: none;
align-items: center;


${media.greaterThan("large")`
      display: flex;
  `}

`

export const NavBarMenu = styled.nav `
    ul{
        display:flex;
        align-items: center;
        padding: 10px;
        width: 100%;
        span{
            margin-left: 0.4em;
            margin-right: 0.4em;
            color: #556;
        }
        li{
            margin-left: 0.4em;
            margin-right: 0.4em;

             
            a{
                color: ${ props => props.theme.colorsSite.LinkMenuNavBar};
                text-decoration: none;
                font-size: 1.4em;
                :hover{
                    color: ${ props => props.theme.colorsSite.LinkMenuNavBarHover};
                }
            }

        }
    }
`

export const SocialMedia = styled.nav ``