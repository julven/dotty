let Main = () => {

	let { useContext, useEffect, useState } = React
	let { 
		windowWidth,
		margins,
		windowHeight,
		modal
	} = useContext(ContextServices)

	let openModal = () => {
		modal.current.style.display = "block";
	}

	useEffect(() => {
		console.log(windowWidth)
	}, [margins, windowWidth])

	return (
		<div id="top">
			<div className="main " >
			
				<div className="main-height main-title main-title-margin" >
					<div  className="main-color">
						<h2  >THE</h2>
						<h1 >WHITESUNDAYS</h1>
						<p>A MOVIE THAT'S WAITING TO BE WRITTEN</p>
					</div>
					
				</div>

				<div className="main-height  main-play">
					<img src="img/mainplay.png" className="main-play-image" onClick={openModal}/>
				</div>

				
				{/*<img src="img/main.jpg" style={{width: "100%", visibility: "hidden"}}/>*/}
				
				
				
			</div>

			<style jsx="true">{`
				.main {
					
					
					background-image: url('img/main.jpg');
					background-repeat: no-repeat;
					background-size: cover;
					background-position: center top;

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
					line-height: 1px;
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