import { CommonUtility } from "./common.utility";
import { ArithmeticExpressionType, ValueType } from "../model";
import { DataAccessorOperationUtility } from "./data-accessor-operation.utility";

export class ArithmeticOperationUtility extends DataAccessorOperationUtility {
	static [ArithmeticExpressionType.$abs](value: ValueType): number {
		return Math.abs(CommonUtility.toNumber(value));
	}

	static [ArithmeticExpressionType.$add](...values: Array<ValueType>): number {
		return CommonUtility.arraySum(values);
	}

	static [ArithmeticExpressionType.$ceil](value: ValueType): number {
		return Math.ceil(CommonUtility.toNumber(value));
	}

	static [ArithmeticExpressionType.$divide](...values: Array<ValueType>): number {
		const newValues = values.map(v => CommonUtility.toNumber(v));
		const initial = newValues.splice(0, 1).pop();
		return newValues.reduce((d, v) => d / v, initial);
	}

	static [ArithmeticExpressionType.$exp](value: ValueType): number {
		return Math.exp(CommonUtility.toNumber(value));
	}

	static [ArithmeticExpressionType.$floor](value: ValueType): number {
		return Math.floor(CommonUtility.toNumber(value));
	}

	static [ArithmeticExpressionType.$ln](value: ValueType): number {
		return Math.log(CommonUtility.toNumber(value));
	}

	static [ArithmeticExpressionType.$log](value: ValueType, base = 10): number {
		return Math.log(CommonUtility.toNumber(value)) / Math.log(base);
	}

	static [ArithmeticExpressionType.$log10](value: ValueType): number {
		return Math.log10(CommonUtility.toNumber(value));
	}

	static [ArithmeticExpressionType.$mod](a: ValueType, b: ValueType): number {
		return CommonUtility.toNumber(a) % CommonUtility.toNumber(b);
	}

	static [ArithmeticExpressionType.$multiply](...values: Array<ValueType>): number {
		return values.map(v => CommonUtility.toNumber(v)).reduce((m, v) => m * v, 1);
	}

	static [ArithmeticExpressionType.$pow](a: ValueType, b: ValueType): number {
		return CommonUtility.toNumber(a) ** CommonUtility.toNumber(b);
	}

	static [ArithmeticExpressionType.$rand](): number {
		return Math.random();
	}

	static [ArithmeticExpressionType.$round](value: ValueType): number {
		return Math.round(CommonUtility.toNumber(value));
	}

	static [ArithmeticExpressionType.$sqrt](value: ValueType): number {
		return Math.sqrt(CommonUtility.toNumber(value));
	}

	static [ArithmeticExpressionType.$subtract](...values: Array<ValueType>): number {
		const newValues = values.map(v => CommonUtility.toNumber(v));
		const initial = newValues.splice(0, 1).pop();
		return newValues.reduce((s, v) => s - v, initial);
	}

	static [ArithmeticExpressionType.$trunc](value: ValueType): number {
		return Math.trunc(CommonUtility.toNumber(value));
	}
}
