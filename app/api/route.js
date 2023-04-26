export async function GET(request) {

    const delay = 2000;
    await new Promise((resolve) => setTimeout(resolve, Number(delay)));

    return new Response(JSON.stringify({message: "Fetched Content"}), {
        status: 200,
        headers: {
            "content-type": "application/json; charset=UTF-8",
        },
    });
}