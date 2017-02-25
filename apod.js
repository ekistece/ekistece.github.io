var url = "http://192.168.1.35:3000";
var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send()
request.onload = function() {
	var json = request.response;
	document.getElementById('previewTitle').textContent = json['title'];
	document.getElementById('previewInfo').textContent = json['info'];
	document.getElementById('previewImg').src = json['img'];
	document.getElementById('previewBody').textContent = json['body'];
}
