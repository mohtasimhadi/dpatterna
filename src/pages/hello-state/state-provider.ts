import Action from "patterns/state/Action"
import OpenState from "patterns/state/openState"

export function getState(message: string) {
  
  let action: Action = new Action(new OpenState())

  switch (message) {
    case "enter":
      return action.state.enter(action)

    case "payOk":
      return action.state.payOK(action)

    case "payFailed":
      return action.state.payFailed(action)
    default:
      return "processing";
  }
}