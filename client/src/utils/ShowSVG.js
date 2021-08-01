const SVG = ({svg}) => (
	<svg>
		<use xlinkHref={`${svg}`} />
	</svg>
);

export default SVG;
