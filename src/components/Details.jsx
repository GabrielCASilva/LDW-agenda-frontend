
import PropTypes from 'prop-types';
import { putRegister } from '../api/server';
import Form from './ui/Form';

const Details = (props) => {
  const { register, date } = props;

  const handleFinish = (values) => {
    const editedValues = {...values, data: date}
    putRegister(register.id, editedValues);
  }

  const showForm = register;
  return ( 
    <section className="register_details">
      {!showForm && <p>Selecione um registro para visualizar</p>}

      {showForm && (
        <>
        <h2>Registro #{register.id}</h2>
        <Form
          initialValues={register}
          onFinish={handleFinish}
          btnText="Editar"
          />
        </>
      )}
    </section>
  );
}

Details.propTypes = {
  register: PropTypes.object,
  date: PropTypes.string,
}
 
export default Details;