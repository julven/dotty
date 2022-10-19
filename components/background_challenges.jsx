let BackgroundChalleges = () => {


	let { useContext, useEffect, useState } = React
	let { styles: {windowHeight, transparentGradient, bcTitle, bc}, margins, windowWidth } = useContext(ContextServices)

	let [hideTitle, setHideTitle] = useState(false)
	let [bcmargin, setBcmargin] = useState(0)
	let [bcpadding, setBcpadding] = useState(180)

	useEffect(() => {
		let hide = false
		if(windowWidth >= 1030) hide = true
		else hide = false

		setHideTitle(hide)

	
	}, [windowWidth])


	useEffect(() => {
		console.log(bcmargin)
	}, [bcmargin])

	return (
		<div  style={{...windowHeight, ...transparentGradient}}>
			<div id="bc" style={{...bc, marginLeft: margins,marginRight: margins,marginTop: bcmargin, paddingTop: bcpadding }}>

				{hideTitle && 
					<div style={{...bcTitle, }}>
							<h3 style={{marginLeft: "60px"}}>THE</h3>
							<h1 style={{fontSize: "42px"}}>WHITESUNDAYS</h1>
							<p>A MOVIE THAT'S WAITING TO BE WRITTEN</p>
	
					</div>
				}
				<div style={{width: "450px", color: "white", display: "flex", justifyContent: "center"}}>

					<div style={{width: "350px"}}>
						<p style={{fontSize:"35px", width: "300px", marginBottom: "0px"}}>Background & Audience</p>

						<p style={{fontSize:"14px",}}>
							Tourism & Events Queensland wanted to increase consideration
							of The Whitesundays amongst' social fun seekers'; digitaly savvy
							consumers that socialize substantially online.
						</p>

						<p style={{fontSize:"35px", width: "300px", marginBottom: "0px"}}>Problem</p>

						<p style={{fontSize:"14px", }}>
							The Whitesundays was losing its cachet as an aspirational holiday location.
						</p>

						<p style={{fontSize:"35px", width: "300px", marginBottom: "0px"}}>Objective</p>

						<p style={{fontSize:"14px", }}>
							Shift perceptions and re-build the whitesundays' social currency as world-class destination.
						</p>
					</div>
				</div>
			</div>

		</div>

	)
}