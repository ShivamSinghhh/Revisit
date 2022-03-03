
var dict = dict = {
    "Key1": "1",
    "": {
        "a": "2",
        "b": "3",
        "c": {
            "d": "3",
            "e": {
                "": "1"
            }
        }
    }
}

let ans = {};
flatten(dict, "", ans);

function flatten(obj, suffix, ans) {

    for (let x in obj) {
        let key;
        if (suffix != '' && x != "") { key = suffix + '.' + x; }
        else if (suffix != "") { key = suffix; }
        else
            key = x;
        if (typeof obj[x] === 'object') {
            flatten(obj[x], key, ans);
        } else {
            ans[key] = obj[x];
        }
    }
}

console.log(ans)