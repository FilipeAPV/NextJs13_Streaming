export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const delay = searchParams.get('delay');
    
    await new Promise((resolve) => setTimeout(resolve, Number(delay)));
    
    return new Response(JSON.stringify({message: `
        Fetched Content. 
        Delay: ${delay} ms.
        `}), {
        status: 200,
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
}