//responsibe for each individual page that we get

import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import {NavLink} from 'react-router-dom'

const ProjectDetails = (props) => {
  const { project,auth } = props;
  const id = props.match.params.id;
  
  if (!auth.uid) return <Redirect to='/signin' />	
  if (project) {
    return (
		<div className="container ipoem">
			<div className="row">
				<div className="col s12 m6 standout">
					<h1>{project.title}</h1>
					<p className="isum"><text className="ihigh">Highlight</text>: {project.summary}</p>
				</div>
				<div className="col s12 m6">
					<img src={project.photo} className="iphoto"></img>
				</div>
			</div>
			<div>
				<p className="icontent">{project.content}</p>
			</div>
			<div className="idetails">
				<p>Posted by {project.authorFirstName} {project.authorLastName}</p>
				<p>{moment(project.createdAt.toDate()).calendar()}</p>
			</div>
			<div className="ihome">
				<NavLink to='../'><a className="btn-small black">HOME</a></NavLink>
			</div>
			
		</div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

// {project.photo}    {project.title}    {project.content}  {project.summary}   {project.authorFirstName} {project.authorLastName}  {moment(project.createdAt.toDate()).calendar()}



const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
	auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)

