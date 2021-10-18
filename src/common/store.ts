type InitialStore<T> = T
interface IStore {
    getElement(callback: (state: InitialStore<any>) => any): HTMLElement | undefined
}
export class Store implements IStore{
    private readonly domElements: InitialStore<any> | null

    constructor(initialStore: InitialStore<any>) {
        this.domElements = initialStore
    }

    getElement(callback: (state: InitialStore<any>) => any): HTMLElement | undefined {
        if (this.domElements) return callback(this.domElements)
    }
}
export const getElement = (store:IStore,callback: (state: InitialStore<any>) => any):HTMLElement | undefined =>
    store.getElement(callback)