-- 01-seed-categories.sql

CREATE TABLE IF NOT EXISTS categories (
                                          id   BIGSERIAL PRIMARY KEY,
                                          name TEXT NOT NULL UNIQUE
);

INSERT INTO categories (name)
VALUES
    ('Electronics'),
    ('Books'),
    ('Clothing'),
    ('Home & Kitchen'),
    ('Sports & Outdoors')
    ON CONFLICT (name) DO NOTHING;