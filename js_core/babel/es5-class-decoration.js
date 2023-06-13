"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _dec, _class;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
// // 1）装饰器可以修饰类的静态属性
// @flag
// class Animal{
//     name = 'xxxx';
//     say(){
//     }
// }
// function flag(constructor){
//     // constructor: function Animal() {
//     //     _classCallCheck(this, Animal);
//     //     _defineProperty(this, "name", 'xxxx');
//     //   }
//     console.log('constructor: ' + constructor);
//     constructor.age = 10;
// }
// console.log('Animal',Animal.age); // Animal 10
// 2）装饰器可以修饰类的实例属性
// class Animal{
//     @readyOnly
//     PI = 3.14
//     name = 'xxxx'; // 实例上的属性 并非原型链上的属性
//     say(){
//         console.log('object');
//     }
// }
// // target {}
// // property PI
// // descriptor {
// //   configurable: true,
// //   enumerable: true,
// //   writable: true,
// //   initializer: [Function: initializer]
// // }
// function readyOnly(target,property,descriptor){
//     // console.log('target', target);
//     // console.log('property', property);
//     // console.log('descriptor', descriptor);
//     // console.log(target === Animal.prototype); // 这个时候类未执行完成 .prototype 没有值
//     // setTimeout(function(){
//     // //   console.log( target === Animal.prototype);  // true
//     // })
//     descriptor.writable = true;
// }
// let ppx = new Animal();
// ppx.PI = 6
// console.log(ppx.PI); // 6
// 3) 函数 执行前触发  类似生命周期 ？
// class Animal{
//     name = 'xxxx';
//     @before()
//     say(a,b,c){
//         console.log('say google',a,b,c);
//     }
// }
// function before(target,property,descriptor){
//     const oldSay = descriptor.value  // 旧函数
//     descriptor.value = function(){  // 新函数
//         console.log('before');
//         oldSay.call(target,...arguments)
//     }
// }
// let ppx = new Animal();
// // before
// // say google 1 2 3
// ppx.say(1,2,3) 
// 3-1) 传参数 第二种方式 创一个 工厂函数 
var Animal = (_dec = before(1, 2, 3), (_class = /*#__PURE__*/function () {
  function Animal() {
    _classCallCheck(this, Animal);
    _defineProperty(this, "name", 'xxxx');
  }
  _createClass(Animal, [{
    key: "say",
    value: function say(a, b, c) {
      console.log('say google', a, b, c);
    }
  }]);
  return Animal;
}(), (_applyDecoratedDescriptor(_class.prototype, "say", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "say"), _class.prototype)), _class));
function before() {
  for (var _len = arguments.length, parm = new Array(_len), _key = 0; _key < _len; _key++) {
    parm[_key] = arguments[_key];
  }
  return function (target, property, descriptor) {
    var oldSay = descriptor.value; // 旧函数
    descriptor.value = function () {
      // 新函数
      console.log('before');
      oldSay.call.apply(oldSay, [target].concat(parm));
      return target;
    };
  };
}
var ppx = new Animal();
// before
// say google 1 2 3
ppx.say();
