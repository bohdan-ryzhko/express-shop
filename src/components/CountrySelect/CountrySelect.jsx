// import { useState } from 'react';
import Select from 'react-select/creatable';

export const CountrySelect = ({ countries }) => {

	// const [selectCode, setSelectCode] = useState(null);

	const options = countries.map(({ flags, idd, name }) => ({
		label: <div>
			<img width={30} src={flags.svg} alt={flags.alt} />
			<p>{idd.root} ({idd.suffixes})</p>
			{/* <p>{name.common}</p> */}
		</div>
	}));

	// const handleSelectCode = async (obj) => {
		
	// }

	console.log(countries);
	return <Select options={options && options} />
}