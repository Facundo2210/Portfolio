import React from 'react';
import {StyledContainer} from './styled.js';
import {arrayBack, arrayFront} from '../../utils/constants.js';
const Skills = () => {
	return (
		<div id='Skills' className='skills'>
			<StyledContainer>
				<div className='title'>
					<div className='div_component_open'>Skills &nbsp;&nbsp;</div>
				</div>

				<div className='div_content'>
					<div className='frontend'>
						<div className='div_frontend_container'>
							<div className='div_skills_title'>
								<h2>Front-end</h2>
								<hr></hr>
							</div>
							<div className='div_frontend'>
								{arrayFront.map(({link, image, name}, i) => (
									<div key={i + Math.random()}>
										<a href={link} target='_blank' rel='noreferrer'>
											<img src={image} alt={name}></img>
										</a>
										<h3>{name}</h3>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='backend'>
						<div className='div_backend_container'>
							<div className='div_skills_title'>
								<h2>Back-end</h2>
								<hr></hr>
							</div>
							<div className='div_backend'>
								{arrayBack.map(({name, image, link}, i) => (
									<div key={i + Math.random()}>
										<a href={link} target='_blank' rel='noreferrer'>
											<img src={image} alt={name}></img>
										</a>
										<h3>{name}</h3>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Skills;
