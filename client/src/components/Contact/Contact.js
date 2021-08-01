import {StyledContainer} from './styled';
import {arrayContact} from '../../utils/constants';
import {RiArrowRightSLine} from 'react-icons/ri';

const Contact = () => {
	return (
		<div id='Contact' className='contact'>
			<StyledContainer>
				<div className='title'>
					<div className='div_component_open'>Contact&nbsp;</div>
				</div>
				<div className='content'>
					<div className='div_contact'>
						{arrayContact.map(
							(
								{
									link,
									image,
									className,
									text,
									text2,
									inIcon: InIcon,
									icon: Icon,
								},
								i
							) => (
								<div key={i + Math.random()} className='div_icon'>
									<a href={link} target='_blank' rel='noreferrer'>
										<Icon className={className} />
									</a>
									<div className='tooltip'>
										<img
											className='img_perfil'
											src={image}
											alt={className}
										></img>
										<br />
										<span>
											{text}
											<br />
											{text2 !== null ? text2 : null}
										</span>
										<br />
										<i>
											<a href={link} target='_blank' rel='noreferrer'>
												<RiArrowRightSLine className='arrow' />
												<InIcon />
											</a>
										</i>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Contact;
