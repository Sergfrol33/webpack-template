import {Store,getElement} from './common/store'

interface Interface {
    button: HTMLButtonElement
}
const store = new Store({
    button: document.querySelector('button')
})
