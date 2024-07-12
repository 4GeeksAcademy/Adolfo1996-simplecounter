import React from "react";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<div class="container text-center reloj" >
				<div class="row">
					<div class="col cuadritos">
						<i className="far fa-clock"></i>
					</div>
					<div class="col cuadritos">
						{props.digito6}
					</div>
					<div class="col cuadritos">
						{props.digito5}
					</div>
					<div class="col cuadritos">
						{props.digito4}
					</div>
					<div class="col cuadritos">
						{props.digito3}
					</div>
					<div class="col cuadritos">
						{props.digito2}
					</div>
					<div class="col cuadritos">
						{props.digito1}
					</div>
				</div>
			</div>


		</div>
	);
};

export default Home;
