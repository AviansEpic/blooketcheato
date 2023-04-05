/**
* @author Bytecode
* @version 0.01

ATTENTION: Don't use this for Bookmarklets, it will most likely break. Use gui.js (https://github.com/AviansEpic/blooketcheato/gui.js)

*/
(()=>{
    var Games = {
        "/cafe": "Cafe",
        "/play/hack": "CryptoHack",
        "/defense": "TowerDefense",
        "/play/defense2": "TowerDefense2",
        "/play/fishing": "FishingFrenzy",
        "/play/battle-royale": "BattleRoyale",
        "/play/gold": "GoldQuest",
        "/play/factory": "Factory",
        "/kingdom": "CrazyKingdom",
        "/tower": "TowerofDoom",
        "/play/dino": "DeceptiveDino",
        "/play/racing": "Racing",
        "/play/rush": "BlookRush"
    };
    
    function UI() {
        var Lib = {};
        var UIMain = document.createElement("div");
        UIMain.innerHTML = "<div style='display:block;width:40%;background:rgb(37,37,37);border-radius:25px;position:absolute;'><h1>AvianCheat</h1></div>";
        UIMain.style="overflow:'hidden';z-index:99;text-align:center;color:#ffffff;";
        var toggled = true;
        document.body.appendChild(UIMain);
        
        window.onkeydown = ((e)=>{
            if (e.which == 16) {
                toggled = !toggled;
                UIMain.hidden = toggled;
            }
        })

        Lib.CreateButton = function(text, onclick) {
            var button = document.createElement("button");
            button.style = "background:rgb(26,26,26);color:#ffffff;border-radius:10px;border-color:#000000;";
            button.innerText = text;
            button.onclick = onclick;
            UIMain.children[0].appendChild(button);
            UIMain.children[0].appendChild(document.createElement("br"));
            return button;
        };

        Lib.CreateTextBox = function(placeholder, buttonText, type, ondone) {
            var textbox = document.createElement("input");
            textbox.type = type;
            textbox.style = "background:rgb(26,26,26);color:#ffffff;border-radius:10px;border-color:#000000;";
            textbox.placeholder = placeholder;
            UIMain.children[0].appendChild(textbox);
            Lib.CreateButton(buttonText, (()=>ondone(textbox.value)));
            UIMain.children[0].appendChild(document.createElement("br"));
            return textbox;
        }
        
        Lib.CreateLabel = function(text) {
            var label = document.createElement("p");
            label.style = "background:rgb(26,26,26);color:#ffffff;border-radius:10px;border-color:#000000;";
            label.innerText = text;
            UIMain.children[0].appendChild(label);
            UIMain.children[0].appendChild(document.createElement("br"));
            return label;
        };
        
        Lib.Destroy = function() {
            UIMain.remove();
        }
        
        return Lib;
    }

    var Lib = UI();
    var currentGame = "n/a";
    
    var IWouldLikeFreedomOfSpeechBlooketLetMeAlert = document.createElement("iframe");
    document.body.append(IWouldLikeFreedomOfSpeechBlooketLetMeAlert);
    window.alert = IWouldLikeFreedomOfSpeechBlooketLetMeAlert.contentWindow.alert.bind(window);
    IWouldLikeFreedomOfSpeechBlooketLetMeAlert.remove();

    for (path in Games) {
        if (window.location.pathname.substring(0, path.length) == path) {
            currentGame = Games[path];
        }
    }
    
    if (currentGame == "n/a") {
        Lib.Destroy();
        return alert("Game not supported");
    }
    
    Lib.CreateLabel("Current Game: " + currentGame);

    const stateChanger = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner.stateNode;
    
    
    var answer = Lib.CreateLabel("Answer: ????");
    
    if (currentGame == "Cafe") {
        Lib.CreateTextBox("Set Cash", "Set", "number", (cafeCash) => stateChanger.setState({ cafeCash }) );
        
        Lib.CreateTextBox("Set Food", "Set", "number", (amount) => {
            stateChanger.state.foods.forEach(food => food.stock = amount);
            stateChanger.forceUpdate();
        });
    } else if(currentGame == "CryptoHack") {
        let PasswordCheck = Lib.CreateLabel("Player's Password: ????");
        
        function passcheck() {
            if (stateChanger.stage == "hack") {
                answer.innerText = "Player's Password: " + stateChanger.correctPassword;
            } else {
                answer.innerText = "Player's Password: ????";
            }
            
            setTimeout(passcheck, 50);
        }
        
        passcheck();
        
        Lib.CreateTextBox("Set Crypto", "Set", "number", (crypto) => stateChanger.setState({crypto, crypto2: crypto}));
        Lib.CreateTextBox("Set Password", "Set", "text", (password) => stateChanger.setState({password}));
    } else if(currentGame == "TowerDefense") {
        Lib.CreateTextBox("Set Round", "Set", "number", (round) => stateChanger.setState({round}));
        Lib.CreateTextBox("Set Tokens", "Set", "number", (tokens) => stateChanger.setState({tokens}));
        Lib.CreateButton("Complete Wave", ()=> {
            stateChanger.enemies = [];
            stateChanger.futureEnemies = [];
        });
        Lib.CreateButton("OP Towers", ()=>{
            stateChanger.towers.forEach(tower => {
                tower.cd = 0;
                tower.range = 9e9;
                tower.fullCd = 0;
                tower.damage = 9e9;
                tower.level = 9999;
            })
        })
    } else if(currentGame == "TowerDefense2") {
        Lib.CreateTextBox("Set Round", "Set", "number", (round) => stateChanger.setState({round}));
        Lib.CreateTextBox("Set Coins", "Set", "number", (coins) => stateChanger.setState({coins}));
        Lib.CreateButton("Complete Wave", ()=>{
            stateChanger.state.game.scene.enemyQueue.length = 0;
            stateChanger.state.game.scene.physics.world.bodies.entries.forEach((enemy)=>{
                enemy.gameObject.receiveDamage(enemy.gameObject.hp)
            })
        })
        Lib.CreateButton("OP Towers", ()=>{
            stateChanger.state.towers.forEach(tower => {
                tower.stats.level = 9999;
                tower.stats.dmg = 9e9;
                tower.stats.firerate = 30;
                tower.stats.ghostDetect = true;
                tower.stats.maxTargets = 9e9;
                tower.stats.range = 100;
            })
        })
    } else if(currentGame == "FishingFrenzy") {
        Lib.CreateTextBox("Set Weight", "Set", "number", (weight) => stateChanger.setState({weight, weight2: weight}));
        Lib.CreateTextBox("Set Lure", "Set", "number", (lure) => {
            if (lure > 5) lure = 5;
            if (lure < 1) lure = 1;
            lure--;
            stateChanger.setState({lure});
        })
    } else if(currentGame == "GoldQuest") {
        let chestl = Lib.CreateLabel("Left Chest: n/a");
        let chestm = Lib.CreateLabel("Middle Chest: n/a");
        let chestr = Lib.CreateLabel("Right Chest: n/a");
        Lib.CreateTextBox("Set Gold", "Set", "number", (gold)=>stateChanger.setState({gold, gold2:gold}));
        
        function chestCheck() {
            let l = stateChanger.state.choices?.[0]?.text || "n/a";
            let m = stateChanger.state.choices?.[1]?.text || "n/a";
            let r = stateChanger.state.choices?.[2]?.text || "n/a";

            chestl.innerText = "Left Chest: " + l;
            chestm.innerText = "Middle Chest: " + m;
            chestr.innerText = "Right Chest: " + r;
            

            setTimeout(chestCheck, 50);
        }
    
        chestCheck();
    } else if(currentGame == "Factory") {
        Lib.CreateTextBox("Set Cash", "Set", "number", (cash)=>stateChanger.setState({cash}));
        Lib.CreateButton("Give OP Unicorn", (()=>{
            if (stateChanger.state.blooks[9] !== undefined) {
                alert("You already have all blooks! Please delete one.");
            }
            let blooks = stateChanger.state.blooks;
            let newblooks = blooks;
            let blook = { 
                name: "Unicorn",
                color: "#f6afce", 
                class: "⚔️", 
                rarity: "Epic",
                cash: [9e9 * 1, 9e9 * 2, 9e9 * 3, 9e9 * 4, 9e9 * 5], 
                time: [0.01, 0.01, 0.01, 0.01, 0.01],
                price: [1, 2, 3, 4, 5]
            }
            
            stateChanger.chooseBlook(blook);
        }));
        Lib.CreateButton("OP Blooks", ()=>{
            stateChanger.state.blooks.forEach((blook)=>{
                blook.level = 1;
                blook.cash[3] = 9e9;
                blook.time[3] = 0.001;
                blook.level = 4;
            })
        });
    } else if(currentGame == "CrazyKingdom") {
        Lib.CreateTextBox("Set Guests", "Set", "number", (guestScore)=>stateChanger.setState({guestScore}));
        Lib.CreateButton("Next Guest", ()=>stateChanger.nextGuest());
        Lib.CreateButton("Max Stats", ()=>stateChanger.setState({ gold:100, happiness:100, materials:100, people:100 }));
    } else if(currentGame == "TowerofDoom") {
        Lib.CreateButton("Heal", (()=>{
            if (window.location.pathname == "/tower/battle") {
                stateChanger.setState({myHealth: 100});
            } else {
                alert("You need to be in battle!")
            }
        }));

        Lib.CreateTextBox("Set Coins", "Set", "number", ((coins)=>{
            stateChanger.props.setTowerCoins(coins);
        }));
    } else if(currentGame == "DeceptiveDino") {
        Lib.CreateTextBox("Set Fossils", "Set", "number", (fossils) => {stateChanger.setState({fossils})});
        Lib.CreateTextBox("Set Multiplier", "Set", "number", (fossilMult)=>stateChanger.setState({fossilMult}));

        var rockl = Lib.CreateLabel("Left Rock: n/a");
        var rockm = Lib.CreateLabel("Middle Rock: n/a");
        var rockr = Lib.CreateLabel("Right Rock: n/a");

        function rockCheck() {
            var l = stateChanger.state.choices?.[0]?.text || "n/a";
            var m = stateChanger.state.choices?.[1]?.text || "n/a";
            var r = stateChanger.state.choices?.[2]?.text || "n/a";

            rockl.innerText = "Left Rock: " + l;
            rockm.innerText = "Middle Rock: " + m;
            rockr.innerText = "Right Rock: " + r;
            

            setTimeout(rockCheck, 50);
        }
    
        rockCheck();
    } else if(currentGame == "Racing") {
        Lib.CreateButton("Finish", ()=>{
            stateChanger.setState({ progress: stateChanger.state.goalAmount });
            let answer = stateChanger?.state?.question?.correctAnswers?.[0];
            if (answer !== undefined) {
                for (let i = 0; i < 4; i++) {
                    let question = document.querySelector("#answer" + i + " > div > div > div > div");
                    if (question?.innerHTML == answer) {
                        question.click();
                    }
                }
            }
        });
    } else if(currentGame == "BlookRush") {
        Lib.CreateTextBox("Set Blooks", "Set", "number", (numBlooks)=>stateChanger.setState({numBlooks}));
        Lib.CreateTextBox("Defense", "Set", "number", (numDefense)=>{
            if (defense > 4) {
                defense = 4;
            }

            if (defense < 0) {
                defense = 0;
            }

            stateChanger.setState({numDefense});
        })
    }

    let AutoAnswerToggle = false;

    let AutoAnswer = Lib.CreateButton("Auto-Answer: " + (AutoAnswerToggle && "ON" || "OFF"), ()=>{
        AutoAnswerToggle = !AutoAnswerToggle;
        AutoAnswer.innerText = "Auto-Answer: " + (AutoAnswerToggle && "ON" || "OFF");
    });

    
    function questionCheck() {
        if (stateChanger?.state?.question?.correctAnswers !== undefined) {
            answer.innerText = "Answer: " + stateChanger?.state?.question?.correctAnswers?.[0];
            if (AutoAnswerToggle) {
                for (let i = 0; i < 4; i++) {
                    let question = document.querySelector("#answer" + i + " > div > div > div > div");
                    if (question?.innerHTML == stateChanger?.state?.question?.correctAnswers?.[0]) {
                        question.click();
                        for (let i = 0; i < 20; i++) {
                            document.querySelector("#feedbackButton")?.click();
                        }
                    
                    }
                }
            }
        } else {
            answer.innerText = "Answer: ????";
        }
        
        setTimeout(questionCheck, 50);
    }
    
    questionCheck();
})();
