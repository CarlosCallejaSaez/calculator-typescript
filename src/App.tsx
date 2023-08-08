import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer.tsx";

const CalculatorWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Display = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 10px;
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    transform: translateY(2px);
  }

  &.operator {
    background-color: #ff8c00;
    color: #fff;
  }

  &.equal {
    background-color: #008000;
    color: #fff;
  }
`;

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      handleCalculate();
    } else if (value === "C") {
      setInput("");
    } else if (value === "DEL") {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleCalculate = () => {
    try {
      const result = evaluateExpression(input);
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  };

  const evaluateExpression = (expression: string): string => {
    const operators = ["+", "-", "*", "/"];
    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      if (expression.includes(operator)) {
        const [leftOperand, rightOperand] = expression.split(operator);
        switch (operator) {
          case "+":
            return (Number(leftOperand) + Number(rightOperand)).toString();
          case "-":
            return (Number(leftOperand) - Number(rightOperand)).toString();
          case "*":
            return (Number(leftOperand) * Number(rightOperand)).toString();
          case "/":
            return (Number(leftOperand) / Number(rightOperand)).toString();
          default:
            return "Error";
        }
      }
    }
    return expression;
  };

  return (
    <>
      <CalculatorWrapper>
        <Display>{input}</Display>
        <ButtonsGrid>
          <Button onClick={() => handleButtonClick("7")}>7</Button>
          <Button onClick={() => handleButtonClick("8")}>8</Button>
          <Button onClick={() => handleButtonClick("9")}>9</Button>
          <Button onClick={() => handleButtonClick("+")} className="operator">
            +
          </Button>
          <Button onClick={() => handleButtonClick("4")}>4</Button>
          <Button onClick={() => handleButtonClick("5")}>5</Button>
          <Button onClick={() => handleButtonClick("6")}>6</Button>
          <Button onClick={() => handleButtonClick("-")} className="operator">
            -
          </Button>
          <Button onClick={() => handleButtonClick("1")}>1</Button>
          <Button onClick={() => handleButtonClick("2")}>2</Button>
          <Button onClick={() => handleButtonClick("3")}>3</Button>
          <Button onClick={() => handleButtonClick("*")} className="operator">
            *
          </Button>
          <Button onClick={() => handleButtonClick("0")}>0</Button>
          <Button onClick={() => handleButtonClick("C")} className="operator">
            C
          </Button>
          <Button onClick={() => handleButtonClick("=")} className="equal">
            =
          </Button>
          <Button onClick={() => handleButtonClick("/")} className="operator">
            /
          </Button>
          <Button onClick={() => handleButtonClick("DEL")} className="operator">
            DEL
          </Button>
        </ButtonsGrid>
      </CalculatorWrapper>
      <Footer />
    </>
  );
};

export default App;
