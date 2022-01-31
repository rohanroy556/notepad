import { CommonUtility } from "./common.utility";
import { LogicalExpressionType, ValueType } from "../model";
import { AccumulatorOperationUtility } from "./accumulator-operation.utility";

export class LogicalOperationUtility extends AccumulatorOperationUtility {
	static [LogicalExpressionType.$and](...values: Array<ValueType>): boolean {
		return values.every(v => CommonUtility.isTruthy(v));
	}

	static [LogicalExpressionType.$or](...values: Array<ValueType>): boolean {
		return values.some(v => CommonUtility.isTruthy(v));
	}

	static [LogicalExpressionType.$not](value: ValueType): boolean {
		return !CommonUtility.isTruthy(value);
	}
}
