let SlideshowPhotography = () => {

	let { useEffect } = React
	let slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

useEffect( () => {
	showSlides(slideIndex);
}, [])

	return (
		<div>
			<div className="slideshow-container">
				 <a className="prev" onClick={()=>{plusSlides(-1)}}>&#10094;</a>
			  	<a className="next" onClick={()=>{plusSlides(1)}}>&#10095;</a>
			 
			  <div className="mySlides fade">
			    <div className="numbertext">1 / 3</div>
			    <img src="img/img_lights_wide.jpg"  style={{width:"100%"}}/>
			    
			  </div>

			  <div className="mySlides fade">
			    <div className="numbertext">2 / 3</div>
			    <img src="img/img_mountains_wide.jpg"  style={{width:"100%"}}/>
			    
			  </div>

			  <div className="mySlides fade">
			    <div className="numbertext">3 / 3</div>
			    <img src="img/img_nature_wide.jpg" style={{width:"100%"}}/>
			    
			  </div>

			
			 
			</div>
			<br/>

			<div style={{textAlign:"center"}}>
			  <span className="dot" onClick={() => {currentSlide(1)}}></span>
			  <span className="dot" onClick={() => {currentSlide(2)}}></span>
			  <span className="dot" onClick={() => {currentSlide(3)}}></span>
			</div>
		
		<style jsx="true">
			{`

			

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.prev {
		left: 0;
  border-radius: 3px 0 0 3px;
}
.next {
	
	right: 0;
  border-radius: 3px 0 0 3px;
}


/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
			`}
		</style>
	</div>

	)
}