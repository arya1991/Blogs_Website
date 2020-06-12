import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProjectList = ({projects}) => {
	return (
		<div className="project-list section">
			{ projects && projects.map(project => {
				return (
					<Link to={'/project/' + project.id}  key={project.id} >
						<ProjectSummary project={project}/>
					</Link>
				)
				
			}) }
		</div>	
		
	)
	
}

export default ProjectList