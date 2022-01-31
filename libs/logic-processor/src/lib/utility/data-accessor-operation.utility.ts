import { CommonUtility } from ".";
import { DataAccessorExpressionType } from "../model";

export class DataAccessorOperationUtility {
	/* eslint-disable @typescript-eslint/no-this-alias */
	static [DataAccessorExpressionType.$let](a: string | number, b: unknown) {
		let data = this;
		const notFound = b || null;
		if (!CommonUtility.isDefined(a)) {
			return data;
		}
		const subProps = Array.isArray(a) ? a.map(e => String(e)) : String(a).split('.');
		for (const k of subProps) {
			if (!data) {
				return notFound;
			}
			data = data[k];
		}
		return data;
	}

	static [DataAccessorExpressionType.$getField](field: string | string[], data = this) {
		if (!CommonUtility.isDefined(field)) {
			return data;
		}
		const subProps = Array.isArray(field) ? field.map(e => String(e)) : String(field).split('.');
		for (const k of subProps) {
			if (!data) {
				return null;
			}
			data = data[k];
		}
		return data;
	}

	static [DataAccessorExpressionType.$setField](field: string | string[], value: unknown, data = this) {
		if (!CommonUtility.isDefined(field)) {
			return data;
		}
		const subProps = Array.isArray(field) ? field.map(e => String(e)) : String(field).split('.');
		let i = 0;
		while (i < subProps.length - 1) {
			if (!data) {
				return null;
			}
			data = data[subProps[i++]];
		}
		if (data) {
			data[subProps[i]] = value;
			data = data[subProps[i]];
		}
		return data || null;
	}
}
