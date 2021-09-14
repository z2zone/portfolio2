import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #0e0d0d;
    }
    .main-button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 2px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.4s ease-in;
        &:hover{
            background-color: #20b981;
            color: #fff;
        }
    }
    h2{
        font-size: 3rem;
    }
    p{
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.2rem;
    }
    span{
        font-weight: bold;
        color: #23d997;

    }
`
export default GlobalStyle;