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

$('#getJson').on('click', function(){
    console.log('testing 123');
    $.getJSON('https://owen-wilson-wow-api.onrender.com/wows/random')
    .done(function(data){
        console.log(data);
        console.log(data[0].character);
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