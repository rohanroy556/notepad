import { SetExpressionType, ValueType } from "../model";
import { ArrayOperationUtility } from "./array-operation.utility";
import { CommonUtility } from "./common.utility";

export class SetOperationUtility extends ArrayOperationUtility {
	static [SetExpressionType.$allElementsTrue](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values.every(v => CommonUtility.isTruthy(v));
	}

	static [SetExpressionType.$anyElementTrue](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values.some(v => CommonUtility.isTruthy(v));
	}

	static [SetExpressionType.$setDifference](a: Array<ValueType>, b: Array<ValueType> = []) {
		const setA = new Set(CommonUtility.toArray(a));
		const setB = new Set(CommonUtility.toArray(b));
		return [...setA].filter(v => !setB.has(v));
	}

	static [SetExpressionType.$setEquals](values: Array<Array<ValueType>>) {
		const setValues = values.map(v => new Set(v));
		for (let i = 0; i < setValues.length - 1; i++) {
			const a = setValues[i];
			const b = setValues[i + 1];
			if (a.size !== b.size) return false;
			for (const j of a) {
				if (!b.has(j)) return false;
			}
		}
		return true;
	}

	static [SetExpressionType.$setIntersection](a: Array<ValueType>, b: Array<ValueType> = []) {
		const setA = new Set(CommonUtility.toArray(a));
		const setB = new Set(CommonUtility.toArray(b));
		return [...setA].filter(v => setB.has(v));
	}

	static [SetExpressionType.$setIsSubset](a: Array<ValueType>, b: Array<ValueType> = []) {
		const setA = new Set(CommonUtility.toArray(a));
		const setB = new Set(CommonUtility.toArray(b));
		return setA.size > setB.size && [...setB].every(v => setA.has(v));
	}

	static [SetExpressionType.$setUnion](values: Array<Array<ValueType>>) {
		return [...new Set(values.reduce((r, v) => [...r, ...v], []))];
	}
}
