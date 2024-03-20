var User = /** @class */ (function () {
    function User(num) {
        this.num = num;
    }
    User.prototype.getNumText = function () {
        return "\u041D\u043E\u043C\u0435\u0440 - ".concat(this.num);
    };
    return User;
}());
var user = new User(123);
console.log(user.getNumText());
