//Ex1
let input1 = "abcdef";

let output = input1.split('').reverse().join('');
console.log(output);

//Ex2
function unique(arr) {
    return new Set(arr);
}
console.log(unique([1, 2, 3, 5, 4, 2, 6, 4]));
//Ex3

function max_array(arr) {
    arr.sort();
    let max = [0, 0];
    let count = 1;
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] == arr[i - 1]) count++;
        else {
            if (count > max[1]) {
                max[1] = count;
                max[0] = arr[i];
            }
            count = 1;
        }
    }
    console.log("Phần tử " + max[0] + " xuất hiện nhiều nhất là " + max[1] + " lần");
}
max_array([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]);

//Ex4
function sapxep(ds) {
    for (let i = 0; i < ds.length - 1; i++) {
        for (let j = i + 1; j < ds.length; j++) {
            if (ds[j].children[0].innerHTML < ds[i].children[0].innerHTML) {
                [ds[j].children[0].innerHTML, ds[i].children[0].innerHTML] = [ds[i].children[0].innerHTML, ds[j].children[0].innerHTML];
                [ds[j].children[1].innerHTML, ds[i].children[1].innerHTML] = [ds[i].children[1].innerHTML, ds[j].children[1].innerHTML]

            }
        }
    }
}
const formBox = document.getElementById('form-box');
const add = document.getElementById('add');
const list = document.querySelector('.list');
let ds = document.getElementsByClassName("item");
sapxep(ds);
formBox.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phone').value;
    let inform = document.createElement("div");
    inform.innerHTML = `<div class="item">
    <span id="tên">`+ name + `</span>
    <span id="phone-number">`+ phoneNumber + `</span>
</div>`
    list.append(inform);
    sapxep(ds);
})

const formSearch = document.getElementById("form-search");

formSearch.addEventListener("submit", (e) => {
    e.preventDefault();

    let inform = document.getElementById('Search').value;

    for (let i = 0; i < ds.length; i++) {
        if (!ds[i].children[0].innerHTML.includes(inform) && !ds[i].children[1].innerHTML.includes(inform)) {
            ds[i].remove();
        }
    }
    sapxep(ds);
})
function xoa() {
    for (let i = 0; i < ds.length - 1; i++) {
        for (let j = i + 1; j < ds.length; j++) {
            if (ds[j].children[1].innerHTML == ds[i].children[1].innerHTML) {
                ds[j].remove();
                j--;
            }
        }
    }
    sapxep(ds);
}