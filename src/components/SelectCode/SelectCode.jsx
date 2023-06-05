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
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						width: 140,
						borderColor: state.isFocused ? "#454545" : "#cccccc",
						boxShadow: state.isSelected ? "#454545" : "#cccccc",
						outline: state.isFocused ? "#454545" : "#cccccc",
						borderTopLeftRadius: 10,
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
						borderBottomLeftRadius: 10,
					})
				}}
				options={options}
				value={selectedCode}
				onChange={setSelectedCode}
				labelledBy="Select"
			/>
		</>
	)
}