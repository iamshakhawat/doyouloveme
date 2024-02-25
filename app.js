$(".no").mouseover(function () {
    let left = Math.floor(Math.random() * 100);
    let bottom = Math.floor(Math.random() * 100);

    if (left > 70) {
      left = 70;
    }
    if (bottom > 75) {
      bottom = 75;
    }

    $(".no").css("left", left + "vh");
    $(".no").css("bottom", bottom + "vh");
  });

  $(".yes").click(function () {
    $("h2").html("I love you too!");
      const audio = new Audio('./cheer.mp3');
      audio.play();
      $(".con").css('display','block')
      setTimeout(() => {
      $(".con").css('display','none')
      }, 2000);
      setTimeout(() => {
        $("body").css("background-image", 'url("./image/confetti.gif")');
      }, 1000);
        setTimeout(() => {
            $("body").css("background-image", 'none');
        }, 5000);
  });