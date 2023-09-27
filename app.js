// $('#getJson').on('click', function(){
//     console.log('testing 123');
//     $.getJSON('data/rates.json')
//     .done(function(data){
//         console.log(data);
//         $.each(data, function(key, val) {
//            console.log(key+": "+val)
//         });
//     }).fail(function(){
//         console.log('something failed');
//     }).always(function(){
//         console.log('always works... baby');
//     })
// });

const wowApp = function(data) {
    console.log(data);
    var newContent = '';
    var title = data[0].movie;
    var date = data[0].year;
    var video = data[0].video['720p'];
    var img = data[0].poster;
    newContent += `<h1>${title} (${date})</h1>`
    newContent += `<video controls width="500"><source src="${video}" type="video/mp4" /></video>`;
    newContent += `<br>`;
    newContent += `<img src="${img}" class="contentImg"></img>`;
    $('#wow').append(newContent);
};

$(document).ready(function() {
    // Handler for .ready() called.
    $.getJSON('https://owen-wilson-wow-api.onrender.com/wows/random')
    .done(function(data){
        wowApp(data);
        // console.log(data);
        // var newContent = '';
        // var title = data[0].movie;
        // var date = data[0].year;
        // var video = data[0].video['720p'];
        // var img = data[0].poster;
        // newContent += `<h1>${title} (${date})</h1>`
        // newContent += `<video controls width="500"><source src="${video}" type="video/mp4" /></video>`;
        // newContent += `<br>`;
        // newContent += `<img src="${img}" class="contentImg"></img>`;
        // $('#wow').append(newContent);
    }).fail(function(){
        console.log('something failed');
    }).always(function(){
        console.log('always works... baby');
    })
});

$('#getJson').on('ready click', function(){
    $('#wow').empty();
    $.getJSON('https://owen-wilson-wow-api.onrender.com/wows/random')
    .done(function(data){
        wowApp(data);
    }).fail(function(){
        console.log('something failed');
    }).always(function(){
        console.log('always works... baby');
    })
});

$('#getWow').on('click', function(){
    console.log('testing wow button');
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch('https://owen-wilson-wow-api.onrender.com/wows/random', options)
        .then(function(response){
            return response.json();
        }).then(function(result){
            console.log(result);
        }).catch(function(err){
            console.log(err);
        });
});