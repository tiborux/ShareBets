/* * * ./app/comments/model/comment.ts * * */
export class Usuario {
    constructor(
        public usuario: string, 
        public password:string,
        public email: string, 
        public nombre:string,
        public apellidos: string
        ){}
}