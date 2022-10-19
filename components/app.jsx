const App = () => {

	let { useContext, useEffect, useState } = React
	let {screenWidth, windowWidth, windowHeight } = useContext(ContextServices)
 


 	useEffect( () => {
		// console.log(windowWidth)
	}, [windowWidth])


	return (
		<div style={{minWidth: "350px", height: 1}}>
			<Navbar />
			<Main />
			<div style={{ bottom: 230, position: "relative"}}>
				<BackgroundChalleges />
				<Solutions />
				<Slideshow />
			</div>
			<Modal />
		</div>
	)
}