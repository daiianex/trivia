export default () => {
    const container = document.createElement("div");

    const template = `
    <img src="/trivia/src/img/logo.png" />
    Seja bem-vindo ao
    Trivia sobre mitogia grega
    Daiane, está preparada?
    <button>Começar</button>
    `;

    container.innerHTML = template;

    return container;
}
