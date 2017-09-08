
getBeerFirst();
function getBeerFirst() {
     	fetch ('https://api.punkapi.com/v2/beers')
	    .then(response => response.json())
	    .catch(e => console.error('It have somthing Wrong.'))
	    .then(function(response) {
	    	var beerS = response;
	        var outer = "";
	        for (var i = 0; i < beerS.length; i++) {
	             outer += "<ul>"+"<li><span>Name:</span> "+response[i].name + "</li><br>"
	             +"<li><span>ID:</span> " + response[i].id + "</li><br>"
	             +"<li><span>Tagline:</span> " + response[i].tagline + "</li><br>"
	              +"<li><span>First brewed:</span> " + response[i].first_brewed + "</li><br>"
	               +"<li><span>Description:</span> " + response[i].description + "</li><br>"
	                +"<li><span>ABV:</span> " + response[i].abv + "</li><br>"
	               +"<li><span>IBU:</span> " + response[i].ibu + "</li><br>"
	                 +"<img src=" + response[i].image_url+" " +"width= '100px' " +" />" + "<br>"+"</ul>";
	        }
	        document.getElementById('outputt').innerHTML = outer;
	        document.getElementById('fou').innerHTML = "Encounter: " + beerS.length;
	    });
	}
function beerSSearchN(nameB){
	beerN = nameB;
	if(beerN != ""){
	fetch ('https://api.punkapi.com/v2/beers?beer_name=' + beerN)
	    .then(response => response.json())
	    .catch(e => console.error('It have somthing Wrong.'))
	    .then(function(response) {
	    	var beerS = response;
	        var outer = "";
	        for (var i = 0; i < beerS.length; i++) {
	             outer += "<ul>"+"<li><span>Name:</span> "+response[i].name + "</li><br>"
	             +"<li><span>ID:</span> " + response[i].id + "</li><br>"
	             +"<li><span>Tagline:</span> " + response[i].tagline + "</li><br>"
	              +"<li><span>First brewed:</span> " + response[i].first_brewed + "</li><br>"
	               +"<li><span>Description:</span> " + response[i].description + "</li><br>"
	               +"<li><span>ABV:</span> " + response[i].abv + "</li><br>"
	               +"<li><span>IBU:</span> " + response[i].ibu + "</li><br>"
	                 +"<img src=" + response[i].image_url+" " +"width= '100px' " +" />" + "<br>"+"</ul>";
	        }
	        document.getElementById('outputt').innerHTML = outer;
	        document.getElementById('fou').innerHTML = "Encounter: " + beerS.length;
	    });
	 }else{
	 	getBeerFirst();
	 }
}
function beerSSearchAbv(nameAbv){
	beerA = nameAbv;
	if(beerA != ""){
	fetch ('https://api.punkapi.com/v2/beers?abv_lt=' + beerA)
	    .then(response => response.json())
	    .catch(e => console.error('It have somthing Wrong.'))
	    .then(function(response) {
	    	var beerS = response;
	        var outer = "";
	        for (var i = 0; i < beerS.length; i++) {
	             outer += "<ul>"+"<li><span>Name:</span> "+response[i].name + "</li><br>"
	             +"<li><span>ID:</span> " + response[i].id + "</li><br>"
	             +"<li><span>Tagline:</span> " + response[i].tagline + "</li><br>"
	              +"<li><span>First brewed:</span> " + response[i].first_brewed + "</li><br>"
	               +"<li><span>Description:</span> " + response[i].description + "</li><br>"
	               +"<li><span>ABV:</span> " + response[i].abv + "</li><br>"
	               +"<li><span>IBU:</span> " + response[i].ibu + "</li><br>"
	                 +"<img src=" + response[i].image_url+" " +"width= '100px' " +" />" + "<br>"+"</ul>";
	        }
	        document.getElementById('outputt').innerHTML = outer;
	        document.getElementById('fou').innerHTML = "Encounter: " + beerS.length;
	    });
	 }else{
	 	getBeerFirst();
	 }
	}
function beerSSearchIbu(nameIbu){
	beerI = nameIbu;
	if(beerI != ""){
	fetch ('https://api.punkapi.com/v2/beers?ibu_lt=' + beerI)
	    .then(response => response.json())
	    .catch(e => console.error('It have somthing Wrong.'))
	    .then(function(response) {
	    	var beerS = response;
	        var outer = "";
	        for (var i = 0; i < beerS.length; i++) {
	             outer += "<ul>"+"<li><span>Name:</span> "+response[i].name + "</li><br>"
	             +"<li><span>ID:</span> " + response[i].id + "</li><br>"
	             +"<li><span>Tagline:</span> " + response[i].tagline + "</li><br>"
	              +"<li><span>First brewed:</span> " + response[i].first_brewed + "</li><br>"
	               +"<li><span>Description:</span> " + response[i].description + "</li><br>"
	               +"<li><span>ABV:</span> " + response[i].abv + "</li><br>"
	               +"<li><span>IBU:</span> " + response[i].ibu + "</li><br>"
	                 +"<img src=" + response[i].image_url+" " +"width= '100px' " +" />" + "<br>"+"</ul>";
	        }
	        document.getElementById('outputt').innerHTML = outer;
	        document.getElementById('fou').innerHTML = "Encounter: " + beerS.length;
	    });
	 }else{
	 	getBeerFirst();
	 }
}