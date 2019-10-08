function userInformationHTML(){
    return `
        <h2>${user.name}
            <span class="small-name">
                (@<a href="${user.html_url}" target="_blank">${user.login}</a>
            </span>
        </h2>
        <div class="gh-content">
            <div class="gh-avatar>
                <a href="${user.html_url} target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />
                </a>
            </div>
            <p>Followers:  ${user.followers} - Following: ${users.following} <br> Repo: ${users.public_repos} </p>

        </div>`
}


function fetchGitHubInformation(event){

    var username = $("#gh-username").val();
    // if no username is supplied, return statement
    if(!username){
        $("#gh-user-data").html('<h2>Please Enter a GitHub username</h2>');
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response){
            var userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        }, function(errorResponse){
            if (errorReponse.status === 404){
                $("#gh-user-data").html(

                    `<h2>No Info Found For User ${username}</h2>`);
            }else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2> Error: ${errorResponse.responseJSON.message}</h2>`
                );
            }
        }
    )
}
