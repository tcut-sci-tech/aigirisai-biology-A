        /* ========================================
   Loading Animation
======================================== */

const loading = document.getElementById("loading");
const progress = document.getElementById("progress");
const dots = document.getElementById("dots");


/* ========================================
   Loading Dots
======================================== */

let dotCount = 1;

setInterval(() => {

    dotCount++;

    if (dotCount > 3) {
        dotCount = 1;
    }

    dots.textContent = ".".repeat(dotCount);

}, 400);


/* ========================================
   Progress Bar
======================================== */

let progressValue = 0;

const progressTimer = setInterval(() => {

    /*
        90%までは自動的に進む
    */

    if (progressValue < 90) {

        progressValue += Math.random() * 5;

        if (progressValue > 90) {
            progressValue = 90;
        }

        progress.style.width =
            progressValue + "%";

    }

}, 150);


/* ========================================
   Page Load Complete
======================================== */

window.addEventListener("load", () => {

    /*
        自動進行を停止
    */

    clearInterval(progressTimer);


    /*
        100%まで進める
    */

    progressValue = 100;

    progress.style.width = "100%";


    /*
        100%になった状態を少し見せる
    */

    setTimeout(() => {

        /*
            Loadingの中身を上方向へ
            フェードアウト
        */

        loading.classList.add("fade-out");


        /*
            黒い画面そのものを
            フェードアウト
        */

        setTimeout(() => {

            loading.classList.add("hidden");

        }, 500);


        /*
            最後にLoading要素を削除
        */

        setTimeout(() => {

            loading.remove();

        }, 1800);

    }, 500);

});
