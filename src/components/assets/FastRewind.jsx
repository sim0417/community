const FastRewind = ({ width = '24px', height = '24px', fill = 'none', ...rest }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={fill}
			width={width}
			height={height}
			{...rest}
		>
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M18 9.86v4.28L14.97 12 18 9.86m-9 0v4.28L5.97 12 9 9.86M20 6l-8.5 6 8.5 6V6zm-9 0l-8.5 6 8.5 6V6z" />
		</svg>
	);
};

export default FastRewind;
