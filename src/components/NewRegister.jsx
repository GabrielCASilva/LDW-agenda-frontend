import { useState } from "react";
import { postRegister } from "../api/server";
import { error, success } from "../handler/messages";
import Form from "./ui/Form";
import PropTypes from 'prop-types';
import { Spin } from "antd";

const NewRegister = (props) => {
  const { date, message, handleRegisters } = props;
  const [ loading, setLoading ] = useState(false);

  const handleFinish = async (values) => {
    setLoading(true)

    const data = await postRegister({...values, data: date});

    if(data) setLoading(false);
    if(data.error){
      error(message, data.message);
    }else{
      success(message, "Agendamento feito com sucesso");
      handleRegisters((registers) => {
        let ordered = [...registers, data].sort((a, b) => a.horario - b.horario)
        return ordered
      });
    }
  }

  return ( 
    <section className="register_details">
      <Spin spinning={loading} tip="Carregando...">
        <Form
            initialValues={undefined}
            onFinish={handleFinish}
            btnText="Adicionar Registro"
            />
      </Spin>
    </section> 
  );
}

NewRegister.propTypes = {
  message: PropTypes.object,
  date: PropTypes.string,
  handleRegisters: PropTypes.func,
}
 
export default NewRegister;