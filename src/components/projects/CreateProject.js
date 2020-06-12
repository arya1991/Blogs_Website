import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import {Redirect, withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom'


class CreateProject extends Component {
	state = {
		title: '',
		image: '',
		content: ''
	}

	handleChange =(e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	
	handleSubmit =(e) => {
		e.preventDefault();
		//console.log(this.state);
		this.props.createProject(this.state)
		this.props.history.push('../');
	}


	
	render () {	
		const {auth} = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="createForm">
					<h5 className="grey-text text-darken-3">Enter your details</h5>
					<div className="input-field">
						<i class="material-icons prefix">title</i>
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange = {this.handleChange}/>
					</div>
					<div className="input-field">
						<i class="material-icons prefix">description</i>
						<label htmlFor="content">Content</label>
						<textarea className="materialize-textarea" rows = "10" cols = "60" name = "description" id="content" onChange = {this.handleChange}>
						</textarea>
					</div>
					<div className="input-field">
						<i class="material-icons prefix">highlight_alt</i>
						<label htmlFor="summary">Highlights</label>
						<textarea className="materialize-textarea" rows = "10" cols = "60" name = "description" id="summary" onChange = {this.handleChange}>
						</textarea>
					</div>
					<div className="input-field">
						<i class="material-icons prefix">add_photo_alternate</i>
						<label htmlFor="photo">Path to the image</label>
						<input type="text" id="photo" onChange = {this.handleChange}></input>
					</div>
					
					<div className="input-field">
						<button className="btn waves-effect waves-light black">POST</button>
					</div>
				</form>
				<div className="input-field">
						<button className="waves-effect waves-light btn black goback">
							<NavLink to="/../" className="goback"></NavLink>
						</button>
				</div>
				
			
				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createProject : (project) => dispatch(createProject(project))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateProject))

