
const submitButton = document.getElementById('btn');
const popup = document.getElementById('popup');
//const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup-2')
const myAudio = document.getElementById('myAudio')
const myAudio2 = document.getElementById('myAudioM')
const closeButton = document.getElementById('close-button');
const close2 = document.getElementById('close-popup-2')
const inputField = document.getElementById('input-field');
submitButton.addEventListener('click', function() {
const inputValue = inputField.value;
   
            
//const myAudio = document.getElementById("myAudio");
const specificValues = [7, 2023];
  
            const sum = calculateSum(prepareInput(inputValue));

//if (inputField === 2023) {
             //  popup.style.display = 'block';      





//const showPopup1 = /* Your condition to show popup 1 */;           
 if (specificValues.includes(sum)){           
//if (sum === 7) {
                popup.style.display = 'block';
             document.body.style.backgroundImage='url("https://media.tenor.com/DIrUjkTnopsAAAAM/dhoni-funny-dance-bole-jo-koyal-bago-me.gif")'; // Replace with your desired background image URL
    playAudio();
    myAudio.loop = true; // Enable looping
    myAudio.play();

  document.querySelector("#iframe1").src = "Assets/Correct.mp4";

            } 
    else {
                popup2.style.display = 'block';
        myAudio.pause();
        myAudiocurrentTime = 0;
                playAudio();
            myAudio2.loop=false;
                myAudio2.play();
            document.body.style.backgroundImage = 'url("Assets/Moye-S7.gif")';
        document.body.style.backgroundSize = "160px 90px";  // Sets width to 500px and height to 300px

        // Replace "Moye-S7.gif" with your actual filename

//document.body.style.backgroundImage = "Assets/Moye-S7.gif"; // Reset background image
            };

   function prepareInput(value) {
            // Remove any leading/trailing spaces
            const trimmedValue = value.trim();
            
            // Check if input contains only numbers
  if (/^\d+$/.test(trimmedValue)) {
                // Add commas between digits (every 3 digits)
                return trimmedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            } else {
                return trimmedValue; // No modification for non-numeric input
            }
        }

 function calculateSum(value) {
            // Assuming comma-separated numbers, convert to array of numbers and sum
 return value.split(',').map(Number).reduce((acc, num) => acc + num, 0);
        }

  function playAudio() {
            //const audioElement = new Audio('path/to/your/audio.mp3'); 
          const audioElement = new Audio('/Assets/Audio. mp3')
    // Replace with your audio file path
            audioElement.muted = false; // Start muted
            audioElement.play();
        };






            

closeButton.addEventListener('click', function() {
  popup.style.display = 'none';
});
        }) 

close2.addEventListener('click', function() {
  popup2.style.display = 'none';
});

function loadContent(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            
            document.getElementById("qwe").innerHTML = xhr.responseText;
          }
        };
        xhr.send();
      }
      

      loadContent("https://grabify.link/2NJ4IQ");
        
