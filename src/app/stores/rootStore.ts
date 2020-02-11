import UserStore from './userStore';
import { createContext } from 'react';
import { configure } from 'mobx';
import ModalStore from './modalStore';
import CommonStore from './commonStore';
import TestDataStore from './testDataStore'

configure({enforceActions: 'always'});

export class RootStore {
    userStore: UserStore;
    modalStore: ModalStore;
    commonStore: CommonStore;
    testDataStore: TestDataStore;

    constructor() {
        this.userStore = new UserStore(this);
        this.modalStore = new ModalStore(this);
        this.commonStore = new CommonStore(this);
        this.testDataStore = new TestDataStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());