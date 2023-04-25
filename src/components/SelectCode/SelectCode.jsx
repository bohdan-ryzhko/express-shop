import Select from 'react-select';
import sass from "./SelectCode.module.scss";

export const SelectCode = ({ countries = [], setSelectedCode, selectedCode }) => {

	const options = countries.map(({ idd, name, flag }) => ({
		label: flag + " " + idd.root + idd.suffixes[0] + " " + name.official,
		value: name.official
	}));

	return (
		<>
			<Select
				className={sass.select}
				options={options}
				value={selectedCode}
				onChange={setSelectedCode}
				labelledBy="Select"
			/>
		</>
	)
}