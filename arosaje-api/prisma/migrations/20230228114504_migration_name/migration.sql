-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id_user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prenom" TEXT,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "Numero_rue" TEXT,
    "code_postale" TEXT,
    "ville" TEXT,
    "mdp" TEXT,
    "flag" INTEGER NOT NULL DEFAULT 1,
    "role_user" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT '/avatar/user-default.png',
    CONSTRAINT "User_role_user_fkey" FOREIGN KEY ("role_user") REFERENCES "Role" ("nom") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("Numero_rue", "avatar", "code_postale", "email", "flag", "id_user", "mdp", "nom", "prenom", "role_user", "telephone", "ville") SELECT "Numero_rue", "avatar", "code_postale", "email", "flag", "id_user", "mdp", "nom", "prenom", "role_user", "telephone", "ville" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
