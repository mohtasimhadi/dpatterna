import { commandOnReciever } from
    "../pages/hello-command/implementCommand"
import {
    RemoteController,
    Light,
    LightOnCommand,
    LightOffCommand,
    RedLightIncreaseLuminosity,
    RedLight
} from "../patterns/command/LightCommand"
const remoteController = new RemoteController();
describe("Light Command Pattern", () => {
    test("Light on", () => {
        let expectation = commandOnReciever(new LightOnCommand(new
            Light()))
        remoteController.setCommand(new LightOnCommand(new Light))
        let reality = remoteController.executeCommand()
        expect(expectation).toEqual(reality)
    });
    test("Light off", () => {
        let expectation = commandOnReciever(new LightOffCommand(new
            Light()))
        remoteController.setCommand(new LightOffCommand(new
            Light()))
        let reality = remoteController.executeCommand()
        expect(expectation).toEqual(reality)
    })
    test('Red Light Increased', () => {
        let reality = commandOnReciever(new
            RedLightIncreaseLuminosity(new RedLight()))
        expect('red1').toEqual(reality);
    })
})