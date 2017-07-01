import { SafeResourceUrl } from "@angular/platform-browser";

export class Bet {
    constructor(
        public id: number,
        public titulo: string, 
        public createdAt: string,
        public coste: number,
        public beneficio: number,
        public participantes: number,
        public administrador: boolean,
        public pagado: boolean,
        public fecha_expires: Date,
        public fecha_apuesta: Date,
        public direccion_paypal: string,
        public usuarios: any[],
        public estado: number,
        public foto: SafeResourceUrl
        ){}
}
