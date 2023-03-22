import { CategoryLink } from "./CategoryLink/CategoryLink";
import sass from "./CategoryList.module.scss";

export const CategoryList = ({ items }) => {
	return (
		<nav className={sass.navigation}>
			<ul className={sass.category__list}>
				{items.map(({ linkName, id }) => <li key={id} className={sass.category__item}>
					<CategoryLink>{linkName}</CategoryLink>
				</li>)}
			</ul>
		</nav>
	)
}