          videojs.autoSetup();

    videojs('my_video_1').ready(function(){
      console.log(this.options()); //log all of the default videojs options
      
       // Store the video object
      var myPlayer = this, id = myPlayer.id();
      // Make up an aspect ratio
      var aspectRatio = 9/16; 

      function resizeVideoJS(){
        var width = document.getElementById(id).parentElement.offsetWidth;
        myPlayer.width(width).height( width * aspectRatio );

      }
      
      // Initialize resizeVideoJS()
      resizeVideoJS();
      // Then on resize call resizeVideoJS()
       window.addEventListener("resize", resizeVideoJS, false);
    });
            videojs('my_video_2').ready(function(){
      console.log(this.options()); //log all of the default videojs options
      
       // Store the video object
      var myPlayer = this, id = myPlayer.id();
      // Make up an aspect ratio
      var aspectRatio = 9/16; 

      function resizeVideoJS(){
        var width = document.getElementById(id).parentElement.offsetWidth;
        myPlayer.width(width).height( width * aspectRatio );

      }
      
      // Initialize resizeVideoJS()
      resizeVideoJS();
      // Then on resize call resizeVideoJS()
       window.addEventListener("resize", resizeVideoJS, false);
    });
             videojs('my_video_3').ready(function(){
      console.log(this.options()); //log all of the default videojs options
      
       // Store the video object
      var myPlayer = this, id = myPlayer.id();
      // Make up an aspect ratio
      var aspectRatio = 9/16; 

      function resizeVideoJS(){
        var width = document.getElementById(id).parentElement.offsetWidth;
        myPlayer.width(width).height( width * aspectRatio );

      }
      
      // Initialize resizeVideoJS()
      resizeVideoJS();
      // Then on resize call resizeVideoJS()
       window.addEventListener("resize", resizeVideoJS, false);
    });


videojs('my_video_4').ready(function(){
      console.log(this.options()); //log all of the default videojs options
      
       // Store the video object
      var myPlayer = this, id = myPlayer.id();
      // Make up an aspect ratio
      var aspectRatio = 9/16; 

      function resizeVideoJS(){
        var width = document.getElementById(id).parentElement.offsetWidth;
        myPlayer.width(width).height( width * aspectRatio );

      }
      
      // Initialize resizeVideoJS()
      resizeVideoJS();
      // Then on resize call resizeVideoJS()
       window.addEventListener("resize", resizeVideoJS, false);
    });


