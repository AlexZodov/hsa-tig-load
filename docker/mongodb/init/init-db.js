db = db.getSiblingDB('hsa12');
db.createUser(
    {
        user: 'hsauser',
        pwd: 'hsasecret',
        roles: [{ role: 'readWrite', db: 'hsa12' }],
    },
);
db.createCollection('unit1');