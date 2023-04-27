import { SelectCode } from "components/SelectCode/SelectCode";
import sass from "./FormOrder.module.scss";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

import { fetchCountries } from "services/fetchCountries";

import { initialValues } from "services/initialValues";
import { useSelector } from "react-redux";

export const FormOrder = () => {
	const [countries, setCountries] = useState([]);
	const [selectedCode, setSelectedCode] = useState(null);
	const [codeValue, setCodeValue] = useState("");

	const order_list = useSelector(state => {
		return state.orderList.orderList.map(({ _id, id, name_ua, quantityProduct, price }) => {
			return { _id, id, name_ua, quantityProduct, price }
		});
	});

	const total_price = order_list.reduce((total, { price }) => total += Number(price), 0);

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
		console.log({
			...values,
			phone_number: codeValue,
			order_list,
			total_price,
		});
		const dataOrder = {
			...values,
			phone_number: codeValue,
			order_list,
			total_price,
		}
		fetch("http://localhost:3000/api/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(dataOrder)
		})
			.then(res => res.json())
			.then(data => {
				if(data.status !== 200) return Promise.reject(data)
				console.log(data);
			})
			.catch(error => {
				console.log(error);
			})
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
					<label htmlFor="last_name">
						<span className={sass.orderPrompt}>Прізвище</span>
						<Field id="last_name" name="last_name" />
					</label>
					<label htmlFor="surname">
						<span className={sass.orderPrompt}>По батькові</span>
						<Field id="surname" name="surname" />
					</label>
					<div className={sass.selectPhone}>
						<SelectCode
							className={sass.select}
							selectedCode={selectedCode}
							setSelectedCode={setSelectedCode}
							countries={countries && countries}
						/>
						<label htmlFor="phone_number">
						<span className={sass.orderPrompt}>Номер телефону</span>
							<Field
								value={codeValue}
								onChange={changePhone}
								className={sass.inputPhone}
								id="phone_number"
								type="tel"
								name="phone_number"
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
					<label htmlFor="street">
						<span className={sass.orderPrompt}>ВУЛИЦЯ, БУДИНОК, КВАРТИРА</span>
						<Field id="street" type="text" name="street" placeholder="" />
					</label>
					<label htmlFor="post_index">
						<span className={sass.orderPrompt}>ПОШТОВИЙ ІНДЕКС</span>
						<Field id="post_index" type="text" name="post_index" placeholder="" />
					</label>
					<Field className={sass.formComment} component="textarea" type="text" name="comment" placeholder="Залиште свій коментарій..." />
					<button className={sass.submitBtn} type="submit">Відправити заказ</button>
				</Form>
			</Formik>
		</>
	)
}
