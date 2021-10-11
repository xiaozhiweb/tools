var time = new Date().getDate();
var d = new Date().toLocaleString('ja-JP-u-ca-chinese');
var nowdate = get(d);

function get (dd) {
    if (dd.substring(6,7) == '日') {
        return dd.substring(5,6);
    }else{
        return dd.substring(5,7);
    };
};

//nowdate.substring(4,5);


console.log(time);
console.log(nowdate);