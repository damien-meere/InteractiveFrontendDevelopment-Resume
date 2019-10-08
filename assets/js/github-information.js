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
}
