function shake() {
    var n = 1;
    if (parent.moveBy) {
    for (i = 10; i > 0; i--) {
    for (j = n; j > 0; j--) {
    
    parent.moveBy((-i-10),0);
    parent.moveBy(0,(-i-10));
    parent.moveBy((-i-10),0);
    parent.moveBy(0,(i+10));
    parent.moveBy((i+10),0);
    parent.moveBy(0,(-i-10));
    parent.moveBy((-i-10),0);
    parent.moveBy(0,(i+10));
    parent.moveBy((i+10),0);
    parent.moveBy(0,(-i+10));
    parent.moveBy((-i-10),0);
    parent.moveBy(0,(-i+10));
    parent.moveBy((i+10),0);
    parent.moveBy(0,(i+10));
    parent.moveBy((i+10),0);
    parent.moveBy(0,(i+10));
             }
          }
       }
    
       setTimeout(shake, 50)

    }
    shake();