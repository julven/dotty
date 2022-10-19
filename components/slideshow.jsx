let Slideshow = () => {

	let { useContext, useEffect, useState } = React
	let { styles: {windowHeight, border, backgroundGradient, cursorHover, solution} } = useContext(ContextServices)

	let [tab, setTab] = useState(1)

	let [s] = useState({

		ul: {
			// textAlign:"center",
			listStyleType: "none",
		
			margin: 0,
			padding: 0,
			display: "flex",
		
			flexWrap: "wrap",
			justifyContent: "center"



		},
		li: {
				fontSize: "15px",
				display: "inline-block",
			  color: "white",
			  textAlign: "center",
			  padding: "8px 8px 8px 8px",
			  textDecoration: "none",
			  cursor: "pointer",


		},

		hover: {
			backgroundColor: "#111"
		},
		border: {
			
			margin: "12px 3px 18px 3px"
		},
		downloadBoard: {
			
			backgroundColor: "#282828",
			padding: "2px 12px 2px 12px ",
			borderRadius: 8
		}
	})

	return (
		<div id="ss" style={{...windowHeight, ...backgroundGradient}}>
			<div style={{padding: "50px 0 50px 0"}}>
				<ul style={{...s.ul, paddingBottom: "70px"}}>
					<li onClick={()=>setTab(1)} 
					style={{...cursorHover, ...s.li}}>Video</li>
					<li style={{...s.border}}/>
					<li onClick={()=>setTab(2)} 
					style={{...cursorHover, ...s.li}}>Photography</li>
					<li style={{...s.border}}/>
					<li onClick={()=>setTab(3)} 
					style={{...cursorHover, ...s.li}}>Social</li>
					<li style={{...s.border}}/>
					<li onClick={()=>setTab(4)} 
					style={{...cursorHover, ...s.li}}>Pr</li>
					<li style={{...s.border}}/>
					<li onClick={()=>setTab(5)} 
					style={{...cursorHover, ...s.li}}>Radio</li>
				</ul>

				<div style={{...solution}}>
					<div style={{width: "500px", textAlign: "center", paddingBottom: "50px", margin: "0px 15px 0px 15px"}}>
						{tab == 1 && <SlideshowVideo />}
						{tab == 2 && <SlideshowPhotography />}
						{tab == 3 && <SlideshowSocial />}
						{tab == 4 && <SlideshowPr />}
						{tab == 5 && <SlideshowRadio />}

					</div>

					<div style={{width: "300px", color: "white", }}>

						<p style={{fontSize: "15px", paddingBottom: "100px"}}>
							Live reads from NOVA presenters reflected the ever-evolving story of Jake in real time, and encouraged people to get involved to shape the story themselves.
						</p>

						<button style={{
							backgroundColor: "#178bc1", 
							border: "1px solid #178bc1",
							padding: "15px 40px 15px 40px",
							fontSize: "20px",
							color: "white",
							borderRadius: "18px",
							cursor: "pointer"
						}}>View Project</button>


					</div>


				</div>

			</div>

		</div>
	)
}