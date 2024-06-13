
const ColorButton = ({ color, changeColor, text }) => {
    return (
      <button className={`mt-2 text-white w-full py-2`}
              onClick={() => changeColor(color)}>
        {text}
      </button>
    );
  };
  