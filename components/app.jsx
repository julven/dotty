const App = () => {

	let { useContext, useEffect, useState, useRef } = React
	let {screenWidth, windowWidth, windowHeight } = useContext(ContextServices)
 	let [load, setLoad] = useState(true);

 

 	let [s] = useState({
 		loader: {
 			backgroundColor: "#17465a",
 			display: "flex", 
 			justifyContent: "center", 
 			height: windowHeight , 
 			alignItems: "center",

 		}
 	})

 	useEffect( () => {
 		let imgLoad = new Image()
		 imgLoad.onload = e => {
          	setLoad(false)
        }
        imgLoad.src = "img/main.jpg";


	}, [])



 	if(load) {

 		return (
 			<div style={{...s.loader}}>
 				<div className="loader"></div>
 				<style>{`
					.loader {
					  border: 16px solid #f3f3f3; /* Light grey */
					  border-top: 16px solid #3498db; /* Blue */
					  border-radius: 50%;
					  width: 120px;
					  height: 120px;
					  animation: spin 2s linear infinite;
					  margin-bottom: 100px;
					}

					@keyframes spin {
					  0% { transform: rotate(0deg); }
					  100% { transform: rotate(360deg); }
					}
 				`}</style>
 			</div>
 		)
 	}
	return (
		<div style={{ height: 1}}>
			<Navbar />
			<Main  />
			<div style={{ position: "relative"}}>
				<BackgroundChalleges  />
				<Solutions />
				<Slideshow />
			</div>
			<Modal />
		</div>
	)
}