console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code
var myUrl = '/api/profile';
var $gameList = $('#gameList');

	


$.ajax({
	method: 'GET',
	url: myUrl,
	success: function onSuccess(json){
		console.log(json.profile.name);
		append(json.profile.name);
		$(profileName)
		$(githubLink)
		$(personalSiteLink)
		$(currentCity)
	}

})

});

