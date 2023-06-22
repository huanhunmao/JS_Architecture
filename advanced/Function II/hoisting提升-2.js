function bigBrother(){
    function littleBrother() {
      console.log('it is me!');
    }
    return littleBrother();
    function littleBrother() {
      console.log('no me!'); 
    }
  }
  
  // Before running this code, what do you think the output is?
  bigBrother(); // no me!

// process
  function bigBrother(){
    // fn littleBrother(){}
    function littleBrother() {
      console.log('it is me!');
    }
    return littleBrother();
    function littleBrother() {
      console.log('no me!'); 
    }
  }

  bigBrother()