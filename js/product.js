for (let i = 0; i < ITEM_LIST[0].length; i++) {
    //////////////////// 하우스 도산
    let dosan_img = `<div class="item_img ">
                                   <div class="img_box"> <img src="./img/product/dosan/${ITEM_LIST[0][i].src}" alt="메뉴이미지${i}"></div>
                                    <li class="product_pan_li">
                            <span>${ITEM_LIST[0][i].menu}</span>
                            <span>${ITEM_LIST[0][i].price}</span>
                        </li>
                            </div>`
    document.getElementsByClassName('item_flex')[0].innerHTML += dosan_img;
}


for (let i = 0; i < ITEM_LIST[1].length; i++) {
    /////////////////// 신사

    let sinsa_img = `<div class="item_img">
                            <div class="img_box"><img src="./img/product/sinsa/${ITEM_LIST[1][i].src}" alt="메뉴이미지${i}"></div>
                            <li class="product_pan_li">
                            <span>${ITEM_LIST[1][i].menu}</span>
                            <span>${ITEM_LIST[1][i].price}</span>
                        </li>
                        </div>`

    document.getElementsByClassName('item_flex')[1].innerHTML += sinsa_img;

}

// *******************메뉴 탭 누르면 전환

let menu_txt_li = document.getElementsByClassName('menu_txt_li');
let item_img_sec = document.getElementsByClassName('item_img_sec');

for (let i = 0; i < menu_txt_li.length; i++) {
    menu_txt_li[i].addEventListener('click', function () {
        for (let j = 0; j < menu_txt_li.length; j++) {
            item_img_sec[j].classList.remove('item_img_sec_act')
        }
        item_img_sec[i].classList.add('item_img_sec_act')
    })
}


$(".menu_txt_li>a").click(function () {
    $(".menu_txt_li>a").css("color", "");
    $(this).css("color", "black");
});



