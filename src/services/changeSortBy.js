const ASC = "asc";
const DESC = "desc"

export const changeSortBy = prev => {
	switch (prev) {
		case ASC:
			return DESC;
		case DESC:
			return ASC;
		default:
			return DESC
	}
}