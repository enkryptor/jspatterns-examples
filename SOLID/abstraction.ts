type Guid = string;

type Permission = "ban" | "kick" | "edit";

interface Entity {
    created: Date;
    id: Guid;
    version_id: Guid;
    deleted: boolean;
}

interface User extends Entity {
    login: string;
    name: string;
}

// почему это плохо?
interface Admin extends User {
    permissions: Permission[];
}
