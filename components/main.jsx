let Main = () => {

	let { useContext, useEffect, useState, useRef } = React
	let { 
		windowWidth,
		margins,
		windowHeight,
		modal,
		setElPos
	} = useContext(ContextServices)
	let pos = useRef(null)

	let openModal = () => {
		modal.current.style.display = "block";
	}

	useEffect(() => {
		console.log(windowWidth)
	}, [margins, windowWidth])

	useEffect(() => {
		console.log("top",pos.current.offsetTop)
	}, [])

	return (
		<div id="top" ref={pos} >
			<div >
				
				
					<img src="img/main.jpg" className="main-image"/>
				

				<div className="main-height main-title main-title-margin" >
					<div  className=" main-color">
						<h2  style={{fontSize: "2.9vmax", }}>THE</h2>
						<h1 style={{fontSize: "4.4vmax", }}>WHITESUNDAYS</h1>
						<p style={{fontSize: "1.7vmax"}}>A MOVIE THAT'S WAITING TO BE WRITTEN</p>
					</div>
					
				</div>

				<div className="main-height  main-play">
					<img src="img/mainplay.png" className="main-play-image" onClick={openModal}/>
				</div>
				
			</div>

			<style jsx="true">{`
			
				.main-image {
					
					width: 100%;
					min-height: 1372px;

					position: absolute;
					object-fit: cover;

				


				}
				.main-height {
					height: ${windowHeight}px;
					min-height: 400px;

				}
				.abs-height {
					height: ${windowHeight}px;
					position: absolute;
					width: 100%;
				}
				.main-title {
					display: flex;
					align-items: center;
					position: absolute;
					justify-content: start;
					
					
					padding-top: ${windowWidth < 900 ? "90px" : "0px"}
				}
				.main-title-margin {
					
					margin-left: ${margins};
					margin-right: ${margins};
				}
				.main-title h2 {
					margin-left: 35px;
				}
				.main-title h1 {
					font-size: 43px;
				}
				.main-color {
					color: white;
					line-height: 2px;
				}
				
				.main-play {
					display: flex;
					justify-content: center;
					align-items: center;


					
				}
				.main-play-image {
					width: 120px;
					height: 120px;
					padding-bottom: ${windowWidth < 900 ? "70px" : "0px"};
					cursor: pointer;
					z-index: 1
				}
				
			`}
			</style>
		</div>
	)
}