import {observable,action ,runInAction} from 'mobx';
class Store {
    @observable title = '初始数据';
    @observable keyWords = '初始数据';

    @action
    async set (info) {
        if (typeof info === 'object' && 'title' in info) {
            this.title = info.title;
        }
        if (typeof info === 'object' && 'keyWords' in info) {
            try {
                const r = await fetch('http://172.18.34.240:8415/mock/dataApi/seo/api').then((res) => res.text());
                runInAction(() => {
                    this.keyWords = r;
                });
            } catch (error) {
                runInAction(() => {
                    this.keyWords = error;
                });
            }
        }
    }
}
const data = {
    Store: new Store()
};
export default data;
