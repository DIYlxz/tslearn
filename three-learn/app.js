//any为任意类型
var x = 1;
x = "I am who I am";
x = false;
var arrayList = [1, false, 'fine'];
arrayList[1] = 100;
//null和undefined,|支持多种类型
var y;
y = 1;
y = undefined;
y = null;
//never类型为从来不会出现的值，通常表现为抛出异常或无法执行到终止点
var m;
var n;
//never 类型可以赋值给 数字类型
n = (function () { throw new Error("exception"); })();
// 返回值为 never 的函数可以是抛出异常的情况
function myError(message) {
    throw new Error(message);
}
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop() {
    while (true) { }
}
