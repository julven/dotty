const ContextServices = React.createContext();

let ContextServicesProvider = (props) => {

	let { useEffect, useState, useRef } = React;

	let [test, setTest] = useState("test")
	let [windowHeight, setWindowHeight] = useState(window.innerHeight)
	let [windowWidth, setWindowWidth] = useState(window.innerWidth)
	let [margins, setMargins] = useState("2%");
	let [screenWidth, setScreenWidth] = useState(null)
	let modal = useRef(null)


	let getTest = () => {

		return "test"
	}

	let resizing = () => {
		setWindowHeight(window.innerHeight)
		setWindowWidth(window.innerWidth)

	}

	let widthSize = () => {
		let size = "md"
		if(windowWidth <= 450) size = "sm"	
		else if(windowWidth > 450 && windowWidth <= 650) size = "md"	
		else if(windowWidth > 650 && windowWidth <= 950) size = "lg"
		else if(windowWidth > 950 && windowWidth <= 1350) size = "xl"
		else if(windowWidth > 1350) size = "xxl"

		return size;
	}

	let screenWidthChange = () => {
		let size = widthSize();

		setScreenWidth(size)
	}

	let sideMargins = () => {

		let size = widthSize();
		// console.log(size)
		let margin = "2%"

		if(size == "sm") margin = "2%";
		else if (size == "md") margin = "3%";
		else if (size == "lg") margin = "5%";
		else if (size == "xl") margin = "7%";
		else if (size == "xxl") margin = "9%";

		// console.log(margin)
		setMargins(margin)
	}


	let [styles, setStyles] = useState({
		
		windowHeight: {
			minHeight: windowHeight,
			
		},
		trueHeight: {
			height: windowHeight,
			position: "absolute",
			width: "100%"
		},

		backgroundGradient: {
			backgroundImage: "linear-gradient(#0c353e, #17465a)"
		},
		transparentGradient: {
			 backgroundImage: "linear-gradient(to bottom, rgba(12,54,62,0) 0%, rgba(12,54,62,1) 33%)"
		},

		
		
		bcTitle: {
			width: "400px", color: "white", lineHeight: "8px", marginBottom: "40px",  marginTop: "100px"
		},
		bc: {
			display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"
		},
		solution: {
			display: "flex", 
			justifyContent: "center",
			flexWrap: "wrap"
			
		}

	})


	useEffect(() => {
		window.addEventListener("resize", () => {
			resizing()
			screenWidthChange();
		})
		
		return () => window.removeEventListener("resize", () => {resizing() ; screenWidthChange();});
	}, [])	

	useEffect(() => {
		// console.log(windowHeight, windowWidth)
		sideMargins()
		

		// screenWidthChange();
	}, [windowHeight, windowWidth])

	useEffect( () => {
	
	}, [styles])

	

	return (
		<ContextServices.Provider value={{
			test, 
			setTest,
			getTest,
			styles,
			windowWidth,
			margins,
			screenWidth,
			windowHeight,
			modal
		}}>

			{props.children}
		</ContextServices.Provider>
		)
}