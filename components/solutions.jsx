let Solutions = () => {

	let { useContext, useEffect, useState, useRef } = React
	let { styles: { backgroundGradient, solution},margins, windowHeight } = useContext(ContextServices)
	let pos = useRef(null)


	useEffect(() => {
		console.log("sol",pos.current.offsetTop)
	}, [])

	return (
		<div id="sol" className="sol-height" ref={pos} style={{ ...backgroundGradient}}>
			<div style={{color: "white", marginLeft: margins, marginRight: margins}}>
				<p style={{textAlign:"center", margin: "0 0 0 0", fontSize: "35px"}}>Solution</p>
				<div style={{...solution,  paddingBottom: "40px"}}>
					<div style={{width: "350px" , padding: " 10px 20px"}}>
						<p style={{fontSize: "15px"}}>We knew movies rated high on the list of our target’s interests and, with incredible beaches, seaplanes, yachts and glamorous locations, the Whitsundays is the perfect setting for a movie. </p>

						<p style={{fontSize: "15px"}}>So we invited Australians to write it:  </p>

						<p style={{fontSize: "25px"}}>
							The Whitsundays.<br/>
							A movie that’s waiting to be written.
						</p>

						<p style={{fontSize: "15px"}}>
							We enlisted world-renowned screenwriter Craig Pearce as Script Supervisor. Then for 20 days we posted a daily storyboard image on Facebook and Instagram, inviting the public to write scenes for a chance to win a $10,000 luxury holiday.
						</p>

					</div>
					<div  style={{width: "350px", padding: " 10px 20px",}}>
						<p style={{fontSize: "15px"}}>The campaign launched with a trailer, radio and online advertising. </p>

						<p style={{fontSize: "15px"}}>We reacted to the storyline as it developed, selecting and treating images according to the previous winning scene.</p>

						<p style={{fontSize: "15px"}}>Each scene written and shared became a compelling “ad” for the Whitsundays.</p> 

						<p style={{fontSize: "15px"}}>Together, a Hollywood screenwriter and the Australian public had created the world’s first crowd-sourced movie storyboard and a story universe with millions of possible permutations. </p>

				
					</div>

				</div>

			</div>
			<style>{`
				.sol-height {
					min-height: ${windowHeight}px;
				}
			`}</style>
		</div>

	)
}