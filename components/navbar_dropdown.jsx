let NavbarDropdown = ({active}) => {

	let { useContext, useEffect, useState, useRef } = React
	let { windowHeight,  windowWidth } = useContext(ContextServices)
	let dropdown = useRef(null)

	let toggleDropdown = () => {
		dropdown.current.classList.toggle("show")

	}
	let dropdownClick = () => {
		dropdown.current.classList.remove("show")
	}
	let scrollTo = (e, to) => {
        document.getElementById(to).scrollIntoView({behavior: "smooth"});
       
    }

	let [s] = useState({
		dropdown: {
			display: "flex",
			justifyContent: "end",

		},
		dropdownButton: {
		
			position: "fixed",
			zIndex: 999,
			border: 0,
			borderRadius: "100px",
			top: 10,
			right: 10,
			backgroundColor: "#333333",
			cursor: "pointer",
			width: "65px",
			height: "65px",
			boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)"
			
			
		},
		downloadBoard: {
			backgroundColor: "#282828",
			padding: "2px 12px 2px 12px ",
			borderRadius: 8
		}
	})

	useEffect( () => {
		if(windowWidth >= 700) dropdownClick();
	},[ windowWidth])

	useEffect( () => {
		window.onclick = e => {
			console.log("target")	
		}

	}, [])

	return (
		<div style={{visibility: windowWidth >= 700 ? "hidden" : "visible"}}>
			<div style={{...s.dropdown}}>
				<button style={{...s.dropdownButton}} onClick={toggleDropdown}> 
					<span style={{color: "white", fontSize: "40px"}}>&#9776;</span>
				</button>

				<div className="dropdown" ref={dropdown} >
				 
				  <div id="myDropdown" className="dropdown-content" onClick={dropdownClick}>
				  	<a style={{fontWeight: active == 1? "bold":"normal"}}
				  	 href="#/" onClick={(e)=> scrollTo(e, "top")}>Top</a>
				    <a style={{fontWeight: active == 2? "bold":"normal"}}
				     href="#/" onClick={(e)=> scrollTo(e, "bc")}>Background & Challenges</a>
				    <a style={{fontWeight: active == 3? "bold":"normal"}}
				     href="#/" onClick={(e)=> scrollTo(e, "sol")}>Solution</a>
				    <a href="#/" onClick={(e)=> scrollTo(e, "ss")}>Results & Effectiveness</a>
				    <a style={{fontWeight: active == 4? "bold":"normal"}}
				     href="#/" onClick={(e)=> scrollTo(e, "ss")}>Slideshow</a>
				    <a href="#/" onClick={(e)=> scrollTo(e, "")}>
				    	<div style={{...s.downloadBoard}}>
							<img  src={"img/dl.png"} style={{width: 10, marginRight: 5}}/>
								Download board
							</div>
				    </a>
	
				  </div>
				</div>
			</div>

			<style jsx="true">
			{`
				

				.dropdown {
					display: none;
					width: 240px;
					
					z-index: 999;
					justify-content: center
				}

				.dropdown-content {
				 	font-size: 15px;
				  position: fixed;
				  background-color: #333333;
				  width: 160px;
				  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
				  z-index: 1;
				  top: 15px
				  
				}

				.dropdown-content a {
				  color: white;
				  padding: 12px 16px;
				  text-decoration: none;
				  display: block;
				}

				.dropdown-content a:hover {background-color: #ddd; color: black}
				.dropdown-content div:hover {background-color: #ddd; color: white}

				.show {display:block;}

			`}
			</style>
		</div>

	)
}