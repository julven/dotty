let BackgroundChalleges = () => {


	let { useContext, useEffect, useState, useRef } = React
	let { styles: {transparentGradient, bcTitle, bc}, margins, windowWidth, windowHeight } = useContext(ContextServices)

	let [hideTitle, setHideTitle] = useState(false)

	let [bcpadding, setBcpadding] = useState(0)
	let post = useRef(null)

	useEffect(() => {
		let hide = false
		if(windowWidth >= 1030) hide = true
		else hide = false

		setHideTitle(hide)

	
	}, [windowWidth])

	useEffect(() => {
		console.log("bc",post)
	}, [])


	return (
		<div  className="" style={{ ...transparentGradient}}>
			<div className="bc-height" id="bc" ref={post} style={{...bc, marginLeft: margins,marginRight: margins,marginTop: 30 }}>

				{hideTitle && 
					<div style={{...bcTitle, }}>
							<h3 style={{marginLeft: "60px"}}>THE</h3>
							<h1 style={{fontSize: "42px"}}>WHITESUNDAYS</h1>
							<p>A MOVIE THAT'S WAITING TO BE WRITTEN</p>
	
					</div>
				}
				<div style={{maxWidth: "450px", color: "white", display: "flex", justifyContent: "center"}}>

					<div >
						<p style={{fontSize:"35px", marginBottom: "0px", maxWidth: 200}}>Background & Audience</p>

						<p style={{fontSize:"14px",}}>
							Tourism & Events Queensland wanted to increase consideration
							of The Whitesundays amongst' social fun seekers'; digitaly savvy
							consumers that socialize substantially online.
						</p>

						<p style={{fontSize:"35px", marginBottom: "0px"}}>Problem</p>

						<p style={{fontSize:"14px", }}>
							The Whitesundays was losing its cachet as an aspirational holiday location.
						</p>

						<p style={{fontSize:"35px",  marginBottom: "0px"}}>Objective</p>

						<p style={{fontSize:"14px", }}>
							Shift perceptions and re-build the whitesundays' social currency as world-class destination.
						</p>
					</div>
				</div>
			</div>
			<style>
			{`
				.bc-height {
					min-height: ${windowHeight}px;
					
				}
				
					
			`}
			</style>
				}
				}
		</div>

	)
}