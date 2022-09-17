db = db.getSiblingDB('leart_db');
db.createUser(
    {
        user: "leart_user",
        pwd: "leart_pass!",
        roles: [
            {
                role: "readWrite",
                db: "leart_db"
            }
        ]
    }
);
