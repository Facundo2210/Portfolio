import {
	StyledContainer,
	CheckBoxWrapper,
	CheckBoxLabel,
	CheckBox,
} from './styled';

import {CgSun} from 'react-icons/cg';
import {BiMoon} from 'react-icons/bi';

const arrayMenu = ['About', 'Skills', 'Projects', 'Contact'];

const Nav = ({themeToggler, theme}) => {
	return (
		<div className='nav'>
			<StyledContainer>
				<div className='div_container'>
					<div className='div_buttons'>
						{arrayMenu &&
							arrayMenu.map((el) => (
								<div className='div_link' key={el}>
									<a href={'#' + el}>{el}</a>
								</div>
							))}
					</div>
					<div className='div_switch'>
						<span>
							<CgSun
								className={theme !== 'dark' ? 'icon_anim' : false}
								style={theme !== 'dark' ? {color: 'orange'} : false}
							/>
						</span>
						<CheckBoxWrapper>
							<CheckBox
								id='checkbox'
								type='checkbox'
								onClick={themeToggler}
								defaultChecked={theme === 'dark' ? true : false}
							/>

							<CheckBoxLabel htmlFor='checkbox' />
						</CheckBoxWrapper>
						<span>
							<BiMoon
								className={theme === 'dark' ? 'icon_anim' : false}
								style={theme === 'dark' ? {color: 'orange'} : false}
							/>
						</span>
					</div>
				</div>
			</StyledContainer>
		</div>
	);
};

export default Nav;