import { AccumulatorExpressionType, ArithmeticExpressionType, ArrayExpressionType, ComparisonExpressionType, ConditionalExpressionType, DataAccessorExpressionType, LogicalExpressionType, SetExpressionType } from "../enum";
import { ValueType } from "./value.type";

export type DataAccessorExpression =
	| { [DataAccessorExpressionType.$let]: Logic | [Logic] | [Logic, unknown] }
	| { [DataAccessorExpressionType.$getField]: Logic | [Logic] | [Logic, unknown] }
	| { [DataAccessorExpressionType.$setField]: [Logic, Logic] | [Logic, Logic, unknown] };

export type ArithmeticExpression =
	| { [ArithmeticExpressionType.$add]: Logic | Array<Logic> }
	| { [ArithmeticExpressionType.$subtract]: Logic | Array<Logic> }
	| { [ArithmeticExpressionType.$multiply]: Logic | Array<Logic> }
	| { [ArithmeticExpressionType.$divide]: Logic | Array<Logic> }
	| { [ArithmeticExpressionType.$mod]: [Logic, Logic] }
	| { [ArithmeticExpressionType.$abs]: Logic }
	| { [ArithmeticExpressionType.$ceil]: Logic }
	| { [ArithmeticExpressionType.$floor]: Logic }
	| { [ArithmeticExpressionType.$round]: Logic }
	| { [ArithmeticExpressionType.$trunc]: Logic }
	| { [ArithmeticExpressionType.$exp]: Logic }
	| { [ArithmeticExpressionType.$ln]: Logic }
	| { [ArithmeticExpressionType.$log]: [Logic, Logic] }
	| { [ArithmeticExpressionType.$log10]: Logic }
	| { [ArithmeticExpressionType.$pow]: [Logic, Logic] }
	| { [ArithmeticExpressionType.$sqrt]: Logic }
	// eslint-disable-next-line @typescript-eslint/ban-types
	| { [ArithmeticExpressionType.$rand]: {} };

export type ArrayExpression =
	| { [ArrayExpressionType.$arrayElemAt]: [Array<Logic>, Logic] }
	| { [ArrayExpressionType.$arrayToObject]: Array<[Logic, Logic]> }
	| { [ArrayExpressionType.$concatArrays]: Array<Array<Logic>> }
	| { [ArrayExpressionType.$every]: [Array<Logic>, Logic] }
	| { [ArrayExpressionType.$filter]: [Array<Logic>, Logic] }
	| {
			[ArrayExpressionType.$indexOfArray]:
				| [Array<Logic>, Logic]
				| [Array<Logic>, Logic, Logic]
				| [Array<Logic>, Logic, Logic, Logic]
		}
	| { [ArrayExpressionType.$isArray]: Logic | Array<Logic> }
	| { [ArrayExpressionType.$map]: [Array<Logic>, Logic] }
	| { [ArrayExpressionType.$none]: [Array<Logic>, Logic] }
	| { [ArrayExpressionType.$objectToArray]: Logic }
	| { [ArrayExpressionType.$range]: [Logic, Logic] | [Logic, Logic, Logic] }
	| { [ArrayExpressionType.$reduce]: [Array<Logic>, Logic, Logic] }
	| { [ArrayExpressionType.$reverseArray]: Array<Logic> }
	| { [ArrayExpressionType.$size]: Array<Logic> }
	| { [ArrayExpressionType.$slice]: [Array<Logic>] | [Array<Logic>, Logic] | [Array<Logic>, Logic, Logic] }
	| { [ArrayExpressionType.$some]: [Array<Logic>, Logic] };

export type SetExpression =
	| { [SetExpressionType.$allElementsTrue]: Array<Logic> }
	| { [SetExpressionType.$anyElementTrue]: Array<Logic> }
	| { [SetExpressionType.$setDifference]: [Array<Logic>, Array<Logic>] }
	| { [SetExpressionType.$setEquals]: [Array<Logic>, Array<Logic>, ...Array<Array<Logic>>] }
	| { [SetExpressionType.$setIntersection]: [Array<Logic>, Array<Logic>, ...Array<Array<Logic>>] }
	| { [SetExpressionType.$setIsSubset]: [Array<Logic>, Array<Logic>] }
	| { [SetExpressionType.$setUnion]: [Array<Logic>, Array<Logic>, ...Array<Array<Logic>>] };

export type AccumulatorExpression =
	| { [AccumulatorExpressionType.$addToSet]: [Array<Logic>, Logic] }
	| { [AccumulatorExpressionType.$avg]: Array<Logic> }
	| { [AccumulatorExpressionType.$count]: Array<Logic> }
	| { [AccumulatorExpressionType.$first]: Array<Logic> }
	| { [AccumulatorExpressionType.$last]: Array<Logic> }
	| { [AccumulatorExpressionType.$max]: Array<Logic> }
	| { [AccumulatorExpressionType.$mergeObjects]: Logic | Array<Logic> }
	| { [AccumulatorExpressionType.$min]: Array<Logic> }
	| { [AccumulatorExpressionType.$push]: [Array<Logic>, Logic] }
	| { [AccumulatorExpressionType.$sum]: Array<Logic> };

export type LogicalExpression =
	| { [LogicalExpressionType.$and]: Array<Logic> }
	| { [LogicalExpressionType.$or]: Array<Logic> }
	| { [LogicalExpressionType.$not]: Logic };

export type ComparisonExpression =
	| { [ComparisonExpressionType.$cmp]: [Logic, Logic] }
	| { [ComparisonExpressionType.$eq]: [Logic, Logic] }
	| { [ComparisonExpressionType.$ne]: [Logic, Logic] }
	| { [ComparisonExpressionType.$lt]: [Logic, Logic] }
	| { [ComparisonExpressionType.$lte]: [Logic, Logic] }
	| { [ComparisonExpressionType.$gt]: [Logic, Logic] }
	| { [ComparisonExpressionType.$gte]: [Logic, Logic] }
	| { [ComparisonExpressionType.$in]: [Logic, Array<Logic>] }
	| { [ComparisonExpressionType.$nin]: [Logic, Array<Logic>] };

export type ConditionalExpression =
	| { [ConditionalExpressionType.$cond]: [Logic, Logic, Logic, ...Array<Logic>] }
	| { [ConditionalExpressionType.$ifNull]: [Logic, ...Array<Logic>, Logic] };

export type Logic =
	| ValueType
	| DataAccessorExpression
	| ArithmeticExpression
	| ArrayExpression
	| SetExpression
	| AccumulatorExpression
	| LogicalExpression
	| ComparisonExpression
	| ConditionalExpression;
