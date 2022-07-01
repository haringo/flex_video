const articles = document.querySelectorAll('article'); //각각의 article을 찾고
const aside = document.querySelector('aside'); //aside도 담아주고
const btnClose = aside.querySelector('.btnClose'); //btnClose도 담아준 다음

//article 요소만큼 반복을 주면서 마우스엔터,리브,클릭 이벤트로 hover기능이나 popup 모션까지 만들어주는 것
articles.forEach(article => {
	article.addEventListener('mouseenter', e => {
		e.currentTarget.querySelector('video').play();
	})

	article.addEventListener('mouseleave', e => {
		e.currentTarget.querySelector('video').pause();
	})

	article.addEventListener('click', e => {
		const tit = e.currentTarget.querySelector('h2').innerText;
		const con = e.currentTarget.querySelector('p').innerText;
		const vidSrc = e.currentTarget.querySelector('video').getAttribute('src');

		aside.querySelector('h2').innerText = tit;
		aside.querySelector('p').innerText = con;
		aside.querySelector('video').setAttribute('src', vidSrc);
		aside.classList.add('on');
	})

	btnClose.addEventListener('click', ()=>{
		aside.classList.remove('on');
	})

})