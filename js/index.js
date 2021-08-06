(function () {
    // 載入 AOS
    AOS.init();
    // 載入parllax
    let main = document.querySelector('#main')
    let parallaxInstance = new Parallax(main);
    document.documentElement.style.overflow='hidden';
    let header = document.querySelector('header');
    let loading = document.querySelector('.loading')
    header.classList.add('displayNone');
    window.addEventListener('load', function () {
        const imgID = document.querySelectorAll('img');
        let i = 0;
        imgID.forEach((item, index) => {
            const img = new Image();
            img.src = item.src;
            img.addEventListener("load", () => {
                i += 1;
                if (imgID.length === i) {
                    document.documentElement.style.overflow='auto';
                    console.log('圖片全部載入完成');
                    loading.classList.add('displayNone');
                    header.classList.remove('displayNone');
                }
            });
        })
        //header 滾動顯示
        let timer = null;
        document.addEventListener('scroll', function () {
            clearTimeout(timer);
            let header = document.querySelector('.header');
            header.classList.add('rgba');
            timer = setTimeout(function () {
                header.classList.remove('rgba');
            }, 500);
        })
        //投票
        let godzilla = 1;
        let kong = 1;
        let flag = true;
        let voteGodzilla = document.querySelector('.voteGodzilla');
        let voteKong = document.querySelector('.voteKong');
        let barGodzilla = document.querySelector('.barGodzilla').querySelector('span');
        let barKong = document.querySelector('.barKong').querySelector('span');
        let numGodzilla = document.querySelector('.barGodzilla').querySelector('p');
        let numKong = document.querySelector('.barKong').querySelector('p');
        let barWrap = document.querySelector('.barWrap');
        voteGodzilla.addEventListener('click', function () {
            if (flag) {
                godzilla++;
                let sum = godzilla + kong;
                let num = parseInt((godzilla / sum) * 100);
                barGodzilla.style.width = num + '%';
                barKong.style.width = (100 - num) + '%';
                numGodzilla.innerHTML = num + '%';
                numKong.innerHTML = 100 - num + '%';
                flag = false;
            }
        })
        voteKong.addEventListener('click', function () {
            if (flag) {
                kong++;
                let sum = godzilla + kong;
                let num = parseInt((kong / sum) * 100);
                barGodzilla.style.width = (100 - num) + '%';
                barKong.style.width = num + '%';
                numGodzilla.innerHTML = 100 - num + '%';
                numKong.innerHTML = num + '%';
                flag = false;
            }
        })
    })




})();