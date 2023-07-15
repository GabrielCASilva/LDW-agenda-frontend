
import PropTypes from 'prop-types';
import { putRegister } from '../api/server';
import Form from './ui/Form';
import { error, success } from '../handler/messages';
import { useState } from 'react';
import { Spin } from 'antd';

const Details = (props) => {
  const { register, date, message } = props;
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values) => {
    setLoading(true)
    const editedValues = {...values, data: date}
    const data = await putRegister(register.id, editedValues);

    if(data) setLoading(false)

    if(data.error){
      error(message, data.message)
    }else{
      success(message, "Agendamento editado com sucesso")
    }
  }

  const showForm = register;
  return ( 
    <section className="register_details">
      <Spin spinning={loading} tip="Carregando...">

      {!showForm && <p>Selecione um registro para visualizar</p>}

      {showForm && (
        <>
        <h2>Agendamento de {register.nome}</h2>
        <Form
          initialValues={register}
          onFinish={handleFinish}
          btnText="Editar"
          />
        </>
      )}
      </Spin>
    </section>
  );
}

Details.propTypes = {
  register: PropTypes.object,
  date: PropTypes.string,
  message: PropTypes.object
}
 
export default Details;