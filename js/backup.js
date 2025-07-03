//제품 hover 시 영상 or 이미지
$(document).ready(function () {
  // 🌿 1. 필요한 CSS를 <head>에 동적으로 삽입
  const scentCSS = `
    <style id="scent-style">
      .scent-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 288px;
        height: 288px;
        overflow: hidden;
        z-index: 0;
        pointer-events: none;
      }
      .scent-overlay img,
      .scent-overlay video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    </style>
  `;
  if (!document.getElementById('scent-style')) {
    $('head').append(scentCSS);
  }

  // 🌸 2. 향 매핑 설정
  const scentCategoryMap = {
      //개별 요소
    'Red Hibiscus': 'redhibhiscus',
    'Wood Sage & Sea Salt': 'woodsalt',
    'Blackberry & Bay Cologne': 'blackberry',
      //잉글리쉬페어
    'English Pear & Freesia': 'englishpear',
      //시트러스
    'Lime Basil & Mandarin': 'citrus',
    'Beach Blossom Cologne': 'citrus',
    'Grapefruit': 'citrus',
    'Earl Grey & Cucumber': 'citrus',
    'Basil & Neroli': 'citrus',
      //플로랄
    'Peony & Blush Suede': 'floral',
    'Pomegranate Noir': 'floral',
    'Frangipani Flower Cologne': 'floral',
    'Rose Blush': 'floral',
    'Rose Amber': 'floral',
    'Mimosa & Cardamom': 'floral',
    'Honeysuckle & Davana': 'floral',
    'Orange Blossom': 'floral',
    'Tuberose Angelica': 'floral',
    'Jasmine Sambac & Marigold': 'floral',
    'Blue Agava & Cacao': 'floral',
    'Wild Bluebell': 'floral',
    'Poppy & Barley': 'floral',
      //프루티
      //우디
    // 필요한 향 계속 추가 가능 &amp;는 인식 안됨
  };

  const categoryMediaMap = {
    'redhibhiscus': 'redhibhiscus.mp4',
    'woodsalt': 'woodsalt.mp4',
    'englishpear': 'englishpear.mp4',
    'blackberry': 'blackberry.mp4',
    'citrus': 'citrus.mp4',
    'floral': 'floral.mp4',
  };

  // 🌟 3. li 요소에 hover 이벤트 바인딩
  $('li').hover(
    function () {
      const $li = $(this);
      const scentText = $li.find('.pdt_eng').text().trim();

      let matchedCategory = null;
      $.each(scentCategoryMap, function (scent, category) {
        if (scentText.includes(scent)) {
          matchedCategory = category;
          return false; // break
        }
      });

      if (!matchedCategory || !categoryMediaMap[matchedCategory]) return;

      const fileName = categoryMediaMap[matchedCategory];
      const ext = fileName.split('.').pop();
      const mediaPath = `img/scents/${fileName}`;

      const $overlay = $('<div class="scent-overlay"></div>');
      let $media;

      if (ext === 'mp4') {
        $media = $('<video autoplay muted loop playsinline></video>').attr('src', mediaPath);
      } else if (['jpg', 'jpeg', 'png', 'webp'].includes(ext)) {
        $media = $('<img>').attr('src', mediaPath).attr('alt', '향 이미지');
      } else {
        return;
      }

      $overlay.append($media);
      $li.css('position', 'relative');
      const $lastChild = $li.children().last();
      $lastChild.before($overlay);
    },
    function () {
      $(this).find('.scent-overlay').remove();
    }
  );
});
