const csrftoken = getCookie('csrftoken');
document.addEventListener("DOMContentLoaded", main);

function main(){
    ovatos_esemenykapcsolas('#aktivizalas', 'click', update_active);
    ovatos_esemenykapcsolas('#passzivizalas', 'click', update_active);
    ovatos_esemenykapcsolas('#gitprofiles', 'click', create_git);
}



//////////////////////////////////////
// GIT API

async function create_git(e){
    let url = `${window.location.origin}/api/post/git/create/all/`;
    let szotar = {};
    let res = await kuldo_fetch(url, szotar);
    alert(res);
}


// UPDATE: ACTIVITY
async function update_active(e){
    let url = `${window.location.origin}/api/post/user/update/activity/`;
    let szotar = {'active': e.target.id=="aktivizalas"};
    let res = await kuldo_fetch(url, szotar);
    alert(res);
}

