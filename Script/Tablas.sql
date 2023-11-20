CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    pass VARCHAR(500),
    email VARCHAR(100)
);

CREATE TABLE bill (
    id SERIAL PRIMARY KEY,
    date_bill DATE,
    user_id INTEGER,
    value NUMERIC(9),
    type INTEGER,
    observation VARCHAR(120),
    CONSTRAINT FK_bill_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
