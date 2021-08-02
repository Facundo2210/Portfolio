import React from 'react';
import {StyledContainer} from './styled.js';
import img from '../../imagenes/casa.png'; /*
import img2 from '../../assets/linkedin.png'; */

const About = () => {
	let media = window.matchMedia('(max-width: 719px)');

	return (
		<div id='About' className='main navbot'>
			<StyledContainer>
				<div className='header'>
					<div className='title'>
						<div className='div_component_open'>About &nbsp;</div>
					</div>
				</div>
				<div className='photo '>
					<div
						className={
							media.matches ? 'div_avatar fadeInRight' : 'div_avatar fadeInLeft'
						}
					>
						<img className='img_avatar' src={img} alt='perfil desktop'></img>
						<img className='img_avatar2' src={img} alt='perfil mobile'></img>
					</div>
				</div>

				<div className='about'>
					<div
						className={
							media.matches ? 'div_about fadeInLeft' : 'div_about fadeInRight'
						}
					>
						<div className='div_greetings'>
							<h2>Hey! here Facundo Cordoba</h2>
							<div className='div_hr'>
								<hr></hr>
							</div>
						</div>
						<div className='div_title'>
							<span className='span_about'>
								I'm <span className='span_title'>Full Stack Developer</span>.
							</span>
						</div>
					</div>
					<div className='div_about '>
						<div className='div_description fadeInUp'>
							<span>
								Passionate about programming, soccer and cryptocurrencies.
								💻⚽📈 living in Argentina 🇦🇷
								<br />
								<br />
								I'm a team player who likes challenges and adapts to
								changes.&nbsp;&nbsp;
								<span className='span_mode'>#StudentModeAlways📚</span>
							</span>
						</div>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default About;
