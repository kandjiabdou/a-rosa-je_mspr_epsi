CREATE TABLE Role(
   id_role INTEGER,
   nom TEXT,
   PRIMARY KEY(id_role)
);

CREATE TABLE Utilisateur(
   id_user INTEGER,
   prenom TEXT,
   nom TEXT NOT NULL,
   email TEXT,
   telephone TEXT,
   Numero_rue TEXT,
   code_postale TEXT,
   ville TEXT,
   mdp TEXT,
   flag INTEGER,
   id_role INTEGER NOT NULL,
   PRIMARY KEY(id_user),
   FOREIGN KEY(id_role) REFERENCES Role(id_role)
);

CREATE TABLE botaniste(
   id_user INTEGER,
   PRIMARY KEY(id_user),
   FOREIGN KEY(id_user) REFERENCES Utilisateur(id_user)
);

CREATE TABLE user_lambda(
   id_user INTEGER,
   PRIMARY KEY(id_user),
   FOREIGN KEY(id_user) REFERENCES Utilisateur(id_user)
);

CREATE TABLE annonce(
   id_annonce TEXT,
   localisation TEXT,
   description TEXT,
   type_gardien INTEGER,
   nb_signalement INTEGER,
   latidute NUMERIC(9,9)  ,
   longitude NUMERIC(9,9)  ,
   id_user INTEGER NOT NULL,
   PRIMARY KEY(id_annonce),
   FOREIGN KEY(id_user) REFERENCES user_lambda(id_user)
);

CREATE TABLE gardiennage(
   id_gardiennage TEXT,
   date_debut NUMERIC,
   date_fin NUMERIC,
   desscription TEXT,
   id_user INTEGER NOT NULL,
   id_annonce TEXT NOT NULL,
   PRIMARY KEY(id_gardiennage),
   UNIQUE(id_annonce),
   FOREIGN KEY(id_user) REFERENCES Utilisateur(id_user),
   FOREIGN KEY(id_annonce) REFERENCES annonce(id_annonce)
);

CREATE TABLE photo_gardiennage(
   id_photo INTEGER,
   lien TEXT,
   data_photo NUMERIC,
   id_gardiennage TEXT NOT NULL,
   PRIMARY KEY(id_photo),
   FOREIGN KEY(id_gardiennage) REFERENCES gardiennage(id_gardiennage)
);

CREATE TABLE photo_annonce(
   id_photo INTEGER,
   lien TEXT,
   date_photo NUMERIC,
   id_annonce TEXT NOT NULL,
   PRIMARY KEY(id_photo),
   FOREIGN KEY(id_annonce) REFERENCES annonce(id_annonce)
);

CREATE TABLE Conseil(
   id_annonce TEXT,
   id_user INTEGER,
   message TEXT,
   date_mes NUMERIC,
   id_conseil INTEGER,
   flag TEXT,
   nb_signalement TEXT,
   PRIMARY KEY(id_annonce, id_user),
   FOREIGN KEY(id_annonce) REFERENCES annonce(id_annonce),
   FOREIGN KEY(id_user) REFERENCES botaniste(id_user)
);