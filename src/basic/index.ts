import hello, {birthday, add} from "./home";

const menu : number = 2
let name :string = "홍길동"
switch (menu) {
    case 0 :
        name ="홍길동"
        console.log(hello(name))
        break
    case 1 :
         name = "김유식"
        const year : number =2002
        console.log(birthday(name,year))
        break
    case 2:
        const num1 : number = 10
        const num2 : number =30
        console.log(add(num1, num2))
        break
    default : console.log(`실행 가능한 메뉴가 아닙니다.`)

}