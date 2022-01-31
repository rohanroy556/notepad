export class CommonUtility {
	static isDefined(value: unknown): boolean {
		return !!value || CommonUtility.isNumeric(value);
	}

	static isTruthy(data: unknown): boolean {
		return Array.isArray(data) && data.length === 0 ? false : !!data;
	}

	static isNumeric(value: unknown): boolean {
    return !isNaN(parseFloat(String(value))) && isFinite(Number(value));
	}

	static toNumber(value: unknown): number {
		return CommonUtility.isNumeric(value) ? Number(value) : 0;
	}

	static toArray<T>(value: T | Array<T>): Array<T> {
		return Array.isArray(value) ? value : [value];
	}

	static arraySum<T>(value: T | Array<T>): number {
		value = CommonUtility.toArray(value);
		return value.map(v => CommonUtility.toNumber(v)).reduce((s, v) => s + v, 0);
	}

	static compare(a: unknown, b: unknown): number {
		if (typeof a === 'string' && !CommonUtility.isNumeric(a) || typeof b === 'string' && !CommonUtility.isNumeric(b)) {
			return String(a).localeCompare(String(b));
		}
		a = CommonUtility.isNumeric(a), b = CommonUtility.isNumeric(b);
		return a > b ? 1 : a < b ? -1 : 0;
	}
}
