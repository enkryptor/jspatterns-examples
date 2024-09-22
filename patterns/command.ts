interface Command {
    exec(): void;
}

class SaveCommand implements Command 
{
    private data;
    private service;
    constructor(data) {
        this.data = data;
        this.service = BackendService.getInstance();
    }

    exec() {
        this.service.sendSomething(this.data);
    }
}

const data = "hello";
const save = new SaveCommand(data)
save.exec()

function validate() {
    return {
        then(command) {
            command.exec();
        }
    }
}

validate(data).then(save)


const commands = [save];

for (const command of commands) {
    command.exec();
}
