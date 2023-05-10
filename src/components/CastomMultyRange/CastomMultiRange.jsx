import { ACCENT_COLOR } from "constants/accentColor";
import MultiRangeSlider from "multi-range-slider-react";

export const CastomMultiRange = ({ max, min, onChange }) => {
	return (
		<MultiRangeSlider
			max={max}
			min={min}
			ruler={false}
			label={true}
			preventWheel={false}
			minValue={min}
			maxValue={max}
			onChange={onChange}
			barInnerColor={ACCENT_COLOR}
			style={{
				boxShadow: "none",
				border: "none",
			}}
		/>
	)
}
