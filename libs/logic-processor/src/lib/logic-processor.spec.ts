import { LogicProcessor } from './logic-processor';

describe('logicProcessor', () => {
	it('$let should work', () => {
		expect(new LogicProcessor({ $let: 0 }).evaluate([{ a: { b: 3 } }])).toEqual({ a: { b: 3 } });
		expect(new LogicProcessor({ $let: '0.a.b' }).evaluate([{ a: { b: 3 } }])).toEqual(3);
	});

	it('$getField should work', () => {
		expect(new LogicProcessor({ $getField: 0 }).evaluate([{ a: { b: 3 } }])).toEqual({ a: { b: 3 } });
		expect(new LogicProcessor({ $getField: '0.a.b' }).evaluate([{ a: { b: 3 } }])).toEqual(3);
		expect(new LogicProcessor({ $getField: ['b', { $let: '0.a' }] }).evaluate([{ a: { b: 3 } }])).toEqual(3);
	});

	it('$setField should work', () => {
		let data = [{ a: { b: 3 } }];
		expect(new LogicProcessor({ $setField: [0, 1] }).evaluate(data)).toEqual(1);
		expect(data).toEqual([1]);

		data = [{ a: { b: 3 } }];
		expect(new LogicProcessor({ $setField: ['0.a.b', 1] }).evaluate(data)).toEqual(1);
		expect(data).toEqual([{ a: { b: 1 } }]);
	});
});
