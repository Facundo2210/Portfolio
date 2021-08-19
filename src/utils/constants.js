import home from '../imagenes/dogHome.jpg';
import create from '../imagenes/create.jpg';
import detail from '../imagenes/detail.jpg';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FiExternalLink, FiMail} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';
import face from '../imagenes/casa.png';

export const myProjects = [
	{
		title: 'Dogs App',
		description: `Web application to search, obtain information and add Dogs Breeds.
        Created with React.js, Redux, Nodejs, Express, Sequelize, PostgreSQL.`,
		slider: [home, create, detail],
		github: 'https://github.com/facundo2210/DogSpaApp',
		web: 'https://dog-spa-app.vercel.app/dogs',
	},
	{
		title: 'STORE! Ecommerce',
		description:
			'Ecommerce de artículos tecnológicos al que llamamos Store! Stack: MERN Mongo DB (Mongoose) , ExpressJs, ReactJS (Redux) y Node con metodología ágil SCRUM.',
		slider: [
			'https://camo.githubusercontent.com/692b9a817433ea2f320730c6446ae341f316fab97396feb97df468df1428e7fb/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646c657862726372762f696d6167652f75706c6f61642f76313632323132333830362f50726f79656374732f452d636f6d6d657263652f322d335f6b757668716a2e706e67',
			'https://camo.githubusercontent.com/6a24a4b54f65fe32fdc2272a6a246c90f1b39793cac5ba662438f0ed88f83349/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646c657862726372762f696d6167652f75706c6f61642f76313632303735333736392f50726f79656374732f53746f72655f325f71787a6b39742e706e67',
			'https://camo.githubusercontent.com/3028e1101d131ea5b8582de1f81881eb2beb602cc6045a814a31ceaebbdd91fe/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646c657862726372762f696d6167652f75706c6f61642f76313632323132333831352f50726f79656374732f452d636f6d6d657263652f332d315f65627a6f356d2e706e67',
			'https://camo.githubusercontent.com/360b6863ee1836bdf09a2ed70c63a39f0af575712be99921880f910a56112790/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646c657862726372762f696d6167652f75706c6f61642f76313632323132333831382f50726f79656374732f452d636f6d6d657263652f332d325f617a746e39712e706e67',
		],
		github: 'https://github.com/josegarrera/ecommerce',
		web: 'https://store-commerce-pi.vercel.app/',
	},
];

export const arrayFront = [
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/html.svg',
		name: 'HTML',
		link: 'https://en.wikipedia.org/wiki/HTML',
	},
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/css.svg',
		name: 'CSS',
		link: 'https://www.w3.org/Style/CSS/Overview.en.html',
	},
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/JS.svg',
		name: 'JS',
		link: 'https://www.javascript.com/',
	},
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/react.svg',
		name: 'React.js',
		link: 'https://es.reactjs.org/',
	},
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/redux.svg',
		name: 'Redux',
		link: 'https://es.redux.js.org/',
	},
];

export const arrayBack = [
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/node.svg',
		name: 'Node.js',
		link: 'https://nodejs.org/es/',
	},
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/expressjs.svg',
		name: 'Express.js',
		link: 'https://expressjs.com',
	},
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/postgresql.svg',
		name: 'PostgreSQL',
		link: 'https://www.postgresql.org/',
	},
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/sequelize.svg',
		name: 'Sequelize',
		link: 'https://sequelize.org/',
	},
	{
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/mongodb.svg',
		name: 'MongoDB',
		link: 'https://www.mongodb.com/',
	},
];

export const arrayContact = [
	{
		icon: SiGmail,
		image:
			'https://raw.githubusercontent.com/Alonxx/Portfolio/495908bd349a004233796da43781d1de42a1f5b5/src/assets/mail.svg',
		text: 'Send WhatsApp',
		text2: null,
		action: 'copy',
		link: 'https://api.whatsapp.com/send/?phone=5491134605703&text&app_absent=0',
		inIcon: FiMail,
		className: 'icon_gmail',
	},
	{
		icon: FaLinkedin,
		image: face,
		text: 'Facundo Cordoba',
		text2: 'Full Stack Developer',
		action: 'link',
		link: 'https://www.linkedin.com/in/Facundocordobaperez/',
		inIcon: FiExternalLink,
		className: 'icon_linkedin',
	},
	{
		icon: FaGithub,
		image: 'https://image.flaticon.com/icons/png/512/25/25231.png',
		text: '@Facundo2210',
		text2: null,
		action: 'link',
		link: 'https://github.com/Facundo2210/',
		inIcon: FiExternalLink,
		className: 'icon_github',
	},
];
