import UserStore from './userStore';
import { createContext } from 'react';
import { configure } from 'mobx';
import ModalStore from './modalStore';
import CommonStore from './commonStore';

configure({enforceActions: 'always'});

export class RootStore {
    userStore: UserStore;
    modalStore: ModalStore;
    commonStore: CommonStore

    constructor() {
        this.userStore = new UserStore(this);
        this.modalStore = new ModalStore(this);
        this.commonStore = new CommonStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());