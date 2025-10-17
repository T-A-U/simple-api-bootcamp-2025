//edit out all underscores ___

function createQuote(){
    const url =`https://aot-api.vercel.app/quote`


    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
            // document.querySelector('h2').innerText = data.title;

            //If statement from Shawn to hide video if image is present
            // if( data.media_type === 'image'){
            //     document.querySelector('img').src = data.url
            //     // document.querySelector('iframe').style.display = 'none';
            //     document.querySelector('img').style.display= 'block'
            // }else if(data.media_type === 'video'){
            //     // document.querySelector('iframe').src = data.url
            //     document.querySelector('img').style.display= 'none'
            //     document.querySelector('h3').innerHTML=`<iframe src= "${data.url}"></iframe> <br> <br>`+ data.explanation
                
            // }
            document.querySelector('h2').innerText=data.author
            document.querySelector('p').innerText=data.quote
            

            // document.querySelector('iframe').src = data.url
           


           

})
.catch(err => {
    console.log(`error ${err}`)
});

}






//issue pull request when finished with 
// (1 to 5 no 3) I completed the challenge
// (1 to 5 no 3) I feel good about my code
// Anything specific on which you want feedback!

//!IMPORTANT style it now