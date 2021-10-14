import Action from './Action'

interface State {
    enter(action: Action): void
    payOK(action: Action): void
    payFailed(action: Action): void
}

export default State