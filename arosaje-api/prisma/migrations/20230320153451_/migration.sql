-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT,
    "nomero_rue" TEXT,
    "nom_rue" TEXT,
    "noom" TEXT,
    "code_postale" TEXT,
    "ville" TEXT,
    "mdp" TEXT NOT NULL,
    "flag" INTEGER NOT NULL DEFAULT 1,
    "role_user" TEXT NOT NULL DEFAULT 'user_lambda',
    "avatar" TEXT NOT NULL DEFAULT '/images/avatar/user-default.png',
    "otp_enabled" BOOLEAN NOT NULL DEFAULT false,
    "otp_verified" BOOLEAN NOT NULL DEFAULT false,
    "otp_ascii" TEXT,
    "otp_hex" TEXT,
    "otp_base32" TEXT,
    "otp_auth_url" TEXT,
    CONSTRAINT "User_role_user_fkey" FOREIGN KEY ("role_user") REFERENCES "Role" ("nom") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("avatar", "code_postale", "email", "flag", "id_user", "mdp", "nom", "nom_rue", "nomero_rue", "noom", "prenom", "role_user", "telephone", "ville") SELECT "avatar", "code_postale", "email", "flag", "id_user", "mdp", "nom", "nom_rue", "nomero_rue", "noom", "prenom", "role_user", "telephone", "ville" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
