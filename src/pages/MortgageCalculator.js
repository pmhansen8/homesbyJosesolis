import { useState } from "react";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import NavBar from '../Components/navbar';
import '../Css/Calc.css';

export default function MortgageCalculator() {
    const [mortgageAmount, setMortgageAmount] = useState("");
    const [term, setTerm] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [calculationType, setCalculationType] = useState("");
    const [monthlyResult, setMonthlyResult] = useState("");
    const [totalRepayment, setTotalRepayment] = useState("");
    const [error, setError] = useState({
        mortgageAmount: false,
        term: false,
        interestRate: false,
        calculationType: false,
    });

    function handleClear() {
        setMortgageAmount("");
        setTerm("");
        setInterestRate("");
        setCalculationType("");
        setMonthlyResult("");
        setTotalRepayment("");
        setError({
            mortgageAmount: false,
            term: false,
            interestRate: false,
            calculationType: false,
        });
    }

    function handleAmount(e) {
        setMortgageAmount(e.target.value);
    }

    function handleTerm(e) {
        setTerm(e.target.value);
    }

    function handleInterestRate(e) {
        setInterestRate(e.target.value);
    }

    function handleCalculationType(e) {
        setCalculationType(e.target.value);
    }

    function calculate(e) {
        e.preventDefault();

        const newError = {
            mortgageAmount: !mortgageAmount,
            term: !term,
            interestRate: !interestRate,
            calculationType: !calculationType,
        };

        setError(newError);

        if (
            newError.mortgageAmount ||
            newError.term ||
            newError.interestRate ||
            newError.calculationType
        ) {
            return;
        }

        const monthlyInterestRate = interestRate / 12 / 100;
        let monthlyPayment, totalRepaymentValue;

        if (calculationType === "repayment") {
            monthlyPayment =
                (mortgageAmount * monthlyInterestRate) /
                (1 - Math.pow(1 + monthlyInterestRate, -term * 12));
            totalRepaymentValue = monthlyPayment * term * 12;
        } else if (calculationType === "interestOnly") {
            monthlyPayment = mortgageAmount * monthlyInterestRate;
            totalRepaymentValue = monthlyPayment * term * 12;
        }

        setMonthlyResult(
            monthlyPayment.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
        );
        setTotalRepayment(
            totalRepaymentValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
        );
    }

    return (
        <div className="mortgage-calculator-container">
            <NavBar></NavBar>
            <LeftSection
                handleClear={handleClear}
                mortgageAmount={mortgageAmount}
                handleAmount={handleAmount}
                term={term}
                handleTerm={handleTerm}
                interestRate={interestRate}
                handleInterestRate={handleInterestRate}
                calculationType={calculationType}
                handleCalculationType={handleCalculationType}
                calculate={calculate}
                monthlyResult={monthlyResult}
                totalRepayment={totalRepayment}
                error={error}
            />
            <RightSection
                monthlyResult={monthlyResult}
                totalRepayment={totalRepayment}
                calculationType={calculationType}
            />
        </div>
    );
}