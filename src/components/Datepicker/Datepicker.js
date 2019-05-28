import React, { useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import MaterialIcon from 'material-icons-react'
import './Datepicker.scss'

const Datepicker = props => {
	const {
		completed,
		dueDate,
		onDueDateChange,
		id
	} = props
	
	const [datepickerShown, setDatepickerShown] = useState(false)
	
	const dueDateIcon = (
		<MaterialIcon
			icon="calendar_today"
			size={16}
			color={completed ? '#757380' : '#202020'}
		/>
	)
	
	return (
		<SingleDatePicker
			date={dueDate}
			onDateChange={date => onDueDateChange(date)}
			focused={datepickerShown}
			onFocusChange={({ focused }) => setDatepickerShown(focused)}
			id={`datepicker-${id}`}
			displayFormat="MMM DD"
			numberOfMonths={1}
			customInputIcon={dueDateIcon}
			inputIconPosition="after"
			placeholder={null}
			disabled={completed}
			hideKeyboardShortcutsPanel
			noBorder
			readOnly
			small
		/>
	)
}

export default Datepicker
