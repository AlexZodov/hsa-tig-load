db.createUser(
    {
        user: "telegraf",
        pwd: "telegraf",
        roles: [ { role: "root", db: "admin" }, { role: 'readWrite', db: 'hsa12' } ]
    }
);
db.grantRolesToUser("telegraf", [{role: "read", actions: "find", db: "local"}]);
db = db.getSiblingDB('hsa12');
db.createUser(
    {
        user: 'hsauser',
        pwd: 'hsasecret',
        roles: [{ role: 'readWrite', db: 'hsa12' }],
    },
);
db.createCollection('unit1');