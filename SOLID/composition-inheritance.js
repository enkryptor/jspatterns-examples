class Team extends Array {
    constructor(name, members) {
        super(users);
        this.name = name;
    }
}

const team = new Team("Team Rocket", [jessie, james]);
console.log(team.length) // ура, всё само работает!

























class Team {
    constructor(name, members) {
        this.members = new Set(members);
        this.name = name;
    }
    setPermissions(permissions) {
        this.permissions = permissions;
    }
    checkPermissions(action) { /* ... */ }

    get length() {
        return this.members.size;
    }
}

const team2 = new Team("Team Rocket", [jessie, james]);
console.log(team2.length) // получаем тот же результат, но с большей гибкостью
