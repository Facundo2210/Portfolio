import {StyledContainer} from './styled';
import {FiGithub, FiExternalLink} from 'react-icons/fi';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const Card = ({title, description, slider, github, web}) => {
	return (
		<StyledContainer>
			<div className='div_card'>
				<div className='div_project_title'>
					<h3>{title}</h3>
					<hr></hr>
				</div>
				<div className='div_text'>
					<span>{description}</span>
				</div>
				<Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
					{slider?.map((el, i) => (
						<div
							key={i + Math.random()}
							style={{maxHeight: '210px', marginTop: '5px'}}
						>
							<img src={el} alt={el.title} />
						</div>
					))}
				</Carousel>
				<div className='div_icons'>
					<a href={github} target='_blank' rel='noreferrer'>
						<div className='span_icon'>
							<FiGithub />
							<span> GitHub</span>
						</div>
					</a>
					<a href={web} target='_blank' rel='noreferrer'>
						<div className='span_icon'>
							<FiExternalLink />
							<span> Web</span>
						</div>
					</a>
				</div>
			</div>
		</StyledContainer>
	);
};

export default Card;
