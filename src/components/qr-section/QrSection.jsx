import 'bootstrap/dist/css/bootstrap.min.css';
import qr from '../../images/qr.png';
import '../../styles/qr.css';

export default function QrSection() {
  const cantidad = 20.02;
  return (
    <div className="container text-center p-5 border border-4 rounded-lg" style={{backgroundColor: '#F8F9FA'}}>
      <p className="fs-5">
        Debe transferir la siguiente cantidad: {cantidad} Bs.
      </p>
      <img className='col-sm-12 col-md-6 border border-4 rounded' src={qr} alt="Descripción de la imagen" />
      <p className="fs-5 mt-4">
        Escanee con la app de su banco
      </p>
      <button type="button" className="btn btn-primary btn-lg btn-block mt-4">Volver</button>
    </div>
  )
}
