import {Router, Response, Request} from 'express';
import {PlayersService} from '../services/players.service';

export class PlayersController {
    public router: Router;
    private playersService: PlayersService;

    constructor() {
        this.playersService = new PlayersService();
        this.router = Router();
        this.routes();
    }

    /**
     * Configure the routes of controller
     */
    routes() {
        this.router.get('/players', this.getAllSortedPlayers);
        this.router.get('/players/:id', this.getOnePlayer);
    }

    getAllSortedPlayers = async (req: Request, res: Response) => {
        res.send(await this.playersService.getAllSortedPlayers());
    }

    getOnePlayer = async (req: Request, res: Response) => {
        const player = await this.playersService.getOnePlayer(Number(req.params.id));
        if (!player) {
            res.status(404).send('Not found');
        }
        res.send(player);
    }

}
