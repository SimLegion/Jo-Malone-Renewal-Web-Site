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
            $('.PPrice').html('₩89,000');
            $('.Case img').attr('src', 'img/100ml_case.png').show();
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


