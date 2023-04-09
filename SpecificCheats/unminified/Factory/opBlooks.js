(()=>{
    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.state.blooks.forEach((blook)=>{
        blook.level = 1;
        blook.cash[3] = 9e9;
        blook.time[3] = 0.001;
        blook.level = 4;
    })
})()