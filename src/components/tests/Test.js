import React from 'react'
import { Formik, Form, Field } from 'formik'
import {
	TextField,
	AvailableField,
	PriceField,
	CategorySelect,
	FileUpload
} from './CustomFields'
import MenuItem from '@material-ui/core/MenuItem'

const Test = () => (
	<div>
		<Formik
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 400)
			}}
		>
			{({ isSubmitting, setFieldValue, ...props }) => (
				<Form>
					<Field name="name" component={TextField} />
					<br />
					<Field name="description" component={TextField} />
					<br />
					<Field name="available" component={AvailableField} />
					<br />
					<Field name="price" component={PriceField} />
					<br />
					<Field name="category" component={CategorySelect}>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Field>
					<br />
					<Field name="image" component={FileUpload} />
					<br />
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	</div>
)

export default Test

/* 

TODO:

1) input type="number" that uses NumberFormat with styles
2) input type="number"
3) select with styles
4) validation global
5) validation individual
6) delegating state management to formik

*/
