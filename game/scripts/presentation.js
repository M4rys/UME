const clean = (ctx) => {
    let cor = 'rgb(255, 255, 255)'

    ctx.fillStyle = cor

    ctx.clearRect(0, 0, 1024, 512)
    //ctx.fillRect(0, 0, 1024, 512)

    ctx.fillRect(16, 16, 992, 480)
}
// desenha a moldura em volta do jogo
function plotMoldura(ctx, assets) {
    ctx.drawImage(assets.cornerLT, 0, 0)
    ctx.drawImage(assets.cornerRT, 992, 0)
    ctx.drawImage(assets.cornerRB, 992, 480)
    ctx.drawImage(assets.cornerLB, 0, 480)

    for (let i = 1; i < 31; i++) ctx.drawImage(assets.wallT, i*32, 0);
    for (let i = 1; i < 15; i++) ctx.drawImage(assets.wallR, 992, i*32);
    for (let i = 1; i < 31; i++) ctx.drawImage(assets.wallB, i*32, 480);
    for (let i = 1; i < 15; i++) ctx.drawImage(assets.wallL, 0, i*32);
}

export function renderScreen(ctx, assets, game) {
    // RETIRAR DEPOIS
    game.update()

    clean(ctx)
    plotMoldura(ctx, assets)

    // personagens

    for (const personagemId in game.state.personagens) {
        const personagem = game.state.personagens[personagemId]

        if ( personagem.transform === null ) continue;

        //console.log("personagem", personagem.transform.y)

        ctx.drawImage(
            assets.character,
            personagem.transform.x - personagem.transform.sx / 2,
            personagem.transform.y - personagem.transform.sy / 2
        )
    }

    //objetos

    for (const itemId in game.state.itens) {
        const objeto = game.state.itens[itemId]
        
        if ( objeto.transform === null ) continue;

        //console.log(objeto.transform.y)

        ctx.drawImage(
            assets.plataforma,
            objeto.transform.x - objeto.transform.sx / 2,
            objeto.transform.y - objeto.transform.sy / 2
        )
    }

    requestAnimationFrame(() => renderScreen(ctx, assets, game))
}

export default { clean, plotMoldura, renderScreen }