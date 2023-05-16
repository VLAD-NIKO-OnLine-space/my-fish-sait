import { makeAutoObservable } from "mobx"


class ShopCounter {
    count = 1
    constructor(){
        makeAutoObservable(this)
    }

    increment(){
        this.count += 1
    }

    decrement(){
        this.count -= 1
    }
}


export default new ShopCounter()