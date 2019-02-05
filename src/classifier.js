/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
function classifier(input) {
	// Your code should go here.
	const groups = [];

	let dateDiff = (a, b) => {
		let date1 = new Date(a);
		let date2 = new Date(b);

		let yearDiff = Math.abs(date2.getFullYear() - date1.getFullYear());

		return yearDiff;
	};

	input.forEach((item) => {
		if (!groups.length) {
			let newGroup = [];
			newGroup.push(item);
			groups.push(newGroup);
			return;
		} else {
			groups.forEach((group) => {
				if (group.length < 3) {
					group.push(item);
					return;
				} else {
					let nGroup = [];
					nGroup.push(item);
					groups.push(nGroup);
					return;
				}
			});
		}
	});
	return groups;
}

console.log(
	classifier([
		{
			name: 'Hendrick',
			dob: '1853-07-18T00:00:00.000Z',
			regNo: '041'
		},
		{
			name: 'Albert',
			dob: '1879-03-14T00:00:00.000Z',
			regNo: '033'
		},
		{
			name: 'Marie',
			dob: '1867-11-07T00:00:00.000Z',
			regNo: '024'
		},
		{
			name: 'Neils',
			dob: '1885-10-07T00:00:00.000Z',
			regNo: '02'
		},
		{
			name: 'Max',
			dob: '1858-04-23T00:00:00.000Z',
			regNo: '014'
		},
		{
			name: 'Erwin',
			dob: '1887-08-12T00:00:00.000Z',
			regNo: '09'
		},
		{
			name: 'Auguste',
			dob: '1884-01-28T00:00:00.000Z',
			regNo: '08'
		}
	])
);

// module.exports = classifier;

// let dateDiff = (a, b) => {
// 	const msecperday = 1000 * 60 * 60 * 24;

// 	let date1 = new Date(a);
// 	let date2 = new Date(b);

// 	let timeDiff = Math.abs(date2.getFullYear() - date1.getFullYear());

// 	// let diffDays = Math.ceil(timeDiff / msecperday);

// 	return timeDiff;
// };

// console.log(dateDiff('1868-02-14T00:00:00.000Z', '1871-02-15T00:00:00.000Z'));
