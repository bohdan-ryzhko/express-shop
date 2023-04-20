import { CountrySelect } from "components/CountrySelect/CountrySelect";
import sass from "./FormOrder.module.scss";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { initialValues } from "services/initialValues";

export const FormOrder = () => {

	const [countries, setCountries] = useState([]);

	const onSubmit = (value, { resetForm }) => {
		console.log(value);
		resetForm();
	}

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all?fields=name,flags,idd")
			.then(res => res.json())
			.then(data => setCountries(data));
	}, []);

	return (
		<>
			<Formik onSubmit={onSubmit} initialValues={initialValues}>
				<Form>
					<label htmlFor="name">
						<span className={sass.orderPrompt}>Ім'я</span>
						<Field id="name" name="name" />
					</label>
					<label htmlFor="lastName">
						<span className={sass.orderPrompt}>Призвіще</span>
						<Field id="lastName" name="lastName" />
					</label>
					<label htmlFor="lastName">
						<span className={sass.orderPrompt}>По батькові</span>
						<Field id="lastName" name="middleName" />
					</label>
					<CountrySelect countries={countries && countries} />
					<label htmlFor="phone">
						<span className={sass.orderPrompt}>Номер телефону</span>
						<Field id="phone" type="tel" name="phone" placeholder="" />
					</label>
					<label htmlFor="email">
						<span className={sass.orderPrompt}>Ел. адреса</span>
						<Field id="email" type="email" name="email" placeholder="" />
					</label>
					<label htmlFor="country">
						<span className={sass.orderPrompt}>Країна</span>
						<Field id="country" type="text" name="country" placeholder="" />
					</label>
					<label htmlFor="state">
						<span className={sass.orderPrompt}>КРАЙ/ОБЛАСТЬ/РЕГІОН</span>
						<Field id="state" type="text" name="state" placeholder="" />
					</label>
					<label htmlFor="city">
						<span className={sass.orderPrompt}>Місто</span>
						<Field id="city" type="text" name="city" placeholder="" />
					</label>
					<label htmlFor="address">
						<span className={sass.orderPrompt}>ВУЛИЦЯ, БУДИНОК, КВАРТИРА</span>
						<Field id="address" type="text" name="address" placeholder="" />
					</label>
					<label htmlFor="postIndex">
						<span className={sass.orderPrompt}>ПОШТОВИЙ ІНДЕКС</span>
						<Field id="postIndex" type="text" name="postIndex" placeholder="" />
					</label>
					<Field component="textarea" type="text" name="comment" placeholder="" />
					<button type="submit">Відправити заказ</button>
				</Form>
			</Formik>
		</>
	)
}
