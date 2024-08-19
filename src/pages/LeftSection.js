import btnCalc from "../pictures/icon-calculator.svg.url";
import '../Css/Calc.css'

export function LeftSection({
                                handleClear,
                                mortgageAmount,
                                term,
                                interestRate,
                                handleAmount,
                                handleTerm,
                                handleInterestRate,
                                calculationType,
                                handleCalculationType,
                                calculate,
                                monthlyResult,
                                totalRepayment,
                                error,
                            }) {
    return (
        <div className="left">
            <div className="header">
                <h2>Mortgage Calculator</h2>
                <button className="btn-clear-all" onClick={handleClear}>
                    Clear All
                </button>
            </div>
            <div className="Form">
                <form onSubmit={calculate}>
                    <div className="mortgage-amount">
                        <label>Mortgage Amount</label>
                        <div
                            className={`input-container start-placeholder ${
                                error.mortgageAmount ? "error" : ""
                            }`}
                            data-placeholder="$"
                        >
                            <input
                                type="text"
                                value={mortgageAmount}
                                onChange={handleAmount}
                                className={`start-placeholder input ${
                                    error.mortgageAmount ? "error" : ""
                                }`}
                            />
                        </div>
                        {error.mortgageAmount && (
                            <p className="err">This field is required</p>
                        )}
                    </div>
                    <div className="split">
                        <div className="term">
                            <label>Mortgage Term</label>
                            <div
                                className={`input-container end-placeholder ${
                                    error.term ? "error" : ""
                                }`}
                                data-placeholder="Years"
                            >
                                <input
                                    type="text"
                                    value={term}
                                    className={`input ${error.term ? "error" : ""}`}
                                    onChange={handleTerm}
                                />
                            </div>
                            {error.term && <p className="err">This field is required</p>}
                        </div>
                        <div className="rate">
                            <label>Interest Rate</label>
                            <div
                                className={`input-container end-placeholder ${
                                    error.interestRate ? "error" : ""
                                }`}
                                data-placeholder="%"
                            >
                                <input
                                    type="text"
                                    onChange={handleInterestRate}
                                    value={interestRate}
                                    className={`input ${error.interestRate ? "error" : ""}`}
                                />
                            </div>
                            {error.interestRate && (
                                <p className="err">This field is required</p>
                            )}
                        </div>
                    </div>
                    <label>Mortgage Type</label>
                    <div className="radio">
                        <div className="radio-input ">
                            <label>
                                <input
                                    type="radio"
                                    name="calculationType"
                                    value="repayment"
                                    checked={calculationType === "repayment"}
                                    onChange={handleCalculationType}
                                />
                                Repayment
                            </label>
                        </div>
                        <div className="radio-input ">
                            <label>
                                <input
                                    type="radio"
                                    name="calculationType"
                                    value="interestOnly"
                                    checked={calculationType === "interestOnly"}
                                    onChange={handleCalculationType}
                                />
                                Interest Only
                            </label>
                        </div>
                    </div>
                    {error.calculationType && (
                        <p className="err">This field is required</p>
                    )}
                    <button type="submit" className="btn-calc">
                         Calculate Repayments
                    </button>
                </form>
            </div>
        </div>
    );
}