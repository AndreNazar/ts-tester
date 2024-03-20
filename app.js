var User = /** @class */ (function () {
    function User(num) {
        this.num = num;
    }
    User.prototype.getNumText = function () {
        return "NUMBER - ".concat(this.num);
    };
    return User;
}());
var user = new User(123);
console.log(user.getNumText());
