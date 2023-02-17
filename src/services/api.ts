import axios from 'axios';
// import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';

// estava assim: setupAPIClient(ctx=undefined)
export function setupAPIClient(ctx: Pick<NextPageContext, "req"> | { req: Request; } | null | undefined){
    // let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com',
        // headers: {
        //     Authorization: `Bearer ${cookies['@nextauth.token']}`
        // }
    })


   return api;
}