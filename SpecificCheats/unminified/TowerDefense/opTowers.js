(()=>{
    Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode.towers.forEach(tower => {
        tower.cd = 0;
        tower.range = 9e9;
        tower.fullCd = 0;
        tower.damage = 9e9;
        tower.level = 9999;
    });
})();