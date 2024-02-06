async function getStoresFromDB(){
    try{
        //DB 가져오는 부분.
        const DB=await read
        const stores=JSON.parse(DB);

        return stores;
    }
    catch(err){
        console.error('error reading DB',error);
    }
}

module.exports=class storesData {
    constructor(id, name, latitude, longitude, address, open, rate, bookmark){
        this.id=id;
        this.name=name;
        this.latitude=latitude;
        this.longitude=longitude;
        this.address=address;
        this.open=opne;
        this.rate=rate;
        this.bookmark=bookmark;
        //1.menuId로 메뉴객체 데려오기
        //2.meal과 식사류.
    }
    //storeId로 가게 찾기
    async findByStoreId(id){
        try{
            const stores= await getStoresFromDB();

            const store=stores.find(store => store.id===id);

            return store;
        }catch(error){
            console.error('Error finding storeId',error);
        }
    }

}

module.exports=class menu{
    constructor(storeId, menuId, menuName, menuDescription, price, size, insulation, liquid_sealed, caution) {
        this.storeId=storeId;
        this.menuId=menuId;
        this.menuName=menuName;
        this.menuDescription=menuDescription;
        this.price=price;
        this.size=size;
        this.insulation=insulation;
        this.liquid_sealed=liquid_sealed;
        this.caution=caution;
    }

    async findByStoreId(id){
        try{
            const stores= await getStoresFromDB();

            const store=stores.find(store => store.id===id);

            return store;
        }catch(error){
            console.error('Error finding storeId',error);
        }
    }

    async findByMenuId(storeId, menuId){
        try{
            const store=this.findByStoreId(storeId);
            const menu=store.find(menu=>menu.id===menuId);

            return menu;
        }
        catch(error){
            console.log('Error finding menuId',error);
        }
    }

}

module.exports=class meal{

}
module.exports=class side{

}

