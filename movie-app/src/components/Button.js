export const Button = ({ text }) => {
	const onClick = () => {
		console.log("Button Clicked");
	};

	return (
		<button onClick={onClick} className='btn'>
			{text}
		</button>
	);
};
