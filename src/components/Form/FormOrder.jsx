import sass from "./FormOrder.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { initialValues } from "../../constants/initialForm";

const schema = yup.object().shape({
	userName: yup.string().required("Поле с именем обязательно"),
	userNumber: yup.string().required("Поле с телефоном обязательно").min(10).max(10),
});

export const FormOrder = () => {

	const submitForm = (values, actions) => {
		console.log(values);
	}

	return (
		<Formik
			validationSchema={schema}
			onSubmit={submitForm}
			initialValues={initialValues}>

			<Form className={sass.formOrder}>
				<label htmlFor="userName">
					<Field id="userName" type="text" name="userName" placeholder="Ім'я" />
					<ErrorMessage
						component="div"
						name="userName" />
				</label>
				<label htmlFor="userNumber">
					<Field id="userNumber" type="number" name="userNumber" placeholder="050-111-11-11" />
					<ErrorMessage
						component="div"
						name="userNumber" />
				</label>
				<button type="submit">Оформити замовлення</button>
			</Form>

		</Formik>
	)
}