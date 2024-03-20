
class User {
    num: number;

    constructor(num: number){
        this.num = num
    }

    getNumText(): string {
        return `Номер такой - ${this.num}`
    }
}

const user = new User(123)

console.log(user.getNumText())