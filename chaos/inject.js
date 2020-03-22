/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // Your code goes here
  const args = func
    .toString()
    .match(/\((.*?)\)/)[1]
    .split(',')
    .filter(arg => this.dependency[arg.trim()])
    .map(arg => this.dependency[arg.trim()])
  
  return func.bind(this, ...args);
}

// 要注入的依赖
var deps = {
  'dep1': function () {return 'this is dep1';},
  'dep2': function () {return 'this is dep2';},
  'dep3': function () {return 'this is dep3';},
  'dep4': function () {return 'this is dep4';}
};

// 新建一个“注射器”
var di = new DI(deps);

// 注射
var myFunc = di.inject(function (dep3, dep1, dep2) {
  console.log({
    dep3, dep1, dep2
  })
  return [dep1(), dep2(), dep3()].join(' -> ');
});

const result = myFunc()
console.log({ result })
// 测试
// Test.assertEquals(myFunc(), 'this is dep1 -> this is dep2 -> this is dep3’);
