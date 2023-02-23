import express from 'express';
import { PlayersController } from './controller/players.controller';
import cors from 'cors';

class Server {
  private playersController: PlayersController;
  private app: express.Application;
  constructor(){
    this.app = express();
    this.app.use(cors())
    this.configuration();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3001);
    this.app.use(express.json());
  }

  /**
   * Method to configure the routes
   */
  public async routes(){
    this.playersController = new PlayersController();
    this.app.use(`/`,this.playersController.router);
  }

  /**
   * Used to start the server
   */
  public start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }
}

const server = new Server();
server.start();
