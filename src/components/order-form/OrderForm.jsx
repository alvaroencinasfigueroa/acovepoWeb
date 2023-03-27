import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/OrderForm.css"

export default function OrderForm() {
  const [formValues, setFormValues] = useState({
    address: "",
    phone: "",
    comment: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos a tu backend o hacer lo que desees con ellos
    console.log(formValues);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <h2 className="text-center mb-4">Formulario de contacto</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formValues.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">
                Comentario
              </label>
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                value={formValues.comment}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
            </div>
            <div className="mb-3">
              <p className="mb-0">
                Usted está comprando productos por un valor de $X.
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}