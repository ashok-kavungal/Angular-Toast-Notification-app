export type toastTypes = 'Success' | 'Error' | 'Warning';
export type toastPositon = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export class Toast{
    constructor(
        public heading:string,
        public subheading:string,
        public message: string | null,
        public type : toastTypes,
        public createdAt : number,
    ){}
}