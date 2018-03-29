/**
 * @desc:
 * @author: zhaohongyu@ruijie.com.cn
 * @date:   2018/3/28
 */
define([""], function (mod) {
    function init() {
        var Person = function () {
            this.type = 'person';
            this.age = 0;
        }
        Person.prototype.code = '001';
        Person.prototype.say = function () {
            console.log('Hi~');
        }
        var Man = function (name, age) {
            Person.call(this);
            this.name = name;
            this.age = age;
        }
        Z.extend(Man, Person);
        Man.prototype.sex = 'nan';
        var man = new Man('bob', 18);
        man.say();
        console.log(man.type);
        console.log(man.sex);
    }

    return {init: init}
});