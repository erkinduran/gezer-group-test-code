export default class Request {
    public static async get(url: string) {
        const request = await fetch(url);

        return await request.json();
    }

    public static async post(url: string, data:any){
        const request = await fetch(url);

        return await request.json();
    }
}