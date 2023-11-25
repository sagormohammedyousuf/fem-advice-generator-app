const id = document.querySelector(".id-name");
const text = document.querySelector(".card-text");
const btn = document.querySelector(".btn");

async function generate () {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    id.textContent = data.slip.id;
    text.textContent = `"${data.slip.advice}"`;
}

btn.onclick = () => {
    generate()
}