(()=>{
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.prompt = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.prompt.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    let round = prompt("Round: ");

    let stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;

    stateChanger.state.game.scene.enemyQueue.length = 0;
    stateChanger.state.game.scene.physics.world.bodies.entries.forEach((enemy)=>enemy.gameObject.receiveDamage(enemy.gameObject.hp, 1));
})();