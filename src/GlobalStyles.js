import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`
* { margin: 0; 
  padding: 0; 
  list-style: none;  
  box-sizing: border-box; }
.div_component_open {
		margin-left: 0rem;
		padding-bottom: 2rem;
		font-size: 2rem;
		font-weight: 900;
		color: ${({theme}) => theme.component};
		span {
			color: ${({theme}) => theme.text};
		}
	}
  body {
    min-height: 100vh;
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    //transition: all 0.50s linear;
    
  }
.fadeInLeft {
		-webkit-animation: fadeInLeft 1s ease;
		animation: fadeInLeft 1s ease;
	}
	.fadeInRight {
		-webkit-animation: fadeInRight 1s ease;
		animation: fadeInRight 1s ease;
	}
	.fadeInUp {
		opacity: 0;
		-webkit-animation: fadeUp 1s ease;
		animation: fadeUp 1s ease;
		animation-delay: 0.3s;
		animation-fill-mode: forwards;
	}
	@-webkit-keyframes fadeInLeft {
		0% {
			opacity: 0;
			-webkit-transform: translateX(-100px);
		}
		100% {
			opacity: 1;
			-webkit-transform: translateX(0);
		}
	}
	@keyframes fadeInLeft {
		0% {
			opacity: 0;
			transform: translateX(-100px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@-webkit-keyframes fadeInRight {
		0% {
			opacity: 0;
			-webkit-transform: translateX(100px);
		}
		100% {
			opacity: 1;
			-webkit-transform: translateX(0);
		}
	}
	@keyframes fadeInRight {
		0% {
			opacity: 0;
			transform: translateX(100px);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@-webkit-keyframes fadeUp {
		0% {
			opacity: 0;
			-webkit-transform: translateY(100px);
		}
		100% {
			opacity: 1;
			-webkit-transform: translateY(0);
		}
	}
	@keyframes fadeUp {
		0% {
			opacity: 0;
			transform: translateY(100px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
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
@media (max-width: 1441px) {
  html {
    font-size: 20px;
  }
}
@media (max-width: 1127px) {
  html {
    font-size: 18px;
    		.div_component_open {
			margin-left: -6rem;
		}
  }
}
 @media (min-width: 720px) and (max-width: 1126px){
  html {
    font-size: 13.5px;
    		.div_component_open {
			margin-left: -10rem;
		}
  }
}
  `;
