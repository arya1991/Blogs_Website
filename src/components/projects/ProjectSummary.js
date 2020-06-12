import React from 'react'
import moment from 'moment'
import {NavLink} from 'react-router-dom'

const ProjectSummary = ({project}) => {
  const initials = project.authorFirstName[0] + project.authorLastName[0]
  return (
	<div className="row poem">
		<div className="col s12 info">
			<div class="card horizontal small hoverable">
				<div class="card-image">
					<img src={project.photo}></img>
				</div>
				<div class="card-stacked">
					<div class="card-content">
						<div className="description">
							<h4 className="titlehome">{project.title}</h4>
							<p className="addresshome hide-on-small-only">{project.summary}</p>
						</div>
					</div>
					<div className="card-action">
						<span>
							<span>
								<p>Posted by {project.authorFirstName} {project.authorLastName} {moment(project.createdAt.toDate()).calendar()}</p> 
							</span>
						</span>
					</div>
				</div>
			</div>	
		</div>
	</div>

  )
}

export default ProjectSummary


// <div className="card z-depth-0 project-summary">
//       <div className="card-content grey-text text-darken-3">
//         <span className="card-title ">{project.name}</span>
// 		<p>{project.address}</p>
//         <p>Posted by The Net Ninja</p>
//         <p className="grey-text">3rd September, 2am</p>
//       </div>
//     </div>






//import React from 'react'
// import {Link} from 'react-router-dom'



// const ProjectSummary = ({project}) => {
//   return (
	  
// <div className="rec small">
// 	<div className="col s12 m7">
// 		<h2 className="header">{project.title}</h2>
// 		<div className="card horizontal">
// 			<div className="card-image">
// 				<img className="phuto" src={project.photo}></img>
// 			</div>
// 			<div className="card-stacked">
// 				<div className="card-content">
// 					<h6>{project.name}</h6>
// 					<p>{project.address}</p>
// 				</div>
// 				<div className="card-action">
// 					<a href='/'>More details</a>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
  
	 

	
	
//   )
// }

// export default ProjectSummary

// <div className="card record hoverable">
//     <div className="col s12 m7 record">
//     <div className="card horizontal">
//       <div className="card-image">
// 		  <img className="homeimgs " src={project.photo}></img>
//       </div>
//       <div className="card-stacked">
//         <div className="card-content">
// 		  <h6 className="namehome truncate"><i class="material-icons small prefix details">account_circle</i>  {project.title}</h6>
//           <p className="addresshome hide-on-small-only"><i class="material-icons small details">home</i>  {project.content}</p>
//         </div>
//         <div className="card-action">
//           <a href="#">MORE INFO</a>
//         </div>
//       </div>
//     </div>
//   </div>
// 	  </div>
