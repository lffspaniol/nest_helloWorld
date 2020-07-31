-- Migration: create users table
-- Created at: 2013-10-02 07:03:11
-- ====  UP  ====
CREATE TABLE IF NOT EXISTS hellos(
  ID  SERIAL PRIMARY KEY,
  contador  INT DEFAULT 0,
  messagem  VARCHAR(255) NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_alteracao TIMESTAMP, 
  data_exclusao TIMESTAMP
);

create index hellos_id_idx on hellos(ID);

CREATE OR REPLACE FUNCTION update_data_alteracao_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.data_alteracao = now(); 
   RETURN NEW;
END;
$$ language 'plpgsql';


CREATE TRIGGER update_hellos_data_alteracao BEFORE UPDATE
ON hellos FOR EACH ROW EXECUTE PROCEDURE 
update_data_alteracao_column();

-- ==== DOWN ====
DROP TABLE `hellos`;