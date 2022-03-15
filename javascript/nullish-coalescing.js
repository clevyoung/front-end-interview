// (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.

let data = 'undefined' ?? 'noData';
console.log(data);

data = null ?? 'noData';
console.log(data);

data = '' ?? 'noData';
console.log(data);

data = '' ?? null ?? 'noData';
console.log(data);

data ??= 'noData';
