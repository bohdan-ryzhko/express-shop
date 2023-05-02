import sass from "./ErrorPage.module.scss";

export const ErrorPage = ({ title }) => {
	return (
		<main>
			<h2 className={sass.errorTitle}>Упс, сторінка "{title}" не знайдена</h2>
			<div className={sass.errorImg}></div>
		</main>
	)
}