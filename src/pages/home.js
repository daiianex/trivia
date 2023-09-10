export default () => {
    const container = document.createElement("div");

    const template = `
        <div>
            <img src="/trivia/src/img/logo.png" />
            <h1>Trivia</h1>
            <h2>Mitologia Grega</h2>
            <button>Entrar</button>
            <button>Google</button>
            <button>Facebook</button>
        </div>
    `;

    container.innerHTML = template;

    return container;
}
