import cors from "cors";
import express from "express";

import routerDirector from "./modules/director/director.routes.js";
import routerGender from "./modules/gender/gender.routes.js";
import routerMedia from "./modules/media/media.routes.js";
import routerProducer from "./modules/producer/producer.routes.js";
import routerType from "./modules/type/type.routes.js";
import db from "./database/config.js";

/**
 * Clase que representa el servidor de la aplicación
 */
class Server {
    /**
     * Inicializa el servidor y configura el puerto
     */
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;
        this.directorPath = "/api/director";
        this.genderPath = "/api/gender";
        this.mediaPath = "/api/media";
        this.producerPath = "/api/producer";
        this.typePath = "/api/type";

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    /**
     * Establece la conexión a la base de datos
     */
    async connectDB() {
        await db.connect();
    }

    /**
     * Configura los middlewares globales de la aplicación
     */
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    /**
     * Configura las rutas de la aplicación
     */
    routes() {
        this.app.use(this.directorPath, routerDirector);
        this.app.use(this.genderPath, routerGender);
        this.app.use(this.mediaPath, routerMedia);
        this.app.use(this.producerPath, routerProducer);
        this.app.use(this.typePath, routerType);
    }

    /**
     * Inicia el servidor y lo pone a la escucha en el puerto configurado
     */
    listen() {
        this.app.listen(this.port, () =>
            console.log("Servidor corriendo en el puerto " + this.port)
        );
    }
}

export default Server;