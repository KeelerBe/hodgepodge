import * as Yup from 'yup'

const FormSchema = Yup.object().shape({
	image: Yup.string().required('Required'),
	productName: Yup.string().required('Required'),
	category: Yup.string().required('Required'),
	available: Yup.string().required('Required'),
	price: Yup.string().required('Required'),
	description: Yup.string().required('Required')
})

export default FormSchema
