import { Logic } from "./model";
import { CommonUtility, Utility } from "./utility";

export class LogicProcessor {
	logic: Logic | Array<Logic>;

	get isValidLogic() {
		return typeof this.logic === 'object'
			&& this.logic !== null
			&& !Array.isArray(this.logic)
			&& Object.keys(this.logic).length === 1;
	}

	get operator() {
		return Object.keys(this.logic)[0];
	}

	get values() {
		return this.logic[this.operator];
	}

	constructor(logic: Logic | Array<Logic>) {
		this.logic = logic;
	}

	evaluate(data: unknown) {
    if (Array.isArray(this.logic)) {
      return this.logic.map(l => new LogicProcessor(l).evaluate(data));
    }
    if (!this.isValidLogic) {
      return this.logic;
    }

		const values = CommonUtility.toArray(this.values).map(
			value => new LogicProcessor(value).evaluate(data)
		);

    if (Utility[this.operator] && typeof Utility[this.operator] === "function") {
      return Utility[this.operator].apply(data, values);
    } else if (this.operator.indexOf(".") > 0) {
      const subOperations = String(this.operator).split(".");
      let operation = Utility;
      for (const op of subOperations) {
        if (!operation[op]) {
          throw new Error("Unrecognized operation " + op +
            " (failed at " + subOperations.slice(0, subOperations.indexOf(op) + 1).join(".") + ")");
        }
        operation = operation[op];
      }
      return operation.apply(data, values);
    }

    throw new Error("Unrecognized operation " + this.operator);
	}
}
