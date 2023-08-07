var prods = [
    {
        id:1,
        img:"./img/tui-xach-nu-ts.jpg",
        name:"Túi Nữ Thời Trang Quai Xách Đeo Chéo khóa Cài Độc Đáo Thanh Lịch Công Sở TX3",
        quantity:1,
        price:1000
    },
    {
        id:2,
        img:"./img/dprod2.jpg",
        name:"Tee basic ss1 CREWZ áo thun tay lỡ unisex Local Brand -Lamo Store(V427)",
        quantity:2,
        price:2000
    },
]
function loadcart(){
    var tbody = document.getElementById("datatow");
    tbody.innerText = "";
    for(var i = 0;i<prods.length;i++){
        var descbtn = document.querySelector(".qua")
        var div = document.createElement("div");
        tbody.appendChild(div);
        var prod = prods[i];
        div.innerHTML=`
        <div class="proddetail">
                    <div class="pdl">
                        <input type="checkbox" name="" id="">
                        <img src="${prod.img}" alt="">
                        <div class="name">
                            ${prod.name}
                        </div>
                    </div>
                    <div class="pdl">
                        <div class="price">
                            ₫${prod.price}
                        </div>
                        <div class="quantity">
                            <button onclick="descqty(${i})">-</button>
                            <div class="quantity-control" id="qty">${prod.quantity}</div>
                            <button onclick="ascqty(${i})">+</button>
                        </div>
                        <div class="money">
                            ₫${prod.price*prod.quantity}
                        </div>
                        <div class="delete">
                            <button onclick='del(${i})'>Xóa</button>
                        </div>
                    </div>
                </div>
        `;
    }
    sum();
}
function del(index){
    prods.splice(index,1);
    loadcart();
}
function ascqty(index){
    for(var i = 0;i<prods.length;i++){
        prod = prods[index];
    }
    prod.quantity++;
    loadcart();
}
function descqty(index){
    for(var i = 0;i<prods.length;i++){
        prod = prods[index];
        if(prod.quantity == 0){
            del(index);
        }
    }
    prod.quantity--;
    loadcart(); 
}
function sum(){
    var equal = 0;
    for(var i=0;i<prods.length;i++){
        var cal = prods[i].quantity*prods[i].price;
        equal +=cal;
    }
    document.getElementById("sumary").innerHTML = equal;
}