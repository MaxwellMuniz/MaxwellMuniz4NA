import { Pool } from 'pg';

// Substitua pela sua string de conexão do Render.com
const connectionString = 'postgresql://maxwellmuniz4na_user:hjzb90ngGjBI61v4iJ5l6z9XFlIPcnY4@dpg-crcednbqf0us738jqr80-a.oregon-postgres.render.com/maxwellmuniz4na';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;