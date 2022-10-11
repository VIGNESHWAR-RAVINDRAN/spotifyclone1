console.log("Welcome to spotify");
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
var sn =document.getElementById('songinfo');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressBar');
myprogressbar.value=0;
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
  {songname:"295",filepath:"songs/1.mp3",coverpath:"covers/1.jpeg"},  
  {songname:"Pasoori",filepath:"songs/2.mp3",coverpath:"covers/2.jpeg"} , 
  {songname:"Excuse",filepath:"songs/3.mp3",coverpath:"covers/3.jpeg"} , 
  {songname:"Believer",filepath:"songs/4.mp3",coverpath:"covers/4.jpeg"} , 
  {songname:"Animals",filepath:"songs/5.mp3",coverpath:"covers/5.jpeg"}  ,
  {songname:"Kannaney kanne",filepath:"songs/6.mp3",coverpath:"covers/6.jpeg"},  
  {songname:"Kesariya",filepath:"songs/7.mp3",coverpath:"covers/7.jpeg"},  
  {songname:"Baby",filepath:"songs/8.mp3",coverpath:"covers/8.jpeg"} , 
  {songname:"Heartless",filepath:"songs/9.mp3",coverpath:"covers/9.jpeg"},  
  {songname:"Naina",filepath:"songs/10.mp3",coverpath:"covers/10.jpeg"}  
];


songitems.forEach((element,i)=>{
  console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverpath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songname;

});

const makeAllPlays =()=>{
 console.log("hi");
  Array.from(document.getElementsByClassName('songlistplay')).forEach((element) => {
    element.classList.remove('fa-play-circle'); 
    element.classList.add('fa-pause-circle');
  })
}

Array.from(document.getElementsByClassName('songlistplay')).forEach((element) => {
  element.addEventListener('click',(e)=>{
 // console.log(e.target);
 if(audioElement.paused){
  
  e.target.classList.remove('fa-play-circle');
  e.target.classList.add('fa-pause-circle');
  //makeAllPlays();
  gif.style.opacity=1;
  index = parseInt(e.target.id);
  console.log(songs[index-1].songname);
  sn.textContent= `${songs[index-1].songname}`;
  audioElement.src=`songs/${index}.mp3`;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
 }
  else{
    gif.style.opacity=0;
    audioElement.pause();
    e.target.classList.add('fa-play-circle');
    e.target.classList.remove('fa-pause-circle');
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    sn.textContent= "";
  }
  
 
})
});



// audioElement.play();
//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused){ //|| audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
       gif.style.opacity=1;

    }
    else{
      audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        
        gif.style.opacity=0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress); 
    myprogressbar.value=progress;
    // console.log(myprogressbar.value);
})
myprogressbar.addEventListener('change',()=>{
  audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})



// const Makeallplays = ()=>{
 
//   Array.from(document.getElementsByClassName(songitems)).forEach((element)=>{
//     element.target.classList.remove(" fa-pause-circle")
//     element.classList.add("fa-play-circle") 
//   })    
// }
// Array.from(document.getElementsByClassName(songitems)).forEach((element)=>{
//   element.addEventListener('click',()=>{
// console.log(e.target);
// Makeallplays();
// e.target.classList.remove(" fa-play-circle")
// e.target.classList.add(" fa-pause-circle")
// audioElement.src='songs/mp.3'
//   })
  
// })
/*
const makeAllPlays =()=>{
 
  Array.from(document.getElementsByClassName('songitems')).forEach((element)=>{
    element.target.classList.add('fa-pause-circle'); 
  })
}

songitems.forEach((element)=>{

element.addEventListener('click',(e)=>{
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
makeAllPlays();

}) 
})*/
