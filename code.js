function tip1(){
    alert('Серьёзно?');
}
function tip2(){
    alert('Опачьки');
}
function tip3(){
    alert('Опачьки');
}
function tip4(){
    alert('Опачьки');
}
function tip5(){
    alert('Опачьки');
}
let answer = [1,1,1,1,0];
let answered = [0,0,0,0,0];
var right = 0;
var done = false;
function accepAnswer(x,id){
    if (answered[x] != 1 && id == answer[x]){
        right++;
    }
    answered[x] = 1;
    testEnoughtAnswers();
}
function nameSelect(x){
    switch(x){
        case 0:
            return "Вы стиральная машина weighose 3243";
        case 1:
            return "Плох";
        case 2:
            return "Неплох";
        case 3:
            return "Норм";
        case 4:
            return "Хорош";
        case 5:
            return "Мегахорош";
    }
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function testEnoughtAnswers(){
    for(i = 0; i < 5;i++){
        if (answered[i] != 1) return;
    }
    if (!done){
        done = true;
        var body = document.getElementById("body");
        //Text
        var results = document.createElement("p");
        results.innerText="Ваш результат: "+right+"/5 баллов. "+nameSelect(right);
        results.classList.add("textligthColor");  
        results.classList.add("bebra");
        results.classList.add("standart");
        results.classList.add("center");
        body.append(results);
        //Image
        var img = document.createElement("img");
        img.src = "img/canny/"+right+".png";
        img.style = "z-index: 100; display: block;margin-left: auto;margin-right: auto;";
        body.append(img);
        await sleep(100);
        window.scrollTo(0,5000);
    }
}