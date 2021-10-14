import Action from "./Action"
import OpenState from "./openState"
import State from "./state"

class CloseState implements State {

    enter(action: Action): string {
        action.setState(new CloseState)
        return "closed"
    }

    payOK(action: Action): string {
        action.setState(new OpenState)
        return "open"
    }

    payFailed(action: Action): string {
        action.setState(new OpenState)
        return "open"
    }

}

export default CloseState