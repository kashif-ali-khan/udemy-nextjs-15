import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest){
    // return NextResponse.redirect(new URL("/comments", request.url))
    // There is another method to redirect
    // if(request.nextUrl.pathname === "/profile"){
    //     //return NextResponse.redirect(new URL("/comments", request.nextUrl))
    //     return NextResponse.rewrite(new URL("/comments", request.nextUrl))

    // }

    const response = NextResponse.next();

    if(!request.cookies.get('theme')){
        response.cookies.set('theme', 'light');
    }

    response.headers.set('x-custom-header', 'hello world');

    return response;

}

/**
 * This one method
 */

// export const config = {
//     matcher:"/profile"
// }