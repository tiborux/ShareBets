export class Bet {
    constructor(
        public id: number,
        public titulo: string, 
        public createdAt: string,
        public coste: number,
        public beneficio: number,
        public participantes: number,
        public administrador: boolean
        ){}
}
