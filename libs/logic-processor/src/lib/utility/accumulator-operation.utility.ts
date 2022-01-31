import { AccumulatorExpressionType, ValueType } from "../model";
import { CommonUtility } from "./common.utility";
import { StringOperationUtility } from "./string-operation.utility";

export class AccumulatorOperationUtility extends StringOperationUtility {
	static [AccumulatorExpressionType.$addToSet](values: Array<ValueType>, item: ValueType) {
		const setValues = new Set(CommonUtility.toArray(values));
		setValues.add(item);
		return [...setValues];
	}

	static [AccumulatorExpressionType.$avg](values: Array<ValueType>) {
		return CommonUtility.arraySum(values) / values.length;
	}

	static [AccumulatorExpressionType.$count](values: Array<ValueType>) {
		const setValues = new Set(CommonUtility.toArray(values));
		return setValues.size;
	}

	static [AccumulatorExpressionType.$first](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values[0] || null;
	}

	static [AccumulatorExpressionType.$last](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values[values.length - 1] || null;
	}

	static [AccumulatorExpressionType.$max](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values.reduce((m, v) => Math.max(CommonUtility.toNumber(m), CommonUtility.toNumber(v)), Number.MIN_VALUE);
	}

	static [AccumulatorExpressionType.$mergeObjects](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values
			.filter(v => typeof v === 'object')
			.map(v => v as Record<string, ValueType>)
			.reduce((r, v) => ({ ...r, ...v }), {});
	}

	static [AccumulatorExpressionType.$min](values: Array<ValueType>) {
		values = CommonUtility.toArray(values);
		return values.reduce((m, v) => Math.min(CommonUtility.toNumber(m), CommonUtility.toNumber(v)), Number.MAX_VALUE);
	}

	static [AccumulatorExpressionType.$push](values: Array<ValueType>, item: ValueType) {
		values = CommonUtility.toArray(values);
		values.push(item);
		return values;
	}

	static [AccumulatorExpressionType.$sum](values: Array<ValueType>) {
		return CommonUtility.arraySum(values);
	}
}
