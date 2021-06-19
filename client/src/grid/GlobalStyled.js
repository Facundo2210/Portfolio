import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    * { margin: 0; 
      padding: 0; 
      list-style: none;  
      box-sizing: border-box; 
    }

  html {
    font-size: 24px;
    scroll-behavior: smooth;
  }


@media (max-width: 1921px) {
  html {
    font-size: 22px;
  }
}
@media (min-width:  1441px) and(max-width: 1920px) {
  html {
    font-size: 20px;
  }
}
@media (min-width:  1127px) and(max-width: 1440px) {
  html {
    font-size: 18px;
  }
}
 @media (min-width: 720px) and (max-width: 1126px){
  html {
    font-size: 13.5px;
  }
}
 @media (min-width: 320px) and (max-width:719px){
  html {
    font-size: 12px;
  }
}
  `;
