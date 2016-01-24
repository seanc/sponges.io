$.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}

$.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
     
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing 
        
        var id = 0;
        $(repos).each(function() {
           /*
 if (this.name != (username.toLowerCase()+'.github.com')) {
                list.append('<dt><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a> <em>'+(this.language?('('+this.language+')'):'')+'</em></dt>');
                var date = new Date(this.updated_at);
                list.append('<dd>' + this.description + ' ' + date +'</dd>');
            }
*/
			var title = this.name;
			var titles = ["iNaBated", "DubTrack4J", "HTTPUtils", "StrawpollBot"];
			
			if($.inArray(title, titles) !== -1) {
				var desc = this.description;
				var forks = this.forks_count
				var stars = this.stargazers_count;
				var update = new Date(this.pushed_at);
				
				$('.project-title:eq(' + id + ')').text(title).attr('href', 'https://www.github.com/' + username + '/' + title);
				$('.description:eq(' + id + ')').text(desc);
				$('.stars:eq(' + id + ')').html(stars + ' stars<span class="fa fa-star"></span>');
				$('.forks:eq(' + id + ')').html(forks + ' forks<span class="fa fa-code-fork"></span>');
				
				var date = new Date();
				var day = update.getDate();
				var month = new Array();
				month[0] = "Jan";
				month[1] = "Feb";
				month[2] = "March";
				month[3] = "April";
				month[4] = "May";
				month[5] = "June";
				month[6] = "July";
				month[7] = "August";
				month[8] = "Sept";
				month[9] = "Oct";
				month[10] = "Nov";
				month[11] = "Dec";
				
				if(date.getFullYear() == update.getFullYear()) {
					if(date.getMonth() == update.getMonth()) {
						if(date.getDate() - update.getDate() <= 7){
							var days = date.getDate()-update.getDate();
							var hours = date.getHours()-update.getHours();
							var minutes = date.getMinutes()-update.getMinutes();
							var seconds = date.getSeconds()-update.getSeconds();
							if (days == 0) {
								if(date.getHours() == update.getHours()) {
									if(date.getMinutes() == update.getMinutes()) {
										if(date.getSeconds() == update.getSeconds()()) {
											$('.update:eq(' + id + ')').html('Updated now.');
										} else {
											$('.update:eq(' + id + ')').html('Updated ' + seconds + ' seconds ago');
										}
									} else {
										$('.update:eq(' + id + ')').html('Updated ' + minutes + ' minutes ago');
									}
								} else {
									$('.update:eq(' + id + ')').html('Updated ' + hours + ' hours ago');
								}
							} else {
								$('.update:eq(' + id + ')').html('Updated ' + days + ' days ago');
							}
						} else {
							$('.update:eq(' + id + ')').html('Updated on ' + month[update.getMonth()] + ' ' + day + ', ' + update.getFullYear());
						}
					} else {
						$('.update:eq(' + id + ')').html('Updated on ' + month[update.getMonth()] + ' ' + day + ', ' + update.getFullYear());
					}
				}  else {
					$('.update:eq(' + id + ')').html('Updated on ' + month[update.getMonth()] + ' ' + day + ', ' + update.getFullYear());
				}
				
				id++;
				
				titles = jQuery.grep(titles, function(value) {
				  return value != title;
				});
			}
        });      
      });
};