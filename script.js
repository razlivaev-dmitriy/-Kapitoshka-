window.onload = function () {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        let oldX = function(e) {return e.pageX};
        let mou = $("<img src='images/mouse_center.png' class='mouse' style='position: absolute;z-index: 10000;pointer-events: none;'>")
        document.addEventListener("mousemove", function(e) {
            mou.css({left: e.pageX - 25 + "px", top: e.pageY + "px"});
            $("body").append(mou);
        });
        document.addEventListener("click", function(e) {
            document.elementFromPoint(e.pageX, e.pageY)
        });
    }

    let moveUp = document.querySelector(".moveUp");
    moveUp.addEventListener("click", function up() {
        document.documentElement.scrollTop = 0;
    });

    let media_menu = window.matchMedia("(max-width: 992px)");
    if (media_menu.matches) {
        $("ul").html('<li class="start_href" title="Главная страница"><a href="/" >Главная</a></li><li title="Информация для родителей"><a href="/relatives">Для родителей</a></li><li title="Информация о нас"><a href="/about">О нас</a></li><li title="Как с нами связаться?"><a href="/contact">Контакты</a></li>')
    }

    let uL = "admin";
    let uP = "qwerty";
    $(".vhod_name").on("click", function() {
        $("#vhod").css({"display": "flex"})
        $("#reg").css({"display": "none"})
        $(".vhod_name").css({"color": "#fff"})
        $(".reg_name").css({"color": "#a5a2a2"})
    })
    $(".reg_name").on("click", function() {
        $("#vhod").css({"display": "none"})
        $("#reg").css({"display": "flex"})
        $(".vhod_name").css({"color": "#a5a2a2"})
        $(".reg_name").css({"color": "#fff"})
    })
    function func1() {
        let ins = $(".input1");
        let vals = [];
        for(let i=0; i < ins.length; i++) {
            vals.push(ins[i].value);
        }
        if (vals[0] == uL && vals[1] == uP) {
            alert("Вход прошёл успешно!")
        } else {
            alert("Неправильный логин или пароль!")
        }
    }
    function func2() {
        let ins = $(".input2");
        let vals = [];
        let pols = [];
        for(let i=0; i < ins.length; i++) {
            vals.push(ins[i].value);
            pols.push(ins[i]);
        }
        uL = vals[0];
        uP = vals[1];
        console.log(uL)
        console.log(uP)
    }
    $("#form_but1").on("click", func1);
    $("#form_but2").on("click", func2);
}