//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#555',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  
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
