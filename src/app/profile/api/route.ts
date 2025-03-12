import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const headersValue  = await headers();
    console.log(headersValue.get('Authorization'));

    // get coookie
    const theme = request.cookies.get('theme');

    // get and set cookies using cookies helper
    const cookiesStore = await cookies();
    cookiesStore.set('resultPerPage', '10');
    console.log(cookiesStore.get('resultPerPage'));
    console.log(theme);
    return new Response(JSON.stringify({message: "Hello World"}),{
        headers:{
            'Set-Cookie': 'theme=dark',
        }
    });

}