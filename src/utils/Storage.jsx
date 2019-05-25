

export default class Storage{


    static getStateByKey = key => {

        return JSON.parse(localStorage.getItem(key)) || []

    }

    static setNewData = (key,value) => {

        localStorage.setItem(key,JSON.stringify(value))
    } 

    static clearDataByKey = (key) =>{

        this.setNewData(key,[])
       
    }



}