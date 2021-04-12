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

// function renderItem(doc){
//     let myForm = document.getElementById("cafe-list");
//     let li = document.createElement('li');
//     let name = document.createElement('span');
//     let city = document.createElement('span');
    
//     name.textContent = doc.name;
//     city.textContent = doc.city;
    
//     li.appendChild(name); // thêm tên vào li
//     li.appendChild(city);
//     myForm.appendChild(li);
   
// cross.addEventListener('click', () => { // nút xóa
    // let cross = document.createElement('div');
    // cross.textContent = 'x';
    // li.appendChild(cross);
    //     myForm.removeChild(li);
    //     cafes = cafes.filter(item => item !== doc)
    // })
// }

// cafes.forEach(doc => renderItem(doc)); // nhập thêm dữ liệu 

// let inputForm = document.getElementById('add-cafe-form');
// inputForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let name = inputForm.name.value;
//     let city = inputForm.city.value;
//     let myObj = {
//         name: name,
//         city: city
//     }
//     cafes.push(myObj);
//     renderItem(myObj);

//     inputForm.city.value = "";
//     inputForm.name.value = "";
// })


// cafes.forEach(doc => renderItem(doc)); //đi từng phần tử của cafe

async function getdata (){// lấy dữ liệu 
    let preData = await fetch(`https://6062cc4d0133350017fd1b6c.mockapi.io/api/menus`);
    let data = await preData.json();
    console.log(data);
    console.log(Math.ceil(data.length/12))
    function renderItem(doc){ // ren hình ảnh 
        let myForm = document.getElementById("cafe-list");
        let li = document.createElement('li');
        let name = document.createElement('span');
        let City = document.createElement('span');
        
        name.textContent = doc.name;
        City.textContent = doc.City;
        
        li.appendChild(name); // thêm tên vào li
        li.appendChild(City);
        myForm.appendChild(li);
    }
    data.forEach(doc => renderItem(doc));
}
getdata()

