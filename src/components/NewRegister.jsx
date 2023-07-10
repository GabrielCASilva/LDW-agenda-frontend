import { postRegister } from "../api/server";
import Form from "./ui/Form";
import PropTypes from 'prop-types';

const NewRegister = (props) => {
  const { date, handleRegisters } = props;

  const handleFinish = async (values) => {
    const data = await postRegister({...values, data: date})
    handleRegisters((registers) => {
      return [...registers, data]
    });
  }

  return ( 
    <section className="register_details">
      <Form
          initialValues={undefined}
          onFinish={handleFinish}
          btnText="Adicionar Registro"
      />
    </section> 
  );
}

NewRegister.propTypes = {
  date: PropTypes.string,
  handleRegisters: PropTypes.func,
}
 
export default NewRegister;