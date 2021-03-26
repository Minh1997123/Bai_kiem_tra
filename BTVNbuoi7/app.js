let cafes = [
    {
        name: "HighLand",
        city: "Hà Nội"
    },
    {
        name: "Cộng",
        city: "Hồ Chí Minh"
    },
    {
        name: "Phúc Long",
        city: "Bắc Ninh"
    },
    {
        name: "Starbucks",
        city: "Vũng Tàu"
    },
    {
        name: "The Coffe House",
        city: "Hà Nội"
    }
]
// let y = 0

if (localStorage.length > 0 ) { // lấu localStorage của phiên trước 
    if (localStorage.getItem("a") >0 ){
    cafes = JSON.parse(localStorage.getItem("a"))
}}

function renderItem(doc){
    let myForm = document.getElementById("cafe-list");
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    name.textContent = doc.name;
    city.textContent = doc.city;
    cross.textContent = 'x';
    // // y++
    // // for (let i in doc ) {
    // //     localStorage.setItem((i+y),doc[i])
    // } lấy từng mã 

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    myForm.appendChild(li);
    cross.addEventListener('click', () => {
        myForm.removeChild(li);
        cafes = cafes.filter(item => item !== doc)//so sánh để xóa khi bấm vào x
    })

    
}
// cafes.forEach(doc => renderItem(doc)); tương đương với dòng dưới 
for (let x = 0 ; x < cafes.length; x++) { // in ra toàn bộ arry
    renderItem(cafes[x])}

let inputForm = document.getElementById('add-cafe-form');
inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = inputForm.name.value; //nhập thêm tên 
    let city = inputForm.city.value; //nhập thêm  thành phố
    let myObj = {
        name: name,
        city: city
    }
    cafes.push(myObj);
    renderItem(myObj);

    localStorage.setItem("a",JSON.stringify(cafes)) // up lên localstorage khi bấm sub
    let json1   = JSON.parse(localStorage.getItem("a"))

    inputForm.city.value = "";
    inputForm.name.value = "";

})