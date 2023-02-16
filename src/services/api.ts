import axios from 'axios';
// import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';

// estava assim: setupAPIClient(ctx=undefined)
export function setupAPIClient(ctx: Pick<NextPageContext, "req"> | { req: Request; } | null | undefined){
    // let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'https://ba94-2804-3d90-8011-2c01-b900-db6f-603f-319f.sa.ngrok.io/',
        // headers: {
        //     Authorization: `Bearer ${cookies['@nextauth.token']}`
        // }
    })


   return api;
}