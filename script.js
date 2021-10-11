var time = new Date().getDate();
var d = new Date().toLocaleString('ja-JP-u-ca-chinese');
var nowdate = get(d);

function get (dd) {
    if (dd.substring(6,7) == '日') {
        return Number(dd.substring(5,6));
    }else{
        return Number(dd.substring(5,7));
    };
};

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

function run (n) {

    if (inRange(n, 1, 4)) {
        return 0
    }else if (inRange(n, 5, 11)) {
        return 1
    }else if (inRange(n, 12, 18)) {
        return 2
    }else if (inRange(n, 19, 29)) {
        return 3
    }
    // inRange(nowdate, 1, 7);
}


//nowdate.substring(4,5);

var id = run(nowdate);

setTimeout(() => {
    $("#moon").css("background-image", `url(img/${id}.png)`);
    if (id === 0) {
        $("ttx").text("哈哈，你今天看不到月亮，笑你");
    }else if (id == 1) {
        $("ttx").text("上弦月");
    }else if (id == 2) {
        $("ttx").text("滿月");
    }else if (id == 3) {
        $("ttx").text("下弦月");
    }
}, 100);



// sethtml(id);

console.log(time);
console.log(nowdate);

