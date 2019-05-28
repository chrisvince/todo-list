import React from 'react'
import FilteredTodoList from '../containers/FilteredTodoList'
import CompletedSection from './CompletedSection'

const TodoListSection = props => {
	return (
		<section>
			<div
				className="container slim"
			>
				<FilteredTodoList
					title="New Tasks"
					filter="SHOW_NEW"
				/>
				<FilteredTodoList
					title="All Tasks"
					filter="SHOW_NOT_NEW"
				/>
				<CompletedSection />
			</div>
		</section>
	)
}

export default TodoListSection
