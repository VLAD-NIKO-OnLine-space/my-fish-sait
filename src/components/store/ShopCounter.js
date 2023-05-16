import { makeAutoObservable } from "mobx"


class ShopCounter {
    count = 0
    itemsShop = []
    totalPrice = []

    constructor(){
        makeAutoObservable(this)
    }

    add(e){
        this.totalPrice.push(e)
    }
    update(id, price){
        this.totalPrice.forEach(e=>{
            if (e.id===id){e.price=price}
        })
    }

    del(id){
        this.totalPrice = this.totalPrice.filter(e=>e.id!== id)
    }

    increment(){
        this.count += 1
    }

    decrement(){
        this.count -= 1
    }

    addItemShop(item){
        this.itemsShop.push(item)
    }

    removeItemShop(id){
        this.itemsShop = this.itemsShop.filter(e => e.id !== id)
    }


}


export default new ShopCounter()