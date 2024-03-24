// Command Interface
interface Command {
  execute(): void;
}

class Television {
  turnOn() {
    console.log("Television has been turned on.");
  }

  turnOff() {
    console.log("Television has been turned off.");
  }

  increaseVolume() {
    console.log("Television volume increased.");
  }

  decreaseVolume() {
    console.log("Television volume decreased.");
  }
}

// Concrete Commands
class TurnOnTvCommand implements Command {
  constructor(private television: Television) {}
  execute() {
    this.television.turnOn();
  }
}

class TurnOffTvCommand implements Command {
  constructor(private television: Television) {}
  execute() {
    this.television.turnOff();
  }
}

class IncreaseVolumeCommand implements Command {
  constructor(private television: Television) {}
  execute() {
    this.television.increaseVolume();
  }
}

class DecreaseVolumeCommand implements Command {
  constructor(private television: Television) {}
  execute() {
    this.television.decreaseVolume();
  }
}

// Invoker
class RemoteControl {
  private commands: Map<string, Command> = new Map();

  setCommand(button: string, command: Command) {
    this.commands.set(button, command);
  }

  pressButton(button: string) {
    const command = this.commands.get(button);
    if (command) {
      command.execute();
    } else {
      console.log("No command assigned to this button.");
    }
  }
}

// Uso
const tv = new Television();
const remote = new RemoteControl();
remote.setCommand("turnOn", new TurnOnTvCommand(tv));
remote.setCommand("turnOff", new TurnOffTvCommand(tv));
remote.setCommand("volumeUp", new IncreaseVolumeCommand(tv));
remote.setCommand("volumeDown", new DecreaseVolumeCommand(tv));

remote.pressButton("turnOn");
remote.pressButton("volumeUp");
