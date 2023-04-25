import { SelectCode } from "components/SelectCode/SelectCode";
import sass from "./FormOrder.module.scss";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { fetchCountries } from "services/fetchCountries";

import { initialValues } from "services/initialValues";

export const FormOrder = () => {
	const [countries, setCountries] = useState([]);
	const [selectedCode, setSelectedCode] = useState(null);
	const [codeValue, setCodeValue] = useState("");

	useEffect(() => {
		if (selectedCode) {
			fetchCountries(`https://restcountries.com/v3.1/name/${selectedCode.value}`)
				.then(data => {
					if (!data) {
						return Promise.reject(data);
					}
					
					setCodeValue(data.data[0].idd.root + data.data[0].idd.suffixes[0])
				})
				.catch(error => console.log(error));
		}
	}, [selectedCode]);

	useEffect(() => {
		fetchCountries("https://restcountries.com/v3.1/all?fields=name,flag,idd")
			.then(data => {
				if (!data) {
					return Promise.reject(data);
				}
				setCountries(data.data);
				console.log(data);
			})
			.catch(error => console.log(error));
	}, []);

	const changePhone = ({ currentTarget }) => {
		if (codeValue) {
			setCodeValue(prev => codeValue + prev + currentTarget.value)
		}
		setCodeValue(currentTarget.value);
	}

	const onSubmit = (values, { resetForm }) => {
		console.log({ ...values, phone: codeValue });
		setCodeValue("");
		resetForm();
	}

	return (
		<>
			<Formik onSubmit={onSubmit} initialValues={initialValues}>
				<Form className={sass.orderForm}>
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
					<div className={sass.selectPhone}>
						<SelectCode
							selectedCode={selectedCode}
							setSelectedCode={setSelectedCode}
							countries={countries && countries}
						/>
						<label htmlFor="phone">
						<span className={sass.orderPrompt}>Номер телефону</span>
							<Field
								value={codeValue}
								onChange={changePhone}
								className={sass.inputPhone}
								id="phone"
								type="tel"
								name="phone"
								placeholder=""
							/>
						</label>
					</div>
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
					<Field className={sass.formComment} component="textarea" type="text" name="comment" placeholder="" />
					<button type="submit">Відправити заказ</button>
				</Form>
			</Formik>
		</>
	)
}
