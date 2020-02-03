export default async function getResourse(url) {
    let res = await fetch(`${url}`);

    if(!res.ok) {
        throw new Error(`Couldn't fetch URL ${url}, status ${res.status}`);
    }

    return await res.json();
}