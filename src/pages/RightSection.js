import errCacl from "../pictures/icon-calculator.svg.url";
import '../Css/Calc.css'

export function RightSection({
                                 monthlyResult,
                                 totalRepayment,
                                 calculationType,
                             }) {
    return (
        <div className="right">
            {monthlyResult ? (
                <div className="success-result">
                    <h3>Your results</h3>
                    <p>
                        Your results are shown below based on the information you provided.
                        To adjust the results, edit the form and click “calculate
                        repayments” again.
                    </p>
                    <div className="result">
                        <p>Your monthly repayments</p>
                        <h1 className="resultf">${monthlyResult}</h1>
                        <hr className="b" />
                        <div>
                            <p>Total you'll repay over the term </p>
                            <h4>${totalRepayment}</h4>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="error-result">

                    <h3>Results shown here</h3>
                    <p>
                        Complete the form and click “calculate repayments” to see what your
                        monthly repayments would be.
                    </p>
                </div>
            )}
        </div>
    );
}