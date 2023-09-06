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
    moveUp.addEventListener("click", function() {
        document.querySelector("#up").scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
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
    }
    $("#form_but1").on("click", func1);
    $("#form_but2").on("click", func2);

    let show = false;
    let start;
    let end;

    function tuda() {
        anime({
            targets: ".by_menu",
            translateX: ["-100%", "-10%"],
            easing: "easeInOutQuad",
            duration: 500
        });
        anime({
            targets: ".burger",
            rotate: 90,
            duration: 500,
            easing: "easeInOutQuad"
        })
        anime({
            targets: ".stick",
            rotate: 180,
            duration: 500,
            easing: "easeInOutQuad"
        })
        show = true;
    }

    function ottuda() {
        anime({
            targets: ".by_menu",
            translateX: ["-10%", "-100%"],
            easing: "easeInOutQuad",
            duration: 500
        });
        anime({
            targets: ".burger",
            rotate: 0,
            duration: 500,
            easing: "easeInOutQuad"
        })
        anime({
            targets: ".stick",
            rotate: 0,
            duration: 500,
            easing: "easeInOutQuad"
        })
        show = false;
    }

    $(".burger").on("click", function menu() {
        if (show) {
            ottuda();
        } else {
            tuda();
        }
    });


    $(document).on("touchstart", function(event) {
        start = event.originalEvent.touches[0].pageX;
    })

    $(document).on("touchend", function(event) {
        end = event.originalEvent.changedTouches[0].pageX;
        if (end - start >= 100 && !show) {
            tuda();
        } else if(start - end >= 100 && show) {
            ottuda();
        }
    })


    $('.slider').bxSlider({
        pagerCustom: '.slider_min',
        infiniteLoop: true,
        speed: 250,
        easing: "linear"
    });
}
