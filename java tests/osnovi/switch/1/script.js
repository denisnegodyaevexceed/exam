/*switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }*/


let name = prompt('Введите название браузера');

if (name == 'Edge') {
    alert('You have got the Edge!');
}
if (name == 'Chrome' || name == 'Firefox' || name == 'Safari' || name == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}