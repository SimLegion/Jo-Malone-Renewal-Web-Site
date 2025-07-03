$(document).ready(function () {
  $('.Pml>li').hover(function () {
    $(this).css('background-color', '#fcf9ee');
  }, function () {
    $(this).css('background-color', '#fff');
  });


  $(document).ready(function () {
    $('.Pml > li').click(function () {
      $('.Pml > li').css('background-color', '#fff');
      $(this).css('background-color', '#fcf9ee');
    });
  });






  $('.Pml > li').on('click', function () {
    var capacity = $(this).text().trim(); // "100ml", "50ml", ...
    var productName = $('.nameEn').text().trim(); // 제품명

    // 제품 이미지 경로
    var productImage = 'img/pdt/' + productName + (capacity !== '100ml' ? capacity : '') + '.png';
    $('.MI').attr('src', productImage).show();
    $('.ProImg img').attr('src', productImage).show();

    // 가격 설정 및 케이스 이미지 변경
    if ($(this).is(':nth-child(1)')) {
      $('.PPrice').html('₩235,000');
      $('.Case img').attr('src', 'img/100ml_Cologne_case.png').show();
    } else if ($(this).is(':nth-child(2)')) {
      $('.PPrice').html('₩162,000');
      $('.Case img').attr('src', 'img/50ml_case.png').show();
    } else if ($(this).is(':nth-child(3)')) {
      $('.PPrice').html('₩110,000');
      $('.Case img').attr('src', 'img/30ml_case.png').show();
    } else if ($(this).is(':nth-child(4)')) {
      $('.PPrice').html('₩34,000');
      $('.Case img').hide();
    } else {
      $('.PPrice').html('');
      $('.Case img').hide();
    }
  });

  $('.Case img').on('click', function () {
    var src = $(this).attr('src');
    $('.MI').attr('src', src).show();
  });
  $('.ProImg img').on('click', function () {
    var src = $(this).attr('src');
    $('.MI').attr('src', src).show();
  });
  $('.IL > li:nth-child(2) img').on('click', function () {
    var src = $(this).attr('src');
    $('.MI').attr('src', src).show();
  });

  $('.IL > li:nth-child(3) img').on('click', function () {
    var src = $(this).attr('src');
    $('.MI').attr('src', src).show();
  });


  if (!$.trim($('.SA > h5').text()).length) {
    $('.SA').hide();
  }
  $('.Pml > li:nth-child(1)').trigger('click');
});


$(function () {
  const horoscopeData = [
    {
      text: "기회가 찾아오는 하루, 도전을 두려워하지 마세요!",
      scent: "라임 바질 앤 만다린 <br> 활력과 도전의 향",
      image: "img/pdt/LimeBasil&MandarinCologne.png",
      link: "LimeBasil&MandarinCologne.html"
    },
    {
      text: "오늘은 사랑과 우정이 빛나는 날이에요.",
      scent: "피오니 앤 블러쉬 스웨이드 <br> 부드럽고 사랑스러운 향",
      image: "img/pdt/Peony&BlushSuedeCologne.png",
      link: "Peony&BlushSuedeCologne.html"
    },
    {
      text: "작은 일에도 감사하는 마음을 가져보세요.",
      scent: "잉글리쉬 페어 앤 프리지아 <br> 따뜻한 감성의 향",
      image: "img/pdt/EnglishPear&FreesiaCologne.png",
      link: "EnglishPear&FreesiaCologne.html"
    },
    {
      text: "새로운 만남이 기다리고 있을지도 몰라요.",
      scent: "우드 세이지 앤 씨 솔트 <br> 자유롭고 자연스러운 향",
      image: "img/pdt/WoodSage&SeaSaltCologne.png",
      link: "WoodSage&SeaSaltCologne.html"
    },
    {
      text: "당신의 웃음이 행운을 부릅니다.",
      scent: "블랙베리 앤 베이 <br> 상큼하고 생기 넘치는 향",
      image: "img/pdt/Blackberry&BayCologne.png",
      link: "Blackberry&BayCologne.html"
    }
  ];

  $('.HtU li:nth-child(2) p').on('click', function () {
    $('.SA').slideDown();

    const today = new Date();
    const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 운세`;

    const random = Math.floor(Math.random() * horoscopeData.length);
    const selected = horoscopeData[random];

    $('.SA ul > li:nth-child(2) > h5').html(`
      ${dateStr}<br><br>
      오늘의 운세:<br><h6>${selected.text}</h6><br>
      추천 향:<br><h6>${selected.scent}</h6>
    `);

    $('.SA ul > li:nth-child(1)').html(`
      <a href="${selected.link}" target="_blank">
        <img src="${selected.image}" alt="제품 이미지" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
      </a>
    `);
  });
});
//$('.MI').on('mouseenter', function () {
//    $('.zoom-lens').css('background-image', 'url(' + $(this).attr('src') + ')').show();
//}).on('mousemove', function (e) {
//    var offset = $(this).offset();
//    var x = e.pageX - offset.left;
//    var y = e.pageY - offset.top;
//
//    var lensX = x - 50; // 중심 정렬
//    var lensY = y - 50;
//
//    // 경계 제한
//    lensX = Math.max(0, Math.min(lensX, $(this).width() - 100));
//    lensY = Math.max(0, Math.min(lensY, $(this).height() - 100));
//
//    $('.zoom-lens').css({
//        left: lensX + 'px',
//        top: lensY + 'px',
//        backgroundPosition: (-lensX * 2) + 'px ' + (-lensY * 2) + 'px'
//    });
//}).on('mouseleave', function () {
//    $('.zoom-lens').hide();
//});
$(".img-container").each(function () {
  const zoomFactor = 2; // 확대 배율 설정
  const imageTarget = $(this).find('img'); // 대상 이미지
  const magnifierDiv = $(this).find('.zoom-lens'); // 돋보기 요소

  // 확대 효과 함수 정의
  function magnify(e) {
    const mousePosX = e.pageX - $(this).offset().left; // 마우스 X 좌표
    const mousePosY = e.pageY - $(this).offset().top; // 마우스 Y 좌표

    // 마우스가 이미지 영역 안에 있는지 확인
    if (mousePosX < $(this).width() && mousePosY < $(this).height() && mousePosX > 0 && mousePosY > 0) {
      magnifierDiv.fadeIn(100); // 돋보기 표시
    } else {
      magnifierDiv.fadeOut(100); // 돋보기 숨기기
    }

    // 돋보기가 보일 때 위치와 배경을 업데이트
    if (magnifierDiv.is(":visible")) {
      const bgPosX = -(mousePosX * zoomFactor - magnifierDiv.width() / 2);
      const bgPosY = -(mousePosY * zoomFactor - magnifierDiv.height() / 2);
      const magnifierPosX = mousePosX - magnifierDiv.width() / 2;
      const magnifierPosY = mousePosY - magnifierDiv.height() / 2;

      magnifierDiv.css({
        "left": magnifierPosX,
        "top": magnifierPosY,
        "background-image": `url('${imageTarget.attr("src")}')`, // 배경 이미지 설정
        "background-repeat": "no-repeat",
        "background-size": `${imageTarget.width() * zoomFactor}px ${imageTarget.height() * zoomFactor}px`, // 배경 크기 설정
        "background-position": `${bgPosX}px ${bgPosY}px`
      });
    }
  }

  // 이미지에 mousemove 이벤트 핸들러 연결
  $(this).on('mousemove', magnify);
});
