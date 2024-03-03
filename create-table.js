import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos;`.then(() => { console.log('tabela apagada') }).catch((err) => { console.error('Error dropping table:', err) });

sql`	
CREATE TABLE videos (
  id TEXT PRIMARY KEY,
  title TEXT,
  description TEXT,
  duration INTEGER
);
`

  .then(() => { console.log('table created') })
  .catch((err) => { console.error('Error creating table:', err) });