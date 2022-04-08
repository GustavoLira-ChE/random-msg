const messages = ["Tú puedes", "Sigue programando", "La constancia es la clave del éxito", "La disciplina te hará mejorar día con día","Sigue intentandole","la meditación es necesaria para recuperar la mente"];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message)
}

module.exports = {randomMsg};