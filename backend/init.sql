\c db_clients;

CREATE TABLE "clients" (
    "id" SERIAL PRIMARY KEY, "name" VARCHAR(255) NOT NULL, "email" VARCHAR(255) NOT NULL, "cpf" VARCHAR(255) NOT NULL, "phone_number" VARCHAR(255) NOT NULL, "status" VARCHAR(255) NOT NULL, "created_at" TIMESTAMP WITHOUT TIME ZONE DEFAULT now(), "updated_at" TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
);

INSERT INTO
    "clients" (
        "name", "email", "cpf", "phone_number", "status"
    )
VALUES (
        'Amanda Souza', 'amanda@email.com', '12345678900', '11999999999', 'active'
    ),
    (
        'Pedro Souza', 'pedro@email.com', '12345678900', '11999999999', 'inactive'
    ),
    (
        'João Souza', 'joão@email.com', '12345678900', '11999999999', 'pending'
    ),
    (
        'Juliana Souza', 'juliana@email.com', '12345678900', '11999999999', 'disabled'
    ),
    (
        'Samuel Souza', 'samuel@email.com', '12345678900', '11999999999', 'active'
    );