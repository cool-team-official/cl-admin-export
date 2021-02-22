import { export_json_to_excel } from "./export2excel";

export function currentDate() {
	let d = new Date();

	return {
		year: d.getFullYear(),
		month: d.getMonth() + 1,
		day: d.getDate(),
		hour: d.getHours(),
		minu: d.getMinutes(),
		sec: d.getSeconds(),
	};
}

export const export_json_to_excel;
