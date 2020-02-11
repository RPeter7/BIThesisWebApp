import { RootStore } from './rootStore';
import { observable, action, runInAction, computed } from 'mobx';
import agent from '../api/agent';

export default class TestDataStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable testDataRegistry = new Map();
    @observable loadingInitial = false;

    @computed get getTestData() {
        return Array.from(this.testDataRegistry.values())
    }

    @action loadTestData = async () => {
        this.loadingInitial = true;
        try {
            const testData = await agent.Test.getTestData();
            runInAction('loading testdata', () => {
                testData.forEach(data => {
                  this.testDataRegistry.set(data.cumeDist, data);
                });
                this.loadingInitial = false;
              });
    
        } catch (error) {
            runInAction(() => {
                this.loadingInitial = false;
            })
        }

    }
}