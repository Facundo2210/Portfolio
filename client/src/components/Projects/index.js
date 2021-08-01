import {StyledContainer} from './styled.js';
import Card from '../Card';
import {myProjects} from '../../utils/constants.js';

const Projects = () => {
	return (
		<div id='Projects' className='projects'>
			<StyledContainer>
				<div className='title'>
					<div className='div_component_open'>Projects</div>
				</div>
				<div className='project'>
					<div className='div_project_container'>
						{myProjects?.map(({title, description, slider, github, web}, i) => (
							<Card
								key={i + Math.random()}
								title={title}
								description={description}
								slider={slider}
								github={github}
								web={web}
							/>
						))}
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Projects;
