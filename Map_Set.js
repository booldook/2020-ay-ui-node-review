/* 번외편 - ES6 Set(), Map(),  */
// 배열 ["A", "B", "C"]: key(index), value
// 객체 {fname: "홍", lname: "길동", age: 25}
let arr2 = new Array();
arr2.push("A");
arr2.push("B");
arr2.push("C");
arr2.push("A");
arr2.push("B");

// 중복이 제거된 배열
let set = new Set();
set.add("A");
set.add("B");
set.add("C");
set.add("A");
set.add("B");

log(arr2, set);

// Array, Set 객체에서 값의 존재여부 체크
let chk = arr2.indexOf("D");
log(chk);
log(	set.has("B")	);

// Array, Set 객체에서 값 삭제
arr2.splice(1, 1, "D");
log(arr2);
set.delete("B");
log(set);

// Array, Set 객체의 갯수
log(	arr2.length	);
log(	set.size	);

let aa = "A";
let bb = 2;
let cc = [1, 2, 3, 4];
let dd = {name: "홍길동", age: 25};
let ee = val => val + val;

// (Reference type variable)객체만 저장된다.
const weakSet = new WeakSet();
// weakSet.add(aa);
// weakSet.add(bb);
weakSet.add(cc);
weakSet.add(dd);
weakSet.add(ee);

// ES6 배열객체중 쓸만한 놈
let myMap = new Map();
myMap.set(0, "A");
myMap.set("a", "AA");
myMap.set("name", "홍길동");
myMap.set("user", {name: "홍길순", age: 25});
log(myMap);
log(myMap.get("name"));

for(let [key, value] of myMap) {
	log(key, value);
}

log(myMap.keys());
log(myMap.values());