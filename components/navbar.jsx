let Navbar = () => {

	let { useContext, useEffect, useState } = React
	let { windowHeight,windowWidth } = useContext(ContextServices)
	let [hover, setHover] = useState(false)
	let [active, setActive] = useState(1);
	let [scroll, setScroll] = useState(0)
	

	useEffect( () => {
		window.onscroll = e => {
			setScroll(window.scrollY)
		}
	},[])


	useEffect( () => {
		// console.log(scroll)
		if(scroll < windowHeight){ 
			setActive(1) 
		}
		else if (scroll > windowHeight && scroll <=windowHeight*2) {
			setActive(2)
		}
		else if (scroll > windowHeight* 2 && scroll <=windowHeight*3) {
			setActive(3)
		}
		else if (scroll > windowHeight* 3 && scroll ) {
			setActive(4)
		}
	},[scroll])

	// useEffect( () => {
	// 	console.log(active)
	// },[active])


	let [local] = useState({
		ul: {
			// textAlign:"center",
			listStyleType: "none",
			margin: 0,
			padding: 0,
			// overflow: "hidden",
			backgroundColor: "#333333",
			top: 0,
			position: "fixed",
			width: "100%",
			zIndex: 9999,
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center"



		},
		li: {
				fontSize: "12px",
				display: "inline-block",
			  color: "white",
			  textAlign: "center",
			  padding: "13px 5px 8px 5px",
			  textDecoration: "none",
			  cursor: "pointer",


		},

		hover: {
			backgroundColor: "#111"
		},
		border: {
			borderRight: "1px solid gray",
			margin: "12px 3px 18px 3px"
		},
		downloadBoard: {
			
			backgroundColor: "#282828",
			padding: "2px 12px 2px 12px ",
			borderRadius: 8
		}
	})

	let scrollTo = (e, to) => {
        document.getElementById(to).scrollIntoView({behavior: "smooth"});
        // clearActive();
        // e.target.className += " active"

        // if (document.getElementById("navBttn").ariaExpanded == "true") document.getElementById("navBttn").click();
    }

	useEffect( () => {

	})

	return (
		<div>
			<ul style={{...local.ul, visibility: windowWidth < 700 ? "hidden" : "visible"}}>

				<li onClick={(e) => scrollTo(e, "top")}  
				style={{...local.li}} ><img src={"img/play.png"} style={{height: 20}}/></li> 
				<li  style={{...local.border}} />
				<li onClick={(e) => scrollTo(e, "bc")} 
				style={{...local.li, fontWeight: active == 2 ? "bold":"normal"}}>Background & Challenges</li> 
				<li  style={{...local.border}} ></li>
				<li onClick={(e) => scrollTo(e, "sol")} 
				style={{...local.li, fontWeight: active == 3 ? "bold":"normal"}}>Solution</li> 
				<li  style={{...local.border}} ></li>
				<li onClick={(e) => scrollTo(e, "ss")} 
				style={{...local.li, fontWeight: active == 1 ? "bold":"normal"}}>Results & Effectiveness</li> 
				<li  style={{...local.border}} ></li>
				<li onClick={(e) => scrollTo(e, "ss")} 
				style={{...local.li , fontWeight: active == 4 ? "bold":"normal"}}>Slideshow</li>
				<li style={{marginRight: 50}}></li>
				<li  style={{...local.li}}>
					<div style={{...local.downloadBoard}}>
					<img  src={"img/dl.png"} style={{width: 10, marginRight: 5, }}/>
						Download board
					</div>
				</li>
			</ul>

			<NavbarDropdown active={active}/>
			
			<style jsx="true">
			{`

 
				`}
			</style>
			</div>

	)
}