import CloseState from "./closeState"
import OpenState from "./openState"
import State from "./state"

class Action {
    state: State

    constructor(state: State){
        this.state = state
    }

    setState(state: State): void {
        this.state = state
    }

    getState(): State {
        return this.state
    }

}

export default Action