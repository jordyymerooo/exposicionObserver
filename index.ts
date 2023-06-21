import { AlertaComunitaria } from './AlertaComunitaria';
import { Residente } from './Residente';

const alertaComunitaria = new AlertaComunitaria();
const residente1 = new Residente('Residente 1');
const residente2 = new Residente('Residente 2');

alertaComunitaria.adjuntar(residente1);
alertaComunitaria.adjuntar(residente2);

alertaComunitaria.notificar('¡Se ha detectado una intrusión en la zona!');
alertaComunitaria.notificar('Se acerca una tormenta fuerte. ¡Manténganse seguros!');

alertaComunitaria.desadjuntar(residente2);

alertaComunitaria.notificar('Se ha restablecido el suministro eléctrico.');
