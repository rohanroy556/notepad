import { ComparisonExpressionType, ValueType } from "../model";
import { CommonUtility } from "./common.utility";
import { LogicalOperationUtility } from "./logical-operation.utility";

export class ComparisonOperationUtility extends LogicalOperationUtility {
	static [ComparisonExpressionType.$cmp](a: ValueType, b: ValueType): number {
		return CommonUtility.compare(a, b);
	}

	static [ComparisonExpressionType.$eq](a: ValueType, b: ValueType): boolean {
		return CommonUtility.compare(a, b) === 0;
	}

	static [ComparisonExpressionType.$gt](a: ValueType, b: ValueType): boolean {
		return CommonUtility.compare(a, b) > 0;
	}

	static [ComparisonExpressionType.$gte](a: ValueType, b: ValueType): boolean {
		return CommonUtility.compare(a, b) >= 0;
	}

	static [ComparisonExpressionType.$in](a: ValueType, b: string | Array<ValueType>): boolean {
		return [...b].findIndex(e => e == a) >= 0;
	}

	static [ComparisonExpressionType.$lt](a: ValueType, b: ValueType): boolean {
		return CommonUtility.compare(a, b) < 0;
	}

	static [ComparisonExpressionType.$lte](a: ValueType, b: ValueType): boolean {
		return CommonUtility.compare(a, b) <= 0;
	}

	static [ComparisonExpressionType.$ne](a: ValueType, b: ValueType): boolean {
		return CommonUtility.compare(a, b) !== 0;
	}

	static [ComparisonExpressionType.$nin](a: ValueType, b: string | Array<ValueType>): boolean {
		return [...b].findIndex(e => e == a) < 0;
	}
}
