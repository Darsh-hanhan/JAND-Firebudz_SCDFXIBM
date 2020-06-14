function CheckLang()
{
    var chkBox = document.getElementsByName('language');
    var langErr = document.getElementById('languageErr');
    var chked= false;

    for (var ii = 0, len = chkBox.length; ii < len; ii++) {
		if (chkBox[ii].checked) { chked=true; break; }
	}
	if (chked) langErr.style.display='none';
	else langErr.style.display='block';
}

function getOMdbMovie(){
	const title = document.getElementById('title').value;
	const poster = document.getElementById('poster');
	const omdbErr = document.getElementById('OMdbErr'); 
	const posterURL = document.getElementById('posterURL'); 
	const starring = document.getElementById('starring');
	const story = document.getElementById('story');
	const datepicker = document.getElementById('datepickerAdd');
	fetch('https://www.omdbapi.com/?t=' + title + '&apikey=1234567890abcdef')
	.then((res) => { return res.json(); })
	.then((data) => { 
		if (data.Response === 'False') {
			poster.src = '/img/no-image.jpg';
			omdbErr.style.display = 'inline';
		} 
		else {
			omdbErr.style.display = 'none';
			poster.src = data.Poster;
			starring.value = data.Actors;
			posterURL.value = data.Poster; // hidden input field to submit
			story.value = data.Plot;
			datepicker.value = moment(new Date(data.Released)).format('DD/MM/YYYY'); 
		} 
    })
	.catch(error => {omdbErr.innerHTML = error;}) 
} 

$('#posterUpload').on('change', function() {
	let image = $("#posterUpload")[0].files[0];
	let formdata = new FormData();
	formdata.append('posterUpload', image);
	$.ajax({
		url: '/video/upload',
		type: 'POST',
		data: formdata,
		contentType: false,
		processData: false,
		'success':(data) => {
			$('#poster').attr('src', data.file);
			$('#posterURL').attr('value', data.file); // sets posterURL hidden field
			if(data.err) {
				$('#posterErr').show();
				$('#posterErr').text(data.err.message);
			} 
			else { $('#posterErr').hide(); }
		}
	});
}); 
		

