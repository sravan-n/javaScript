const age = 25;

switch (true) {
    case age < 13:
        console.log('a boy');
        break;
    case age >= 13 && age <= 24:
        console.log('a teenager');
        break;
    default:
        console.log('adult');
}

// *******************************************

var profession = 'software engineer';

switch (profession) {
    case 'teacher':
        console.log('teaches things');
        break;
    case 'engineer':
        console.log('build things');
        break;
    default:
        console.log('do some thing');
}
