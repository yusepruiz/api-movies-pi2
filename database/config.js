import mysql from "mysql2/promise";

/**
 * Clase para gestionar la conexión a la base de datos MySQL
 */
class Database {
    constructor() {
        this.pool = null;
    }

    /**
     * Establece la conexión con la base de datos creando un pool
     */
    async connect() {
        try {
            this.pool = mysql.createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                port: process.env.DB_PORT,
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0,
            });

            // Verificar la conexión obteniendo una del pool
            const connection = await this.pool.getConnection();
            console.log("Base de datos de MySQL conectada correctamente");
            connection.release();
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error.message);
            throw new Error("Error en la conexión a la base de datos");
        }
    }

    /**
     * Ejecuta una consulta SQL directamente usando el pool
     * @param {string} sql 
     * @param {Array} params 
     */
    async query(sql, params) {
        return await this.pool.query(sql, params);
    }
}

const db = new Database();
export default db;
