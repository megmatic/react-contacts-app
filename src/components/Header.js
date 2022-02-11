import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "#CF6679" : "#03DAC6"}
        text={showAdd ? "Close" : "Add Contact"}
        textColor={showAdd ? "#fafafa" : "#000"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Contact List",
};


Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
