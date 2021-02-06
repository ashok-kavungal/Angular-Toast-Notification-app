
export type toastTypes = 'Success' | 'Error' | 'Warning';

export class Toast{
    constructor(
        public heading:string,
        public message: string | null,
        public type : toastTypes
    ){}
}