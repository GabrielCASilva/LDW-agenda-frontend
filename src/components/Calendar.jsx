import { Calendar as AntCalendar } from 'antd';
import PropTypes from 'prop-types';

const Calendar = (props) => {
  const { handleSelect } = props;

  return (
    <AntCalendar 
      className="calandar" 
      fullscreen={false}
      onSelect={handleSelect}
    />
  );
}

Calendar.propTypes = {
  handleSelect: PropTypes.func.isRequired
}
 
export default Calendar;