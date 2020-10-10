import styled from "styled-components"
import media from "styled-media-query"

export const Footer = styled.footer`
  background-color: ${props => props.theme.colorsSite.backgroundFooter};
  color: ${props => props.theme.colorsSite.textFooter};
  padding-top: 3em;
  padding-bottom: 0.3em;
  margin-top: 3em;
`

export const FooterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
`

export const FooterContact = styled.div`
  padding: 0.8em;
  width: 45%;
  ${media.lessThan('medium')`
    width: 320px;
    margin: 0 auto;
  `}
  


  form {
    display: flex;
    flex-direction: column;

    input {
      background-color: rgba(0, 0, 0, 0.1);
      color: white;
      border: none;
      padding: 1em;
      margin-top: 1.6em;
      :focus {
        outline: none;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    button {
      background-color: transparent;
      color: #aaa;
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 0.8em;
      margin-top: 2em;

      :hover {
        color: #ccc;
        background-color: rgba(0, 0, 0, 0.3);
        border: 1px solid #334;
      }
    }
  }
`

export const FooterSocialMidia = styled.div`
  width: 45%;
  ${media.lessThan('medium')`
    width: 320px;
    margin: 30px auto;
  `}
  p {
    margin-bottom: 2em;
  }
  hr {
    border: 0.5px solid rgba(255, 255, 255, 0.05);
  }
`

export const FooterIcons = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`

export const FooterCopyright = styled.div`
  max-width: 200px;
  margin: 4em auto;
  text-align: center;

`
