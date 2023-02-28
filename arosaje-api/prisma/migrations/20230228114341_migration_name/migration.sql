-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
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
    "avatar" TEXT NOT NULL DEFAULT 'avatar/user-default.png',
    CONSTRAINT "User_role_user_fkey" FOREIGN KEY ("role_user") REFERENCES "Role" ("nom") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Botaniste" (
    "user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "Botaniste_user_fkey" FOREIGN KEY ("user") REFERENCES "User" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User_lambda" (
    "user" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "User_lambda_user_fkey" FOREIGN KEY ("user") REFERENCES "User" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Annonce" (
    "id_annonce" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "localisation" TEXT,
    "description" TEXT,
    "type_gardien" INTEGER NOT NULL DEFAULT 0,
    "nb_signalement" INTEGER NOT NULL DEFAULT 0,
    "latidute" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "date_annonce" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accepte" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Annonce_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Gardiennage" (
    "id_gardiennage" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_debut" DATETIME NOT NULL,
    "date_fin" DATETIME NOT NULL,
    "date_gardiennage" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "id_user" INTEGER NOT NULL,
    "idAnnonce" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Gardiennage_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Gardiennage_idAnnonce_fkey" FOREIGN KEY ("idAnnonce") REFERENCES "Annonce" ("id_annonce") ON DELETE SET DEFAULT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PhotoGardiennage" (
    "id_photo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lien" TEXT NOT NULL,
    "date_photo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idGardiennage" INTEGER NOT NULL,
    CONSTRAINT "PhotoGardiennage_idGardiennage_fkey" FOREIGN KEY ("idGardiennage") REFERENCES "Gardiennage" ("id_gardiennage") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PhotoAnnonce" (
    "id_photo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lien" TEXT NOT NULL,
    "date_photo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idAnnonce" INTEGER NOT NULL,
    CONSTRAINT "PhotoAnnonce_idAnnonce_fkey" FOREIGN KEY ("idAnnonce") REFERENCES "Annonce" ("id_annonce") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Conseil" (
    "id_consiel" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_conseil" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "idUser" INTEGER NOT NULL,
    "nbSignalement" INTEGER NOT NULL DEFAULT 0,
    "idAnnonce" INTEGER NOT NULL,
    CONSTRAINT "Conseil_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Conseil_idAnnonce_fkey" FOREIGN KEY ("idAnnonce") REFERENCES "Annonce" ("id_annonce") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_nom_key" ON "Role"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_telephone_key" ON "User"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Gardiennage_idAnnonce_key" ON "Gardiennage"("idAnnonce");
