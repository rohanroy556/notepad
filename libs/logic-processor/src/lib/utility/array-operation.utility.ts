import { CommonUtility } from "./common.utility";
import { ArrayExpressionType, ValueType } from "../model";
import { DateOperationUtility } from "./date-operation.utility";

export class ArrayOperationUtility extends DateOperationUtility {
	static [ArrayExpressionType.$arrayElemAt](values: Array<ValueType>, index: ValueType) {
		values = CommonUtility.toArray(values);
		index = CommonUtility.toNumber(index);
		return values[index] || null;
	}

	static [ArrayExpressionType.$arrayToObject](values: Array<[ValueType, ValueType]>) {
		const result = {}
		values.forEach(([k, v]) => result[String(k)] = v);
		return result;
	}

	static [ArrayExpressionType.$concatArrays](values: Array<Array<ValueType>>) {
		values = CommonUtility.toArray(values);
		return values.reduce((r, v) => [...r, ...v], []);
	}

	// static [ArrayExpressionType.$every]() {}

	// static [ArrayExpressionType.$filter]() {}

	static [ArrayExpressionType.$indexOfArray](values: Array<ValueType>, search: ValueType, start?: ValueType, end?: ValueType) {
		values = CommonUtility.toArray(values);
		start = CommonUtility.toNumber(start) || 0;
		end = CommonUtility.toNumber(end) || values.length;
		return values.slice(start, end).findIndex(v => v == search);
	}

	static [ArrayExpressionType.$isArray](values: ValueType | Array<ValueType>) {
		return Array.isArray(values);
	}

	// static [ArrayExpressionType.$map]() {}

	// static [ArrayExpressionType.$none]() {}

	static [ArrayExpressionType.$objectToArray](value: ValueType) {
		return typeof value === 'object' ? Object.entries(value) : [];
	}

	static [ArrayExpressionType.$range](start: ValueType, end: ValueType, step?: ValueType) {
		start = CommonUtility.toNumber(start);
		end = CommonUtility.toNumber(end);
		step = CommonUtility.toNumber(step) || 1;
		return Array(Math.ceil((end - start) / step)).fill(start).map((x, y) => x + y * Number(step));
	}

	// static [ArrayExpressionType.$reduce]() {}

	static [ArrayExpressionType.$reverseArray](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values.reverse();
	}

	static [ArrayExpressionType.$size](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values.length;
	}

	static [ArrayExpressionType.$slice](values: Array<ValueType>, start?: ValueType, end?: ValueType) {
		values = CommonUtility.toArray(values);
		start = CommonUtility.toNumber(start) || 0;
		end = CommonUtility.toNumber(end) || values.length;
		return values.slice(start, end);
	}

	// static [ArrayExpressionType.$some]() {}
}
