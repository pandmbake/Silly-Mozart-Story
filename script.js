function mozartStory() {

  var x = document.getElementById('mozartText');
    if (x.style.visibility === 'hidden') {
      x.style.visibility= 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
    

      var nombre = document.getElementById("nombre").value;
      var adjective = document.getElementById("adjective").value;
      var color = document.getElementById("color").value;
      var food = document.getElementById("food").value;
      var place = document.getElementById("place").value;
      var adjective1 = document.getElementById("adjective1").value;
      var color1 = document.getElementById("color1").value;
      var food1 = document.getElementById("food1").value;
      var p = document.getElementById("mozartText");
   
  
      p.innerHTML = "One day, a kid named " + nombre + " got a phone call from Mozart! " + 
      nombre + " learned that Mozart was a very " + adjective + " and smart man, especially with music! " +
           "At the age of 4 he could learn a piece of music in half an hour. " +
           "At the age of 5 he was playing the clavier (like a piano) incredibly well, and loved eating " + color + " " + food + ". " +
           "Mozart could listen to music just once and write it down without making any mistakes. " +
           "Mozart went on to compose operas, pieces for piano, and many other intruments. " +
           nombre + " was so glad to have the chance to talk to Mozart and learn about his life! " +
           "After the phone call, " + nombre + " went to the " + place + " and ate some " + adjective1 + " " + color1 + " " + food1 + ".";
  
  }

  function resetButton() {
    var b = document.getElementById('mozartForm').reset();

    var x = document.getElementById('mozartText');
    if (x.style.visibility === 'visible') {
      x.style.visibility= 'hidden';
    } else {
      x.style.visibility = 'visible';
    }



  }