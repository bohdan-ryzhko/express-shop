import sass from "./CloseBtn.module.scss";
import { MdClose } from 'react-icons/md';

export const CloseBtn = ({ onClick }) => (
	<button onClick={onClick} className={sass.closeBtn} type="button">
		<MdClose size={25} />
	</button>
);