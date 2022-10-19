let Modal = () => {

	let { useContext, useEffect } = React

	let { modal, windowHeight } = useContext(ContextServices)

	let closeModal = () => {
		modal.current.style.display = "none"
	}

	


	useEffect( () => {
		window.onclick = e => {
			if(e.target.className == "modal") {
				modal.current.style.display = "none"
			}
		}

	}, [])

	return (
		<div>
			{/*<button id="myBtn">Open Modal</button>*/}

	
			<div id="myModal" className="modal" ref={modal}>

			
			  <div className="modal-content">
			    <span className="close" onClick={closeModal}>&times;</span>
			    <div style={{textAlign: "center", height: "400px"}}>
			    	<iframe style={{width: "100%", height: "90%"}}  frameBorder="0"  allowFullScreen
					src="https://www.youtube.com/embed/GB9zY0p0B24" >
					</iframe>
				</div>
			  </div>

			</div>


			<style jsx="true">
			{`
				.modal {
				  display: none; /* Hidden by default */
				  position: fixed; /* Stay in place */
				  z-index: 9999; /* Sit on top */
				  left: 0;
				  top: 0;
				  width: 100%; /* Full width */
				  height: 100%; /* Full height */
				  overflow: hidden; /* Enable scroll if needed */
				  background-color: rgb(0,0,0); /* Fallback color */
				  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
				}

				/* Modal Content/Box */
				.modal-content {
				  background-color: #fefefe;
				  margin: 7% auto; /* 15% from the top and centered */
				  padding: 0px 20px 25px 20px;
				  border: 1px solid #888;
				  width: 80%; /* Could be more or less, depending on screen size */
				}

				/* The Close Button */
				.close {
				  color: #aaa;
				  float: right;
				  font-size: 28px;
				  font-weight: bold;
				}

				.close:hover,
				.close:focus {
				  color: black;
				  text-decoration: none;
				  cursor: pointer;
				}

			`}
			</style>

		</div>

	)
}
