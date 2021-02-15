TRUNCATE TABLE model;

CREATE TABLE brand (
  id SERIAL PRIMARY KEY,
  name TEXT DEFAULT NULL
);

CREATE TABLE model (
  id SERIAL PRIMARY KEY,
  model TEXT, 
colour TEXT,
material TEXT,
brand_id INTEGER,
);

INSERT INTO model (model, colour, material, brand_id) VALUES ('Impact', 'Black', 'PU', (SELECT id FROM brand WHERE name='Venum'));
INSERT INTO model (model, colour, material, brand_id) VALUES ('Elite', 'Green', 'Leather', (SELECT id FROM brand WHERE name='Venum'));
INSERT INTO model (model, colour, material, brand_id) VALUES ('Trooper', 'Trooper', 'PU', (SELECT id FROM brand WHERE name='Venum'));

INSERT INTO model (model, colour, material, brand_id) VALUES ('T3', 'Blue', 'Vylar', (SELECT id FROM brand WHERE name='Hayabusa'));
INSERT INTO model (model, colour, material, brand_id) VALUES ('T3LX', 'Grey', 'Leather', (SELECT id FROM brand WHERE name='Hayabusa'));
INSERT INTO model (model, colour, material, brand_id) VALUES ('Symbiote', 'Black', 'Vylar', (SELECT id FROM brand WHERE name='Hayabusa'));

INSERT INTO model (model, colour, material, brand_id) VALUES ('Pinnacle P4', 'Orange', 'Vylar', (SELECT id FROM brand WHERE name='Revgear'));
INSERT INTO model (model, colour, material, brand_id) VALUES ('S5 All Rounder', 'Red', 'Leather', (SELECT id FROM brand WHERE name='Revgear'));
INSERT INTO model (model, colour, material, brand_id) VALUES ('S4 Sentinel', 'Red', 'Leather', (SELECT id FROM brand WHERE name='Revgear'));

INSERT INTO model (model, colour, material, brand_id) VALUES ('Survival', 'Silver', 'Leather', (SELECT id FROM brand WHERE name='Fairtex'));
INSERT INTO model (model, colour, material, brand_id) VALUES ('Deluxe', 'Gold', 'Leather', (SELECT id FROM brand WHERE name='Fairtex'));
INSERT INTO model (model, colour, material, brand_id) VALUES ('Glory', 'Gold', 'Synthetic', (SELECT id FROM brand WHERE name='Fairtex'));
