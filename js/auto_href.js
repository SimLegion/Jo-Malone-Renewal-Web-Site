
/*** img ~ 하이퍼링크 (click) ***/
//$('.pdt li').click(function(){
//    let pdtSrc = $(this).find('img').attr('src').replace('img/', '').replace(/jpg|jpeg|png|svg|webp|avif/, 'html');
//    $(this).children('a').attr('href', pdtSrc);
//});

/*** img ~ 하이퍼링크 (auto) ***/
//$(document).ready(function(){
//    $('.pdt li a img').each(function(){
//        $(this).parent().parent().children('a').attr('href', $(this).attr('src').replace('img/', '').replace(/jpg|jpeg|png|svg|webp|avif/, 'html'));
//    });
//});

/*** 영문 ~ 하이퍼링크, img (auto) ***//*확장자명 .png, .jpg 한정*//*단점: 이미지를 스크립트로 연결하여 로드가 느려짐*/
//$(document).ready(function(){
//    $('.pdt_eng').each(function(){
//        let pdtFormat;
//        let purePdt = $(this).text().replace(' ', '_').replace('<br>', '');
//        $(this).parent().parent().children('a').attr('href', purePdt+'.html');
//        $.ajax({
//            url: '/img/'+purePdt+'.png',
//            type: 'HEAD',
//            async: false,
//            success: function(){pdtFormat = '.png';},
//            error: function(){pdtFormat = '.jpg'}
//        });
//        $(this).parent().parent().find('img').attr('src', 'img/'+purePdt+pdtFormat);
//    });
//});

/*** alt값은 한국제품명 ctrl+h로 일괄변경 ***/

/*** 영문 ~ 하이퍼링크, img (auto) ***//*확장자명 .png, .jpg 한정*//*단점: 이미지를 스크립트로 연결하여 로드가 느려짐*/
/*Bug fix: url의 경로 수정, 문자열의 모든(//g) 공백을 언더바로 변경*/
$(document).ready(function(){
    $('.pdt_eng').each(function(){
        let pdtFormat;
        let pdtLink;
        let purePdt = $(this).text().replace(/ /g, '').replace(/<br>/g, '').replace(/&amp;/, '&');
        let removeMl = $(this).text().replace(/15g|20g|100g|600g|2100g|15ml|30ml|50ml|100ml|165ml|175ml|185ml|200ml|250ml|300ml|400ml|500ml/, '');
        // 100ml는 .pdt_eng의 속성값과 사진의 파일명에 표기하지 말것
        let removeMlandPure = $(this).text().replace(/ /g, '').replace(/<br>/g, '').replace(/&amp;/, '&').replace(/15g|20g|100g|600g|2100g|15ml|30ml|50ml|100ml|165ml|175ml|185ml|200ml|250ml|300ml|400ml|500ml/, '');
        // html 전용
        $.ajax({
            url: '/'+removeMlandPure+'.html',
            type: 'HEAD',
            async: false,
            success: function(){pdtLink = removeMlandPure;},
            error: function(){pdtLink = 'Blackberry&BayCologne'}
        });
        $(this).parent().parent().children('a').attr('href', pdtLink+'.html');
        $.ajax({
            url: '/img/pdt/'+purePdt+'.png',
            type: 'HEAD',
            async: false,
            success: function(){pdtFormat = '.png';},
            error: function(){pdtFormat = '.jpg'}
        });
        console.log(purePdt);
        console.log(pdtFormat);
        $.ajax({
            url: '/img/pdt/'+purePdt+pdtFormat,
            type: 'HEAD',
            async: false,
            error: function(){purePdt = 'Blackberry&BayCologne'; pdtFormat = '.png';}
        });
        $(this).parent().parent().find('img').attr('src', 'img/pdt/'+purePdt+pdtFormat);
        $(this).text(removeMl);
    });
});

/*** powershell - 사진 파일명의 ' '를 공백으로 ***/
console.log(`PowerShell - 사진 파일명의 공백을 '_'로\n
Get-ChildItem -Recurse *.* | Rename-Item -NewName { $_.Name -replace ' ','' }
`);