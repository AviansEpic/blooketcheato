(()=>{var e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove();let t=Number(prompt("Defense:"));t>4&&(t=4),t<0&&(t=0),Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.setState({defense:t})})();
