    difficulty.className = "hide";
    selectMode.className = "hide";
    stageLvl.className = "hide";
    lvl1.className = "hide"
    diffButton.className= "hide";
    modeButton.className="hide";
    loadGif.className = "hide";
    Developers.className="hide";
    stage.className = "hide";
    yourEgg.className = "hide";
    logo.className = "pulsing";
    play.className = "pulsing";
    guide.className = "show";
        
    setTimeout(() => {
        auStart.play();
    }, 300);
    
    function clickSFX(){
        auClick.currentTime = 0;
        auClick.volume = 0.1;
        auClick.play();
    }
    document.addEventListener("click",clickSFX);


    start.className = "show";
    start.style.opacity = 1;

    play.onclick= ()=>{
        start.style.opacity = 0;
        setTimeout(() => {
            start.className = "hide";   
            stage.className= "";
            yourEgg.className = "show";
            setTimeout(() => {
                stage.style.opacity = 1;
                yourEgg.style.opacity = 1;
            }, 50);
            
            
            auMain.play();

            loadGif.className = "hide";
        }, 3000);
        
    }

    function DetectPlayerAnim(anim){
        if(SelectedPlayer === "Player1")
        {
            if(anim === "Standing"){
                return("standing");
            }
            if(anim === "Punching"){
                return("punching zindex");
            }
            if(anim === "Kicking"){
                return("kicking zindex");
            }
            if(anim === "Knifing"){
                return("knifing zindex");
            }
            if(anim === "GotHit"){
                return("gothit");
            }
            if(anim === "Won"){
                return("won");
            }
            if(anim === "Died"){
                return("died");
            }
            if(anim === "Dodged"){
                return("dodged");
            }
        }

        if(SelectedPlayer === "Player2")
        {
            if(anim === "Standing"){
                return("standing2");
            }
            if(anim === "Punching"){
                return("punching2 zindex");
            }
            if(anim === "Kicking"){
                return("kicking2 zindex");
            }
            if(anim === "Knifing"){
                return("knifing2 zindex");
            }
            if(anim === "GotHit"){
                return("gothit2");
            }
            if(anim === "Won"){
                return("won2");
            }
            if(anim === "Died"){
                return("died2");
            }
            if(anim === "Dodged"){
                return("dodged2");
            }
        }
        khoros.className = DetectPlayerAnim("Standing");
    }
    
    function DetectPlayerAu(Au){
        if(SelectedPlayer === "Player1")
        {
            if(Au === "Punch"){
                return(auPunch.currentTime = 0,auPunch.play());
            }
            if(Au === "Kick"){
                return(auKick.currentTime = 0,auKick.play());
            }
            if(Au === "Knife"){
                return(auKnife.currentTime = 0,auKnife.play());
            }
        }
        if(SelectedPlayer === "Player2")
        {
            if(Au === "Punch"){
                return(auPunch2.currentTime = 0,auPunch2.play());
            }
            if(Au === "Kick"){
                return(auKick2.currentTime = 0,auKick2.play());
            }
            if(Au === "Knife"){
                return(auKnife2.currentTime = 0,auKnife2.play());
            }
        }
    }
    function DetectEnemyAu(EnemyAu){
        if(EnemyAu === "Punch"){
            return(auPunch.currentTime = 0,auPunch.play());
        }
        if(EnemyAu === "UpperPunch"){
            return(auEnemyUpperPunch.currentTime = 0,auEnemyUpperPunch.play());
        }
        if(EnemyAu === "UpperKick"){
            return(auEnemyUpperKick.currentTime = 0,auEnemyUpperKick.play());
        }
    }

    function hitAu(){
        auEnemyHit.currentTime = 0;
        auEnemyHit.play();
    }
    function knifeHitAu(){
        auKnifeHit.currentTime = 0;
        auKnifeHit.play();
        PlayerUsing = 1;
    }
    function DetectEnemyHit(){
        console.log(PlayerUsing);
        if(PlayerUsing === 3){
            knifeHitAu();
        } else {
            hitAu();
        }
    }


    var initialHP = 100;
    var initialEnemyHP = 100;
    var hp = initialHP;
    var enemyhp = initialEnemyHP;
    var initialRoundCound = 0;
    var initialLastKnifeRound = -3;
    var roundCounter = initialRoundCound;
    var lastKnifeRound = initialLastKnifeRound;
    var initialPvpLastKnifeRound = -3;
    var pvplastKnifeRound = initialPvpLastKnifeRound;
    var initialPvpEnemyLastKnifeRound = -3;
    var pvpEnemylastKnifeRound = initialPvpEnemyLastKnifeRound;
    var egg = 0;
    var PlayerUsing
    var MuteState

    var fightBtnishidden = false;
    var aiSelected = false;
    var turnOfPlayer = true;

    var pvpArray = [{enemyPunch2:5,enemyPunch:10,enemyKick:15},{playerPunch:5,playerKick:10,playerKnife:15}];

    var SelectedPlayer = "Player1";


function resetLevel() {
    hp = initialHP;
    enemyhp = initialEnemyHP;
    HealthBar(hp);
    enemyHealthBar(enemyhp);
    roundCounter = initialRoundCound;
    lastKnifeRound = initialLastKnifeRound;
    fightBtn.className = "show";
    fightBtnishidden = false;
    player.className = DetectPlayerAnim("Standing");
    enemy.className = "standing";
    winpage.className = "hide";
    losepage.className = "hide";
    knife.className = "";
    turnOfPlayer= true;
    pvplastKnifeRound = initialPvpLastKnifeRound;
    pvpEnemylastKnifeRound = initialPvpEnemyLastKnifeRound;

}
    
// lvl select stage
story.onclick = function(){
    loadGif.className = "show";
    setTimeout(() => {
        stage.className = "hide";
        stageLvl.className = "show";
        selectMode.className = "show";

        // Lock Lvl2
        if (egg >= 3){
            level2.className = "show";
            locklvl2.className = "hide";
        } else {
            level2.className = "hide";
            locklvl2.className = "show";
        }

        // Lock Lvl3
        if (egg >= 6){
            level3.className = "show";
            locklvl3.className = "hide";
        } else {
            level3.className = "hide";
            locklvl3.className = "show";
        }

        auMain.pause();
        auStory.play();

        loadGif.className = "hide";
    }, 1500);
}
Player1.onclick = ()=>{
    loadGif.className= "show";
    setTimeout(() => {
        SelectedPlayer = "Player1";
        DetectPlayerAnim();
        auCharSel.currentTime = 0;
        auCharSel.play();

        loadGif.className = "hide";
    }, 300);
}
Player2.onclick = ()=>{
    loadGif.className= "show";
    setTimeout(() => {
        SelectedPlayer = "Player2";
        DetectPlayerAnim();
        auCharSel.currentTime = 0;
        auCharSel.play();

        loadGif.className = "hide";
    }, 300);

}
easy.onclick= ()=>{
    difficulty.className = "hide";
    difficultyArray = [{enemyPunch2:2,enemyPunch:5,enemyKick:10},{playerPunch:15,playerKick:25,playerKnife:40}];
    diffButton.className = "easy diffTextStyle";
    diffButton.innerHTML = "ضعیف کش";
    eggScore = 1;
}
avarage.onclick= ()=>{
    difficulty.className = "hide";
    difficultyArray = [{enemyPunch2:5,enemyPunch:10,enemyKick:15},{playerPunch:5,playerKick:10,playerKnife:15}];
    diffButton.className = "avarage diffTextStyle";
    diffButton.innerHTML = "معمولی";
    eggScore = 2;
}
hard.onclick= ()=>{
    difficulty.className = "hide";
    difficultyArray = [{enemyPunch2:8,enemyPunch:10,enemyKick:15},{playerPunch:2,playerKick:5,playerKnife:10}];
    diffButton.className = "hard diffTextStyle";
    diffButton.innerHTML = "غول برره";
    eggScore = 3;
}
diffButton.onclick= ()=>{
    difficulty.className = "show";
}
ai.onclick = ()=>{
    aiSelected = true;
    selectMode.className= "hide";
    modeButton.className = "ai";
    difficulty.className= "show";
}
pvp.onclick = ()=>{
    aiSelected = false;
    selectMode.className= "hide";
    modeButton.className = "pvp";
    diffButton.className= "hide";
    difficulty.className= "hide";
}
modeButton.onclick = () => {
    selectMode.className= "show";
}

// lvl select stage's back button
back.onclick = ()=>{
    loadGif.className= "show";
    setTimeout(() => {
        stage.className = "show";
        stageLvl.className = "hide";
        auStory.pause();
        auMain.play();

        loadGif.className = "hide";
    }, 1500);
}
// Shop
shop.onclick = function(){
    loadGif.className="show";
    setTimeout(() => {
        khoros.className = "hide";
        story.className = "hide";
        backStage.className = "hide";
        shopPage.className = "show";
        yourEgg.className = "hide";
        CharSelect.className = "hide";
        setPage1.className = "hide";
        right1.className = "hide";
        left1.className = "hide";
        setPage2.className = "hide";
        right2.className = "hide";
        left2.className = "hide";
        setPage3.className = "hide";
        right3.className = "hide";
        left3.className = "hide";

        MuteState = muteBtn.className;
        muteBtn.className = "hide";
        auShopOpen.play();

        loadGif.className= "hide";
    }, 1500);
}
store2.onclick = ()=>{
    loadGif.className = "show";
    setTimeout(() => {
        items2.className = "show";

        loadGif.className = "hide";
    }, 500);
}
backItems2.onclick = (event)=>{
    loadGif.className = "show";
    event.stopPropagation();
    setTimeout(() => {
        items2.className = "hide";

        loadGif.className = "hide";
    }, 500);
}
store3.onclick = ()=>{
    loadGif.className = "show";
    setTimeout(() => {
        
        items3.className = "show";
        loadGif.className = "hide";
    }, 500);
}
backItems3.onclick = (event)=>{
    loadGif.className = "show";
    event.stopPropagation();
    setTimeout(() => {
        items3.className = "hide";

        loadGif.className = "hide";
    }, 500);  
}
store4.onclick = ()=>{
    loadGif.className = "show";
    setTimeout(() => {
        items4.className = "show";

        loadGif.className = "hide";
    }, 500);
}
backItems4.onclick = (event)=>{
    loadGif.className = "show";
    event.stopPropagation();
    setTimeout(() => {
        items4.className = "hide"; 

        loadGif.className = "hide";
    }, 500);
}
store5.onclick = ()=>{
    loadGif.className = "show";
    setTimeout(() => {
        items5.className = "show";

        loadGif.className = "hide";
    }, 500);
}
backItems5.onclick = (event)=>{
    loadGif.className = "show";
    event.stopPropagation();
    setTimeout(() => {
        items5.className = "hide";  

        loadGif.className = "hide";
    }, 500);
}
store7.onclick = ()=>{
    loadGif.className = "show";
    setTimeout(() => {
        items7.className = "show";

        loadGif.className = "hide";
    }, 500);
}
backItems7.onclick = (event)=>{
    loadGif.className = "show";
    event.stopPropagation();
    setTimeout(() => {
        items7.className = "hide";

        loadGif.className = "hide";
    }, 500);
}
// sekeh.onclick = ()=>{
//     khoros.className = "hide";
//     story.className = "hide";
//     war.className = "hide";
//     backStage.className = "hide";
//     items5.className = "show";
// }

// lvl 1
level1.onclick = ()=>{
    loadGif.className="show";
    setTimeout(() => {
        resetLevel();
        stageLvl.className = "hide";
        lvl1.className = "show";
        yourEgg.className="hide";
        setTimeout(() => {
            guide.style.opacity = 1;
        }, 50);
        
        auStory.pause();
        aulvl1.currentTime = 0;
        aulvl1.play();
        // fosh01player.play();
        // setTimeout(()=>{fosh01enemy.play();}, 3000);
        auFight.play();

        loadGif.className="hide";
    }, 1500);
    
}
level2.onclick = ()=>{
    loadGif.className="show";
    setTimeout(() => {
        resetLevel();
        stageLvl.className = "hide";
        lvl1.className = "show lvl2";
        yourEgg.className="hide";
        auStory.pause();
        aulvl2.currentTime = 0;
        aulvl2.play();
        auFight.play();

        loadGif.className= "hide";
    }, 1500);
}
level3.onclick = ()=>{
    loadGif.className="show";
    setTimeout(() => {
        resetLevel();
        stageLvl.className = "hide";
        lvl1.className = "show lvl3";
        yourEgg.className="hide";
        auStory.pause();
        aulvl3.currentTime = 0;
        aulvl3.play();
        auFight.play();

        loadGif.className = "hide";
    }, 1500);
}
guide.onclick = ()=>{
    guide.style.opacity = 0;
    setTimeout(() => {
        guide.className= "hide";
    }, 1000);
    
}
winpage.onclick = ()=>{
    loadGif.className= "show";
    setTimeout(() => {
        lvl1.className ="hide"
        stage.className = "show"

        yourEgg.className="show";
        aulvl1.pause();
        aulvl2.pause();
        aulvl3.pause();
        auMain.play();
        resetLevel();

        loadGif.className="hide";
    }, 1500);
}
losepage.onclick = ()=>{
    loadGif.className="show";
    setTimeout(() => {
        lvl1.className ="hide"
        stage.className = "show"

        yourEgg.className="show";
        aulvl1.pause();
        aulvl2.pause();
        aulvl3.pause();
        auMain.play();
        resetLevel();

        loadGif.className= "hide";
    }, 1500);
}

setting.onclick = ()=>{
    setPage1.className = "show";
    left1.className = "show";
    right1.className = "show zindex";
}
backSetPage1.onclick = ()=>{
    setPage1.className = "hide";
    left1.className = "hide";
    right1.className = "hide";        
}
backSetPage2.onclick = ()=>{
    setPage2.className = "hide";
    left2.className = "hide";
    right2.className = "hide";        
}
backSetPage3.onclick = ()=>{
    setPage3.className = "hide";
    left3.className = "hide";
    right3.className = "hide";        
}
right1.onclick = ()=>{
    setPage2.className = "show";
    left2.className = "show";
    right2.className = "show zindex";
    setPage1.className = "hide";
    left1.className = "hide";
    right1.className = "hide";   
}
right2.onclick = ()=>{
    setPage3.className = "show";
    left3.className = "show";
    right3.className = "show zindex";
    setPage2.className = "hide";
    left2.className = "hide";
    right2.className = "hide";    
}
right3.onclick = ()=>{
    setPage1.className = "show";
    left1.className = "show";
    right1.className = "show zindex";
    setPage3.className = "hide";
    left3.className = "hide";
    right3.className = "hide";    
}
left1.onclick = ()=>{
    setPage3.className = "show";
    left3.className = "show";
    right3.className = "show zindex";
    setPage1.className = "hide";
    left1.className = "hide";
    right1.className = "hide";     
}
left2.onclick = ()=>{
    setPage1.className = "show";
    left1.className = "show";
    right1.className = "show zindex";
    setPage2.className = "hide";
    left2.className = "hide";
    right2.className = "hide"; 
}
left3.onclick = ()=>{
    setPage2.className = "show";
    left2.className = "show";
    right2.className = "show zindex";
    setPage3.className = "hide";
    left3.className = "hide";
    right3.className = "hide";
}
Developers.onclick= ()=>{
    Developers.className="hide";
}
DevBtn.onclick= ()=>{
    Developers.className="running";
    setTimeout(() => {
        Developers.className="hide";
    }, 15000);
}

backStage.onclick = ()=>{
    leave.className = "show";
    setTimeout(() => {
        leave.style.opacity = 1;
    }, 50);
}
backShop.onclick = ()=>{
    loadGif.className = "show";
    setTimeout(() => {
        shopPage.className = "hide";
        stage.className = "show";
        khoros.className = DetectPlayerAnim("Standing");
        backStage.className = "backItems show";
        story.className = "show";
        yourEgg.className = "show";
        CharSelect.className = "show";
        muteBtn.className = MuteState;

        loadGif.className= "hide";
    }, 1500);
}
No.onclick = ()=>{
    leave.style.opacity = 0;
    setTimeout(() => {
        leave.className = "hide";
    }, 1000);
}
Yes.onclick = ()=>{
    stage.style.opacity= 0;
    yourEgg.style.opacity = 0;
    setTimeout(() => {
        start.className = "show";   
        stage.className= "hide";
        yourEgg.className = "hide";
        leave.className = "hide";
        setTimeout(() => {
            start.style.opacity = 1;
        }, 50);
        auMain.pause();

        loadGif.className = "hide";
    }, 3000);
    
}

// fight


function enemyHealthBar(enHealth) {
    var enHPbar = document.getElementById('enhealthBar');
    var enHPtext = document.getElementById('enhealthText');
    enHPbar.style.width = enHealth + '%';
    enHPtext.textContent = enHealth + '%';
    if (enHealth > 60) {
      enHPbar.style.backgroundColor = '#e3cd00';
    } else if (enHealth > 30) {
      enHPbar.style.backgroundColor = '#ff8400';
    } else {
      enHPbar.style.backgroundColor = '#ff3300';
    }
}
function HealthBar(Health) {
    var HPbar = document.getElementById('healthBar');
    var HPtext = document.getElementById('healthText');
    HPbar.style.width = Health + '%';
    HPtext.textContent = Health + '%';
    if (Health > 60) {
      HPbar.style.backgroundColor = '#e3cd00';
    } else if (Health > 30) {
      HPbar.style.backgroundColor = '#ff8400';
    } else {
      HPbar.style.backgroundColor = '#ff3300';
    }
}

function chanceOfMiss() {
    const numbers = [1, 2, 3, 4];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}
function handleEnemyHit(damage) {
    enemy.className = "gothit";
    if(aiSelected == false){
        const enmissChance = chanceOfMiss();
        if(enmissChance !== 4){
            if (enemyhp > 0) {
                enemyhp -= damage;
                if (enemyhp < 0) {
                    enemyhp = 0;
                }
                enemyHealthBar(enemyhp);
                DetectEnemyHit();
            }
        } else if(enmissChance === 4) {
            enemy.className="dodged";
        }
    } else if(aiSelected == true){
        if (enemyhp > 0) {
                enemyhp -= damage;
                if (enemyhp < 0) {
                    enemyhp = 0;
                }
                enemyHealthBar(enemyhp);
                DetectEnemyHit();
            }
    }
    if (enemyhp > 0) {
        setTimeout(() => {
            enemy.className = "standing";
        }, 700);
    } else {
        setTimeout(() => {
            enemy.className = "died";
        }, 700);
        setTimeout(()=>{
            fightBtn.className = "hide";
            fightBtnishidden = true;
            player.className = DetectPlayerAnim("Won");
            auWin.play();
        }, 1100)
        setTimeout(()=>{
            winpage.className = "show zindex"
            if(aiSelected == true){
                egg += eggScore;
                yourEggValue.innerHTML = egg;
            }
        }, 5000)
    }
}
function handlePlayerHit(damage) {
    
    const missChance = chanceOfMiss();
    if(missChance !== 4){
        player.className = DetectPlayerAnim("GotHit");
        if (hp > 0) {
            hp -= damage;
            if (hp < 0) {
                hp = 0;
            }
            HealthBar(hp);
            DetectEnemyHit();
        }
    } else if(missChance === 4){
        player.className = DetectPlayerAnim("Dodged");
    }
    if (hp > 0) {
        setTimeout(() => {
            player.className = DetectPlayerAnim("Standing");
        }, 700);
    } else {
        setTimeout(() => {
            player.className = DetectPlayerAnim("Died");
            auDeath.play();
        }, 700);
        setTimeout(()=>{
            fightBtn.className = "hide";
            fightBtnishidden = true;
        }, 1100)
        setTimeout(()=>{
            losepage.className = "show zindex"
        }, 5000)
    }
}
function randomNum() {
    const numbers = [1, 2, 3];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
}
function enemystrike(){
    if(enemyhp > 0){
        const randomNumb = randomNum();
        // const fosh = runOnce();
        if(randomNumb === 1){enemy.className = "punching";DetectEnemyAu("UpperPunch");
            setTimeout(() => {handlePlayerHit(difficultyArray[0].enemyPunch);}, 900);
            setTimeout(()=>{enemy.className = "standing";fightBtn.className = "show"; fightBtnishidden = false;//fosh
            }, 1500);
        }

        else if(randomNumb === 2){enemy.className = "kicking";DetectEnemyAu("UpperKick");
            setTimeout(() => {handlePlayerHit(difficultyArray[0].enemyKick);}, 900);
            setTimeout(()=>{enemy.className = "standing";fightBtn.className = "show"; fightBtnishidden = false;//fosh
            }, 2000);
        }

        else if(randomNumb === 3){enemy.className = "punching2";DetectEnemyAu("Punch");
            setTimeout(() => {handlePlayerHit(difficultyArray[0].enemyPunch2);}, 600);
            setTimeout(()=>{enemy.className = "standing";fightBtn.className = "show"; fightBtnishidden = false;//fosh
            }, 1200);
        }
    }
}
function fisting(){
    DetectPlayerAu("Punch");
    player.className = DetectPlayerAnim("Punching");
    fightBtn.className= "hide";
    fightBtnishidden = true;
    setTimeout(function(){
        player.className = DetectPlayerAnim("Standing");
        setTimeout(function(){enemystrike()}, 500); 
    }, 1000);
    setTimeout(() => {handleEnemyHit(difficultyArray[1].playerPunch);}, 500);
    
    roundCounter++;
    updateKnifeButton()
    PlayerUsing = 1;
}
function legging(){
    DetectPlayerAu("Kick");
    player.className = DetectPlayerAnim("Kicking");
    fightBtn.className= "hide";
    fightBtnishidden = true;
    setTimeout(function(){
        player.className = DetectPlayerAnim("Standing");
        setTimeout(function(){enemystrike()}, 500);
    }, 1700);
    setTimeout(() => {handleEnemyHit(difficultyArray[1].playerKick);}, 600);
    
    roundCounter++;
    updateKnifeButton()
    PlayerUsing = 2;
}
function knifing(){
    if (roundCounter - lastKnifeRound >= 3) {
        DetectPlayerAu("Knife");
        player.className = DetectPlayerAnim("Knifing");
        fightBtn.className= "hide";
        fightBtnishidden = true;
        setTimeout(function(){
            player.className = DetectPlayerAnim("Standing");
            setTimeout(function(){enemystrike()}, 500);
        }, 1800);
        setTimeout(() => {handleEnemyHit(difficultyArray[1].playerKnife);}, 1000);
        lastKnifeRound = roundCounter;
        roundCounter++;
        updateKnifeButton()
        PlayerUsing = 3;
    }
}
function pvpfisting(){
    DetectPlayerAu("Punch");
    player.className = DetectPlayerAnim("Punching");
    fightBtn.className= "hide";
    fightBtnishidden = true;
    setTimeout(function(){
        player.className = DetectPlayerAnim("Standing");
        if (enemyhp > 0) {
            setTimeout(function(){fightBtn.className = "show"; fightBtnishidden = false;}, 500); 
        }
    }, 1000);
    setTimeout(() => {handleEnemyHit(pvpArray[1].playerPunch);}, 500);
    
    turnOfPlayer = false;
    updatePvpKnifeButton();
    PlayerUsing = 1;
}
function pvplegging(){
    DetectPlayerAu("Kick");
    player.className = DetectPlayerAnim("Kicking");
    fightBtn.className= "hide";
    fightBtnishidden = true;
    setTimeout(function(){
        player.className = DetectPlayerAnim("Standing");
        if (enemyhp > 0) {
            setTimeout(function(){fightBtn.className = "show"; fightBtnishidden = false;}, 500); 
        }
    }, 1700);
    setTimeout(() => {handleEnemyHit(pvpArray[1].playerKick);}, 600);
    
    turnOfPlayer = false;
    updatePvpKnifeButton();
    PlayerUsing = 2;
}
function pvpknifing(){
    if (roundCounter - pvplastKnifeRound >= 3) {
        DetectPlayerAu("Knife");
        player.className = DetectPlayerAnim("Knifing");
        fightBtn.className= "hide";
        fightBtnishidden = true;
        setTimeout(function(){
            player.className = DetectPlayerAnim("Standing");
            if (enemyhp > 0) {
                setTimeout(function(){fightBtn.className = "show"; fightBtnishidden = false;}, 500); 
            }
        }, 1800);
        setTimeout(() => {handleEnemyHit(pvpArray[1].playerKnife);}, 1000);
        pvplastKnifeRound = roundCounter;
        
        turnOfPlayer = false;
        updatePvpKnifeButton();
        PlayerUsing = 3;
    }
}
function pvpenemyFisting(){
    DetectEnemyAu("Punch");
    enemy.className = "punching2 zindex";
    fightBtn.className= "hide";
    fightBtnishidden = true;
    setTimeout(function(){
        enemy.className = "standing";
        if (hp > 0) {
            setTimeout(function(){fightBtn.className = "show"; fightBtnishidden = false;}, 500);
        }
    }, 1200);
    setTimeout(() => {handlePlayerHit(pvpArray[0].enemyPunch2);}, 600);
    roundCounter++;
    
    turnOfPlayer = true;
    updatePvpKnifeButton();
    PlayerUsing = 1;
}
function pvpenemyLegging(){
    DetectEnemyAu("UpperPunch");
    enemy.className = "punching zindex";
    fightBtn.className= "hide";
    fightBtnishidden = true;
    setTimeout(function(){
        enemy.className = "standing";
        if (hp > 0) {
            setTimeout(function(){fightBtn.className = "show"; fightBtnishidden = false;}, 500); 
        }
    }, 1500);
    setTimeout(() => {handlePlayerHit(pvpArray[0].enemyPunch);}, 900);
    roundCounter++;
    
    turnOfPlayer = true;
    updatePvpKnifeButton();
    PlayerUsing = 2;
}
function pvpenemyKnifing(){
    if (roundCounter - pvpEnemylastKnifeRound >= 3) {
        DetectEnemyAu("UpperKick");
        enemy.className = "kicking zindex";
        fightBtn.className= "hide";
        fightBtnishidden = true;
        setTimeout(function(){
            enemy.className = "standing";
            if (hp > 0) {
                setTimeout(function(){fightBtn.className = "show"; fightBtnishidden = false;}, 500); 
            }
        }, 2000);
        setTimeout(() => {handlePlayerHit(pvpArray[0].enemyKick);}, 900);
        pvpEnemylastKnifeRound = roundCounter;
        roundCounter++;
        
        turnOfPlayer = true;
        updatePvpKnifeButton();
        PlayerUsing = 1;
    }
}
fist.onclick = ()=>{
    if(aiSelected == true){
        fisting();
    } else {
        if(turnOfPlayer == true){ 
            pvpfisting();
        } else {
            pvpenemyFisting();
        }
    }
}
leg.onclick = ()=>{
    if(aiSelected == true){
        legging();
    } else {
        if(turnOfPlayer == true){ 
            pvplegging();
        } else {
            pvpenemyLegging();
        }
    }
}
knife.onclick = ()=>{
    if(aiSelected == true){
        knifing();
    } else {
        if(turnOfPlayer == true){ 
            pvpknifing();
        } else {
            pvpenemyKnifing();
        }
    }
}
document.onkeydown = function(press){
    if(lvl1.className === "show"){
        if (fightBtnishidden === false){
            if (press.keyCode == '37') {
            // left arrow		
                if(aiSelected == true){
                    fisting();
                } else {
                    if(turnOfPlayer == true){ 
                        pvpfisting();
                    } else {
                        pvpenemyFisting();
                    }
                }
            }
            else if (press.keyCode == '40') {
                // down arrow
                if(aiSelected == true){
                    legging();
                } else {
                    if(turnOfPlayer == true){ 
                        pvplegging();
                    } else {
                        pvpenemyLegging();
                    }
                }			
            }
            else if (press.keyCode == '39') {
            // right arrow
                if(aiSelected == true){
                    knifing();
                } else {
                    if(turnOfPlayer == true){ 
                        pvpknifing();
                    } else {
                        pvpenemyKnifing();
                    }
                }
            }
        }
    }
}
function updateKnifeButton() {
    if (roundCounter - lastKnifeRound >= 3){
        knife.className = "";
    }
    else{
        knife.className = "greyout";
    }
}
function updatePvpKnifeButton() {
    if(turnOfPlayer){
        if (roundCounter - pvplastKnifeRound >= 3){
            knife.className = "";
        }
        else{
            knife.className = "greyout";
        }
    } else {
        if (roundCounter - pvpEnemylastKnifeRound >= 3){
            knife.className = "";
        }
        else{
            knife.className = "greyout";
        }
    }
}
// let hasRun = false;

// function runOnce() {
//     if (!hasRun) {
//         fosh02player.play()
//         hasRun = true;
//     }
// }

const audioTags = document.querySelectorAll(".auVolume");
const volumeControl = document.getElementById("volumeControl")
const volumeLabel = document.querySelector('label[for="volumeControl"]');

audioTags.forEach(audio => {
    audio.volume = volumeControl.value;
});

volumeControl.addEventListener("input", function(){
    muteBtn.className= "Unmute";
    audioTags.forEach(audio => {
        audio.volume = volumeControl.value;
    });
    volumeLabel.textContent = `Volume: ${Math.floor(volumeControl.value * 100)}%`;
});

muteBtn.onclick= ()=>{
    if(muteBtn.className === "Mute"){
        muteBtn.className = "Unmute";
        audioTags.forEach(audio => {
            audio.volume = volumeControl.value;
        });
    } else {
        muteBtn.className = "Mute";
        audioTags.forEach(audio => {
            audio.volume = 0;
        });
    }
}

function followMouse(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    InfoBeta.style.left = `${mouseX - 300}px`;
    InfoBeta.style.top = `${mouseY - 135}px`;
}

const setBtns = document.querySelectorAll("#setBtn1, #setBtn2, #setBtn3 ,#setBtn4 ,#setBtn5 ,#setBtn6 ,#setBtn7 ,#Items2P1 ,#Items2P2 ,#Items2P3 ,#Items3P1 ,#Items3P2 ,#Items3P3 ,#Items4P1 ,#Items4P2 ,#Items4P3 ,#Items5P1 ,#Items5P2 ,#Items5P3 ,#Items7P1");
const InfoBeta = document.getElementById("InfoBeta");


setBtns.forEach(Btns => {
    Btns.addEventListener('mousemove', followMouse);
    Btns.addEventListener('mouseenter', () => InfoBeta.style.display = 'block');
    Btns.addEventListener('mouseleave', () => InfoBeta.style.display = 'none');
});