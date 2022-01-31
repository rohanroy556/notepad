import { CommonUtility } from ".";
import { ConditionalExpressionType, ValueType } from "../model";
import { ComparisonOperationUtility } from "./comparison-operation.utility";

export class ConditionalOperationUtility extends ComparisonOperationUtility {
	static [ConditionalExpressionType.$cond](...values: Array<ValueType>): ValueType {
		let i = 0;
		while (i < values.length - 1) {
			if (CommonUtility.isTruthy(values[i])) {
				return values[i + 1];
			}
			i += 2;
		}
		if (i === values.length - 1) {
			return values[i];
		}
		return null;
	}

	static [ConditionalExpressionType.$ifNull](...values: Array<ValueType>): ValueType {
		const replacement = values.pop();
		for (const value of values) {
			if (CommonUtility.isDefined(value)) {
				return value;
			}
		}
		return replacement;
	}
}
