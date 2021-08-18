import {
    Light,
    LightOnCommand,
    LightOffCommand,
    RedLight,
    RedLightOn,
    RedLightOff,
    RedLightIncreaseLuminosity,
    RedLightDecreaseLuminosity,
    RemoteController,
    Command
} from "../../patterns/command/LightCommand";

let redOn: boolean = false

export function commandOnReciever(command: Command): string {
    const remoteController = new RemoteController();
    remoteController.setCommand(command)
    return remoteController.executeCommand()
}

export function orderHandler(command: string): string {
    let result: string;

    if (command=="on") {
        result = redOn ? commandOnReciever(
            new RedLightOn(
                new RedLight())) : commandOnReciever(
                    new LightOnCommand(new Light()))
    } else if (command == "off") {
        redOn=false
        result = redOn ? commandOnReciever(
            new RedLightOff(
                new RedLight())) : commandOnReciever(
                    new LightOffCommand(
                        new Light()))
    } else if (command == "increase") {
        result=redOn?commandOnReciever(
            new RedLightIncreaseLuminosity(
                new RedLight())):commandOnReciever(
                    new LightOnCommand(new Light()))
    } else if (command == "decrease") {
        result =redOn?commandOnReciever(
            new RedLightDecreaseLuminosity(
                new RedLight())) : commandOnReciever(
                    new LightOnCommand(new Light()))
    } else {
        redOn = true
        result=redOn?commandOnReciever(new RedLightOn(new RedLight())):commandOnReciever(new LightOnCommand(new Light()))
    }
    return result;

}