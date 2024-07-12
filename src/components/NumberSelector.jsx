/* eslint-disable react/prop-types */
import styled from "styled-components";

const NumberSelector = ({error,setError,selectedNumber,useSelectedNumber}) => {

  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) =>{
    useSelectedNumber(value)
    setError("")
  }
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, index) => {
          return (
            <Box
              isSelected={value === selectedNumber}
              key={value}
              onClick={()=>{numberSelectorHandler(value)}}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    .error{
        color: red;
    }
    .flex{
        display:flex;  
        gap: 24px;
    }
    p{
        font-weight: 700;
        font-size: 24px;
        text-align: end;
    }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
