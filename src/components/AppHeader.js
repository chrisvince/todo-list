import React from 'react'
import AddTodo from '../containers/AddTodo'

const AppHeader = props => {
	return (
		<section>
			<div
				className="container appHeaderContainer"
			>
				<h1
					className="appHeader"
				>
					Listicles
				</h1>
				<h2
					className="todoListName"
				>
					Marketing Content
				</h2>
				
				<div
					className="container slim"
				>
					<AddTodo />
				</div>
			</div>
		</section>
	)
}

export default AppHeader
