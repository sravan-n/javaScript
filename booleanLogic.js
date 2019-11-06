/*********************************************
 * 
 * && (and)
 * returns TRUE if ALL values true
 * 
 * || (or)
 * returns TRUE if ONE value true
 * 
 * ! (NOT)
 * !TRUE -> FALSE
 * *******************************************/

 const p1Gen = 'male';
 const p2Gen = 'female';

 if (p1Gen == 'male' && p2Gen == 'female') {
     console.log('we have p1 male and p2 female');
 }

 if (p1Gen == 'male' || p2Gen == 'male') {
     console.log('atleast one is male');
 }

