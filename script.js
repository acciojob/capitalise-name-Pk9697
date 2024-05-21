//your JS code here. If required.
const inputEle=document.getElementById('fname')

inputEle.addEventListener('focusout',function (e) {
	inputEle.value=inputEle.value.toUpperCase()
})
