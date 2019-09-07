import * as Yup from 'yup'

export const AdminValidationSchema = Yup.object().shape({
	username: Yup.string()
		.min(3, 'Username has to be at least 3 characters.')
		.required('Username is required.'),
	shopName: Yup.string()
		.min(3, 'Shop name has to be at least 3 characters.')
		.required('Shop name is required.'),
	email: Yup.string()
		.email('Email is not valid.')
		.required('Email is required.'),
	password: Yup.string()
		.min(6, 'Password has to be at least 6 characters.')
		.required('Password is required.'),
	confirm: Yup.string()
		.oneOf([Yup.ref('password')], 'Passwords do not match.')
		.required('Password confirmation is required.'),
	buyerAccount: Yup.boolean()
})

export const StoreValidationSchema = Yup.object().shape({
	username: Yup.string()
		.min(3, 'Username has to be at least 3 characters.')
		.required('Username is required.'),
	email: Yup.string()
		.email('Email is not valid.')
		.required('Email is required.'),
	password: Yup.string()
		.min(6, 'Password has to be at least 6 characters.')
		.required('Password is required.'),
	confirm: Yup.string()
		.oneOf([Yup.ref('password')], 'Passwords do not match.')
		.required('Password confirmation is required.'),
	vendorAccount: Yup.boolean(),
	shopName: Yup.string().when('vendorAccount', {
		is: true,
		then: Yup.string()
			.min(3, 'Shop name has to be at least 3 characters.')
			.required('Shop name is required.')
	})
})
