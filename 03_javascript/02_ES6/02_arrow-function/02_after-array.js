"use strict";

const prices = [1000, 2000, 3000];

const regularPrices = prices.map(function (price) {
    return price * 2;
});

console.log(regularPrices);

const arrowPrices = prices.map((price) => price * 2);
console.log(arrowPrices);

const theater = {
    store: "청량리역점",
    titles: ["오디세이", "옵세션"],
    showMovieList: function () {
        console.log(this);

        // 화살표 함수는 자신만의 this가 없고, 바깥 범위의 this를 사용
        // 따라서 콜백 안의 this.store는 theater.store인 '청량리역점'이다
        this.titles.forEach(title => {
            console.log(this.store + ': ' + title);
        })

        // 일반 함수는 자신의 this가 있음
        // this.titles.forEach(function (title) {
        //     console.log(this.store + ': ' + title);
        // })
    },
};

theater.showMovieList();