import sass from "./LoadMoreButton.module.scss";

export const LoadMoreButton = ({ handleClick, text }) => {
	return <button className={sass.loadMore} onClick={handleClick}>{text}</button>
}