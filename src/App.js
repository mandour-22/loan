import { useState } from "react";
import "./App.css";
import icon from "./img/preview.jpg";
import Favicon from "react-favicon";

function App() {
  const [notes, setNotes] = useState({
    amount: 0,
    interest: 0,
    monthlySalary: 0,
    monthly: 0,
  });
  const [fav, setFav] = useState(icon);
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleOnSubmit = () => {
    if (!notes.amount || !notes.interest || !notes.monthly) {
      alert("الرجاء إدخال جميع البيانات المطلوبة");
    } else {
      setShow(true); // Show results
    }
  };

  return (
    <>
      <Favicon url={icon} />
      <section>
        <div className="container">
          <h1>حاسبة القروض</h1>
          <form>
            <div>
              <label>$</label>
              <input
                required
                type="number"
                onChange={(e) => setNotes({ ...notes, amount: e.target.value })}
                id="amount"
                placeholder="مبلغ القرض"
              />
            </div>
            <div>
              <label>%</label>
              <input
                required
                type="number"
                onChange={(e) =>
                  setNotes({ ...notes, interest: e.target.value })
                }
                id="interest"
                placeholder="الفوائد"
              />
            </div>
            <div>
              <input
                required
                type="number"
                onChange={(e) =>
                  setNotes({ ...notes, monthly: e.target.value })
                }
                id="monthlySalary"
                placeholder="عدد الاشهر"
              />
            </div>
          </form>
          <button onClick={handleOnSubmit}>النتائج</button>
          {show && (
            <>
              <h6>
                إجمالي الفوائد المستحقة :{" "}
                <span>{(notes.amount * notes.interest) / 100}</span>
              </h6>
              <h6>
                المبلغ الإجمالي:
                <span>
                  {+notes.amount + +(notes.amount * notes.interest) / 100}
                </span>
              </h6>
              <h6>
                المبلغ الشهري :{" "}
                <span>
                  {Math.round(
                    (+notes.amount + +(notes.amount * notes.interest) / 100) /
                      +notes.monthly
                  )}
                </span>
              </h6>
              <h6>
                اجمالى الاشهر : <span>{notes.monthly}</span>
              </h6>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
