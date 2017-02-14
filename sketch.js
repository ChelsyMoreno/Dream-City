

function setup() {
  createCanvas(600,600);
  background(255);
}

function draw() {
background(255);



//The brown-right
fill(203,201,189);
beginShape();
noStroke();
  vertex(318.5,0);
  vertex(600,0);
  vertex(600,600);
  vertex(362,600);
endShape();

//The brown-left
fill(180,175,151);
noStroke();
beginShape();
  vertex(322.3,0);
  vertex(362,600);
  vertex(253.7,600);
  vertex(245,334);
  vertex(258,149);
  vertex(248,0);
endShape();

//Light teal
fill(77,157,132);
noStroke();
  quad(189.8,600, 189.9,571.9, 252.8,571.9, 253.9,600 );

//Light teal
fill(77,157,132);
noStroke();
  quad(0,571.7,  0,600, 33.2,600, 33.1,571.6  );


//Light brown, bottom
fill(209,214,199);
noStroke();
  quad(33.1,571.6, 33.2,600, 189.8,600, 189.7,571.8  );


  //The brown square left hand side next to the house
  fill(209,214,199);
  noStroke();
    quad(0,487.3,  35.3,487.3 , 40.1,571.6 , 0,571.7  );



//square to the house
    fill(231,208,196);
      noStroke();
      beginShape();
        vertex(40.1,571.6);
        vertex(31.5,435.8);
        vertex(249.2,435.8 );
        vertex(252.8,571.9);
        vertex(40.1,571.6);
      endShape();


//the top of the house
    fill(207,186,159);
      noStroke();
      beginShape();
      vertex(250.7,435.5);
      vertex(172.1,368.3);
      vertex(157.4,355.8);
      vertex(137.1,338.4);
      vertex(78.6,380.3);
      vertex(26.7,417.6);
      vertex(26.2,435.5);
      endShape();


//LINE on the house
      fill(207,159,138);
        noStroke();
        beginShape();
          vertex(111.2,356.5);
          vertex(157.7,356);
          vertex(177,372.7);
          vertex(89,372.7);
          vertex(111.2,356.5);
        endShape();


//2edLINE on the house
      fill(207,159,138);
        noStroke();
          quad(189.1,382.6,  73.9,382.6,  58.1,393.6, 202.6,393.9   );


//3edLINE on the house
      fill(207,159,138);
        noStroke();
        beginShape();
        vertex(39.6,408.3);
        vertex(220,408.8);
        vertex(238.4,424.6);
        vertex(25.3,424.1);
        vertex(25.6,417.8);
        endShape();

//Left box on house
    fill(207,159,138);
      noStroke();
        quad(78.5,485.5, 74.5,571.5, 145.5,571.8, 146,483.2 );


    fill(193,185,159);
      noStroke();
        quad(146,483.2, 200.3,483.2, 201.2,571.7, 145.5,571.8 	 );

    fill(219,179,152);
      noStroke();
        quad(29.5,435.3, 82.8,435.3, 82.8,482.3, 34.8,481.8 	 );












}
