import './test.js'
abstract class State {
    protected context: Context | undefined
    public setContext(context:Context){
        this.context = context
    }
    public abstract handle1():void
    public abstract handle2():void
}

class Context {
    private state: State | undefined
    constructor(state: State) {
        this.transitionTo(state)
    }
    public transitionTo(state:State):void{
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state
        this.state.setContext(this)
    }
    public request1(){
        this.state?.handle1()
    }
    public request2(){
        this.state?.handle2()
    }
}
class ConcreteStateA extends State{
    public handle1() {
        console.log('request1 ConcreteStateA')
        this.context?.transitionTo(new ConcreteStateB())
    }
    public handle2() {
        console.log('handle request2')
    }
}
class ConcreteStateB extends State{
    public handle1() {
        console.log('request1 ConcreteStateB')
        this.context?.transitionTo(new ConcreteStateA())
    }
    public handle2() {
        console.log('handle request2  ConcreteStateB')
    }
}
const context = new Context(new ConcreteStateA())
context.request1()
context.request2()